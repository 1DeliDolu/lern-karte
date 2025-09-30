'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { type AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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

interface PersistentAppBarProps extends MuiAppBarProps {
  open?: boolean;
}

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<PersistentAppBarProps>(({ theme, open }) => ({
  position: 'sticky',
  top: 0,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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

function formatLabel(name: string) {
  return name.replace(/-/g, ' ');
}

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
                    primaryTypographyProps={{ fontWeight: 600 }}
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
      <AppBar open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setOpen(true)}
            sx={[
              { mr: 2 },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Dokumentation
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {topLevelFiles.length > 0 && (
            <List disablePadding>{renderListItems(topLevelFiles)}</List>
          )}

          {topLevelDirs.map(dir => {
            const normalizedHref = normalizePath(dir.href);
            const selected = normalizedHref === normalizedPath;

            return (
              <Accordion
                key={dir.id}
                expanded={expanded === dir.id}
                onChange={handleAccordionChange(dir.id)}
              >
                <AccordionSummary aria-controls={`${dir.id}-content`} id={`${dir.id}-header`}>
                  <FolderOutlinedIcon fontSize="small" />
                  <Typography component="span" fontWeight={600}>
                    {formatLabel(dir.name)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List disablePadding>
                    <ListItem disablePadding>
                      <ListItemButton component={Link} href={dir.href} selected={selected}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <FolderOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={formatLabel(dir.name)}
                          primaryTypographyProps={{ fontWeight: 600 }}
                        />
                      </ListItemButton>
                    </ListItem>

                    {dir.children.length > 0 ? (
                      renderListItems(dir.children, 1)
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
        <DrawerHeader />
        <Box sx={{ maxWidth: 960, mx: 'auto', width: '100%' }}>
          {children}
        </Box>
      </Main>
    </Box>
  );
}
