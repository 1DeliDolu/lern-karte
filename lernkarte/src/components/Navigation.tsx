'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

// Minimal navigation: two links (Home, Lernkarte). Keep this file small to avoid
// runtime issues; expand UI later.
export default function Navigation() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Lernkarte', href: '/lern' },
  ];

  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Lern-App
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
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
