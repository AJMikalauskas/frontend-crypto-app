import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider} from '@material-ui/core/styles';
import styles from "./LoggedInAppBar.module.css";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
// import clsx from "clsx";
// import AdbIcon from '@mui/icons-material/Adb';


// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const darkTheme = createTheme({
//     palette: {
//     //   mode: 'dark',
//       primary: {
//         main: '#2e7d32',
//       },
//     },
//     overrides: {
//         MuiAppBar: {
//           colorPrimary: {
//             backgroundColor: "#662E9B",
//           },
//         },
//       },
//   });


// 1st Search Wrapper
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
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
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


const LoggedInAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [error, setError] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const trackSearchInputHandler = async(event) => {
    fetch(
      'https://coingecko.p.rapidapi.com/coins/list',
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
          "X-RapidAPI-Key":
            "3fb132f0a4msh01884afa74b3096p1653c7jsnd2db1dce89cf",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
          // does .then() run synchronously somewhat by waiting for response.json() and then moves ot next step of
            // this data handling  and then if error, catch is called -> but also at the same time they say that 
              // .then() runs asynchronously and asyc/await is just syntactic sugar
          console.log(data);
          console.log(event.target.value);
          //const filteredData = data.map(cryptoCoin => cryptoCoin.name[0].toLowerCase() === event.target.value);
          //? Should return about 1000 entries in filteredData -> use .filter() not .map() -> returned correct result
            //? Need to make more versatile for further typing do beyond just [0] -> used slice string pre built method
          const filteredData = data.filter(cryptoCoin => cryptoCoin.name.slice(0,event.target.value.length)
                .toLowerCase() === event.target.value);
          console.log(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      // .finally(() => {
      //   setLoading(false);
      // });
  }

//   const theme = useTheme();
//   <ThemeProvider theme={darkTheme}>
      {/* color="primary" */}
  return (
    <AppBar position='fixed' sx={{background: "#defade"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Avatar sx={{ background: "#000"}}>
                <ShowChartIcon color='primary'/>
            </Avatar>

            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Cryptos…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={trackSearchInputHandler}
            />
          </Search>

          {/* <Box sx={{ flexGrow: 1 }}> */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ marginLeft: "auto" }} >
                <Avatar sx={{ background: "#000"}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    // </ThemeProvider>
  );
};

export default LoggedInAppBar;
