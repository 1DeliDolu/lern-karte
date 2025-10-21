'use client';

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { NAV_ITEMS } from '@/constants/navItems';

type SearchResult = {
  id: string;
  type: 'question' | 'documentation' | 'lernfeld' | 'page';
  title: string;
  description?: string;
  href: string;
  location?: string;
};

type SearchResponse = {
  results: SearchResult[];
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const SearchResultsContainer = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 'calc(100% + 8px)',
  left: 0,
  right: 0,
  zIndex: theme.zIndex.modal,
  maxHeight: 360,
  overflowY: 'auto',
  padding: theme.spacing(1, 0),
}));

const typeLabels: Record<SearchResult['type'], string> = {
  question: 'Frage',
  documentation: 'Dokumentation',
  lernfeld: 'Lernfeld',
  page: 'Sayfa',
};

export default function Navigation() {
  const router = useRouter();
  const [query, setQuery] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const fetchIdRef = React.useRef(0);

  const trimmedQuery = query.trim();

  React.useEffect(() => {
    if (!trimmedQuery) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    const fetchId = fetchIdRef.current + 1;
    fetchIdRef.current = fetchId;
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(trimmedQuery)}`, {
        signal: controller.signal,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Search failed with status ${response.status}`);
          }
          return response.json() as Promise<SearchResponse>;
        })
        .then((data) => {
          if (fetchIdRef.current !== fetchId) return;
          setResults(data.results ?? []);
          setLoading(false);
        })
        .catch((err) => {
          if (controller.signal.aborted) return;
          if (fetchIdRef.current !== fetchId) return;
          console.error('Search request failed', err);
          setError('Arama sırasında bir sorun oluştu.');
          setLoading(false);
        });
    }, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [trimmedQuery]);

  const handleClickAway = React.useCallback(() => {
    setOpen(false);
  }, []);

  const handleFocus = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
      if (!open) setOpen(true);
    },
    [open],
  );

  const handleResultClick = React.useCallback(() => {
    setOpen(false);
    setQuery('');
    setResults([]);
  }, []);

  const handleInputKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (event.key === 'Enter' && results[0]) {
        event.preventDefault();
        router.push(results[0].href);
        handleResultClick();
      }
    },
    [results, router, handleResultClick],
  );

  const shouldShowResults = open && (loading || error || trimmedQuery.length > 0);

  return (
    <AppBar position="static" component="nav">
      <Toolbar sx={{ gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
          <Typography variant="h6" noWrap>
            Lernkarte-App
          </Typography>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative', minWidth: { xs: '60%', sm: 240, md: 320 } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Ara…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={query}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onKeyDown={handleInputKeyDown}
                />
              </Search>
              {shouldShowResults && (
                <SearchResultsContainer elevation={6}>
                  {loading ? (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2,
                        py: 1.5,
                      }}
                    >
                      <CircularProgress size={18} thickness={4} />
                      <Typography variant="body2" color="text.secondary">
                        Aranıyor…
                      </Typography>
                    </Box>
                  ) : error ? (
                    <Box sx={{ px: 2, py: 1.5 }}>
                      <Typography variant="body2" color="error">
                        {error}
                      </Typography>
                    </Box>
                  ) : results.length > 0 ? (
                    <List disablePadding>
                      {results.map((result) => (
                        <ListItemButton
                          key={result.id}
                          alignItems="flex-start"
                          component={Link}
                          href={result.href}
                          onClick={handleResultClick}
                          sx={{ py: 1, px: 2 }}
                        >
                          <ListItemText
                            disableTypography
                            primary={
                              <Box
                                sx={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  gap: 1,
                                }}
                              >
                                <Typography component="span" variant="subtitle1" sx={{ fontWeight: 600 }}>
                                  {result.title}
                                </Typography>
                                <Typography
                                  component="span"
                                  variant="caption"
                                  color="text.secondary"
                                  sx={{ textTransform: 'uppercase', flexShrink: 0 }}
                                >
                                  {typeLabels[result.type]}
                                </Typography>
                              </Box>
                            }
                            secondary={
                              <Box component="div" sx={{ display: 'grid', gap: 0.5, mt: 0.5 }}>
                                {result.location && (
                                  <Typography component="span" variant="caption" color="text.secondary">
                                    {result.location}
                                  </Typography>
                                )}
                                {result.description && (
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                                  >
                                    {result.description}
                                  </Typography>
                                )}
                              </Box>
                            }
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  ) : (
                    <Box sx={{ px: 2, py: 1.5 }}>
                      <Typography variant="body2" color="text.secondary">
                        Sonuç bulunamadı.
                      </Typography>
                    </Box>
                  )}
                </SearchResultsContainer>
              )}
            </Box>
          </ClickAwayListener>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              sx={{ color: '#fff', textDecoration: 'none' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
