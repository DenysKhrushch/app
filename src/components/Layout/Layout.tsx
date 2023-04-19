import React from 'react';
import { AppBar, Paper, Toolbar, Typography } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = React.memo(({ children }) => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">TodoApp by Denys Khrushch</Typography>
      </Toolbar>
    </AppBar>
    {children}
  </Paper>
));
