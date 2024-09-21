import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

function Header({ title, onRefresh }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton color="inherit" onClick={onRefresh} aria-label="refresh">
          <RefreshIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
