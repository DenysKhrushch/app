import React from 'react';
import { AppBar, Link, Paper, Toolbar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
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

        <Link
          style={{ color: '#fff', marginLeft: 'auto' }}
          href="https://github.com/DenysKhrushch/app"
        >
          <GitHubIcon />
        </Link>
      </Toolbar>
    </AppBar>
    {children}
  </Paper>
));
