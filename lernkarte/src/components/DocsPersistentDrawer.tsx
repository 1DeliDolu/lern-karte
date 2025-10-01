'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { type AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  type AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Paper from '@mui/material/Paper';
import { formatLabel } from '@/utils/format';

export type DocsNavNode =
  | { id: string; type: 'file'; name: string; href: string }
  | { id: string; type: 'dir'; name: string; href: string; children: DocsNavNode[] };

type Props = {
  nodes: DocsNavNode[];
  children: React.ReactNode;
};

const drawerWidth = 280;
const STORAGE_KEY = 'docs:persistent-drawer';
const ACCORDION_KEY = 'docs:persistent-accordion';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  '&:not(:last-of-type)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
}));

function normalizePath(value: string) {
  return value.endsWith('/') && value.length > 1 ? value.slice(0, -1) : value;
}

export default function DocsPersistentDrawer({ nodes, children }: Props) {
  const theme = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  React.useEffect(() => {
    const stored = typeof window === 'undefined' ? null : window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'open') {
      setOpen(true);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, open ? 'open' : 'closed');
  }, [open]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    setExpanded(prev => {
      if (prev) return prev;

      const stored = window.localStorage.getItem(ACCORDION_KEY);
      const storedValid = nodes.some(node => node.type === 'dir' && node.id === stored);
      if (stored && storedValid) {
        return stored;
      }

      const firstDir = nodes.find(node => node.type === 'dir');
      return firstDir ? firstDir.id : false;
    });
  }, [nodes]);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (expanded) {
      window.localStorage.setItem(ACCORDION_KEY, expanded);
    } else {
      window.localStorage.removeItem(ACCORDION_KEY);
    }
  }, [expanded]);

  const normalizedPath = normalizePath(pathname ?? '');

  const renderListItems = React.useCallback(
    (items: DocsNavNode[], depth = 0): React.ReactNode[] =>
      items.map(node => {
        if (node.type === 'dir') {
          const normalizedHref = normalizePath(node.href);
          const selected = normalizedHref === normalizedPath;

          return (
            <React.Fragment key={node.id}>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href={node.href}
                  sx={{ pl: 2 + depth * 2 }}
                  selected={selected}
                >
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <FolderOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={formatLabel(node.name)}
                    slotProps={{ primary: { fontWeight: 600 } }}
                  />
                </ListItemButton>
              </ListItem>
              {node.children.length > 0 && (
                <List disablePadding sx={{ pl: 2 }}>
                  {renderListItems(node.children, depth + 1)}
                </List>
              )}
            </React.Fragment>
          );
        }

        const normalizedHref = normalizePath(node.href);
        const selected = normalizedHref === normalizedPath;

        return (
          <ListItem disablePadding key={node.id}>
            <ListItemButton
              component={Link}
              href={node.href}
              sx={{ pl: 4 + depth * 2 }}
              selected={selected}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                <ArticleOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={formatLabel(node.name)} />
            </ListItemButton>
          </ListItem>
        );
      }),
    [normalizedPath],
  );

  const handleAccordionChange = React.useCallback(
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    },
    [],
  );

  const topLevelFiles = React.useMemo(
    () => nodes.filter(node => node.type === 'file'),
    [nodes],
  );

  const topLevelDirs = React.useMemo(
    () => nodes.filter(node => node.type === 'dir'),
    [nodes],
  );


  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {topLevelFiles.length > 0 && (
            <List disablePadding>{renderListItems(topLevelFiles)}</List>
          )}

          {topLevelDirs.map(dir => {
            return (
              <Accordion
                key={dir.id}
                expanded={expanded === dir.id}
                onChange={handleAccordionChange(dir.id)}
                sx={{ 
                  '&:before': { display: 'none' },
                  boxShadow: 'none',
                  border: 'none',
                  borderRadius: 0
                }}
              >
                <AccordionSummary 
                  aria-controls={`${dir.id}-content`} 
                  id={`${dir.id}-header`}
                  sx={{ px: 2, py: 1 }}
                >
                  <FolderOutlinedIcon fontSize="small" />
                  <Typography component="span" fontWeight={600}>
                    {formatLabel(dir.name)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <List disablePadding>
                    {dir.children.length > 0 ? (
                      renderListItems(dir.children, 0)
                    ) : (
                      <Typography variant="body2" color="text.secondary" sx={{ px: 2, py: 1 }}>
                        Keine Inhalte vorhanden.
                      </Typography>
                    )}
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
      <Main open={open}>
        {!open && (
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              position: 'fixed',
              left: 16,
              top: 80,
              zIndex: 1200,
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': { bgcolor: 'action.hover' }
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ maxWidth: '100%', mx: 'auto', width: '100%' }}>
          <Paper
            id="docs-main"
            data-testid="docs-main"
            elevation={0}
            sx={{ mt: 0, p: { xs: 0.5, md: 1 }, bgcolor: 'background.paper', minHeight: '60vh' }}
          >
            {React.Children.toArray(children)}
          </Paper>
        </Box>
      </Main>
    </Box>
  );
}
