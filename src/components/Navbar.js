import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
//Make navbar buttons and items bigger, add logo

const logo = require("../assets/NephoLogo.png")

//const pages = ['Home', 'Company Overview', 'Our Services','Job Openings'];

const pages =[
  {
    id:1,
    desc:'Home',
    link:'/'
  },
  {
    id:2,
    desc:'Company Overview',
    link:'company'
  },
  {
    id:3,
    desc:'Our Services',
    link:'services'
  },
  {
    id:4,
    desc:'Job Openings',
    link:'jobs'
  }
]

function NavbarComponent() {
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        console.log("getting clicked")
      };
    
    
    return (
        <AppBar position="static" sx={{backgroundColor:'#fe6601',height:'8%'}} className='justify-center' >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} className='bg-cover h-[7vh] mr-3'/>
          <div className='mr-2' style={{fontFamily:"'Poppins', sans-serif", fontWeight:"bold",}}>Nepho Healthcare</div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem key='1' onClick={handleCloseNavMenu} component="a" href="/">
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem key='2' onClick={handleCloseNavMenu} component="a" href="company" >
                  <Typography textAlign="center">Company Overview</Typography>
                </MenuItem>
                <MenuItem key='3' onClick={handleCloseNavMenu} component="a" href="services">
                  <Typography textAlign="center">Our Services</Typography>
                </MenuItem>
                <MenuItem key='4' onClick={handleCloseNavMenu} component="a" href="jobs">
                  <Typography textAlign="center">Job Openings</Typography>
                </MenuItem>
                <MenuItem key='5' onClick={handleCloseNavMenu} component="a" href="login">
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem key='6' onClick={handleCloseNavMenu} component="a" href="contact">
                  <Typography textAlign="center">Contact Us</Typography>
                </MenuItem>
                
              

            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                href={page.link}
                onClick={handleCloseNavMenu}
                sx={{fontFamily:"'Poppins', sans-serif", fontWeight:"bold", my: 2, color: 'white', display: 'block',textAlign:'center', marginY:'auto',"&:hover":{backgroundColor:'#ed6002'}, ml:2}}
              >
                {page.desc}
              </Button>
            ))}
          </Box>

          
          <Button variant='contained' href='login' sx={{display: { xs: 'none', sm: 'block'},fontFamily:"'Poppins', sans-serif", fontWeight:"bold",color:'orange', backgroundColor:'white',"&:hover":{backgroundColor:'#e3e3e3'}}}>Login</Button>
          <Button variant='outlined' href='contact' sx={{display: { xs: 'none', sm: 'block'},fontFamily:"'Poppins', sans-serif", fontWeight:"bold",ml: 5, borderColor:'white', color:'white',textAlign:'center',"&:hover":{backgroundColor:'white', color:'orange'}}}>Contact Us</Button>
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default NavbarComponent