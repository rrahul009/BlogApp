import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  
  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "white" }}>
        <Toolbar>
          {/* Menu Icon (Optional) */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to='/'>
            <Typography color="Black" variant="h5">
              Subscribe
            </Typography></Link>
          </IconButton>

          {/* Logo (Centered) */}
          <Typography
            variant="h6"
            component="div"
            color="black"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Blog
          </Typography>

          {/* Logout Button */}
         <NavLink to='/userauth'>
         <Button size="large" color="inherit" >
            <Typography color="black">Login</Typography>
          </Button>
         </NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;