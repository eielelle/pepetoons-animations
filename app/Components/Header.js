"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const pages = ['Home', 'About', 'Blog', 'Contact'];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
   
      <Link to="/sibling">Sibling Page</Link> | 
      <Link to="/fapp">Fapp Page</Link>

     <AppBar position="sticky" sx={{backgroundColor: '#5D5250'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex' , alignItems: 'left', mr: 2 }}>
            <img 
              src = "Resources/images.jpg"
              alt= "Pepetons Logo"
              style={{ width: 50, height: 50, marginRight: 5 }}
            />

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'Passion One',
              fontWeight: 700,
              letterSpacing: 'normal',
              color: 'white',
              textDecoration: 'none',
            }}>Pepetoons</Typography>
            </Box>
     
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
  );
}


// const Header = () => {
//   return (
//     <header>
//       <p>This is Header</p>
//     </header>
//   )
// }

// export default Header
