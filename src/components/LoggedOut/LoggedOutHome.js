import React from "react";
//import Layout from "../Layout/Layout";
import {Avatar, Paper} from "@mui/material";
import { Typography, Grid } from "@mui/material" ;
import { Box, fontSize, lineHeight, createTheme } from "@mui/system";
import { ThemeProvider, styled } from "@mui/material/styles";
//import Typewriter from "typewriter-effect";
//import TypeWriterEffect from "react-typewriter-effect";
import Typical from "react-typical";
import jumboBgImg from "../../images/jumboBgImg.jpg";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
// const fontSize1 = 14;
// const htmlFontSize = 16;
// const coef = fontSize1 / 14;

const mainJumboTheme = createTheme({
    breakpoints: {
        values: {
          xxs: 0, // small phone
          xs: 300, // phone
          sm: 600, // tablets
          md: 900, // small laptop
          lg: 1200, // desktop
          xl: 1536 // large screens
        }
      },
    //   Have to define Typography tags variant of h2 or else an error will throw for some weird reason 
      // This error is probably because I'm defining a new theme in here which means I can't really access the default theme when
        // this typography tag is wrapped in another theme -> im assuming
            // if add variant of h6 without definition, inherits from h2 variant, need to set h6 variant css styles
      typography: {
        //pxToRem: size => `${(size / htmlFontSize) * coef}rem`,
          h2: {
              fontSize: "20px",
              fontWeight: "bold"
          },
          h3: {
            color: "#1976d2",
            margin: "0px 0px 0.35em",
            font: "Inter, sans-serif",
            fontSize: "1.5625rem",
            lineHeight: 1.235,
            textAlign: "center",
            // color: "rgb(30, 32, 34)",
            fontWeight: 700
        },
          h6: {
              fontSize: "13px",
              fontWeight: 500
          } 
      }
})


// Base Theme, very interesting, use for breakpoints in second box as Mui Avatar tags cannot be in custom theme without weird pxtorem error and more
// const Root = styled('div')(({ theme }) => ({
//     // padding: theme.spacing(1),
//     [theme.breakpoints.up('sm')]: {
//         flexBasis: "100%", 
//         flexGrow: 0, 
//         maxWidth: "100%", 
//         WebkitBoxFlex: 0
//     },
//     [theme.breakpoints.up('md')]: {
//         flexBasis: "100%", 
//         flexGrow: 0, 
//         maxWidth: "33.33%", 
//         WebkitBoxFlex: 0
//     },
//   }));

const LoggedOutHome = (props) => {

    return (
        <div>
            <ThemeProvider theme={mainJumboTheme}>
        {/* // Main Box -> Could seem like jumbotron in bootstrap
            //  , position: "relative" backgroundRepeat: "repeat-x" background: "linear-gradient(rgba(255, 255, 255, 0), rgb(247, 250, 255) 100%)", */}
        <Box sx={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgb(247, 250, 255) 100%)", backgroundRepeat: "repeat-x", position: "relative"}}>
            <Box component="img" sx={{ boxShadow: 3, height: "500px" ,width: "100%", position: "absolute"}} alt="cryptoBgImg" src={jumboBgImg} />
            <Box sx={{ paddingTop: "0px", paddingBottom: "0px", position: "relative", color: "white", textAlign: "center", 
                    [mainJumboTheme.breakpoints.up('sm')]: { paddingTop: "4rem", paddingBottom: "4rem"}, 
                    [mainJumboTheme.breakpoints.up('md')]: { paddingTop: "2rem", paddingBottom: "6rem"}}}>
                <Box sx={{ paddingTop: "32px", paddingBottom: "32px", paddingLeft: "20px",  position: "relative",
                [mainJumboTheme.breakpoints.up('sm')]: { paddingTop: "48px", paddingBottom: "48px", paddingLeft: "20px", maxWidth: "720px" }, 
                [mainJumboTheme.breakpoints.up('md')]: { paddingTop: "64px", paddingBottom: "64px", paddingLeft: "30%", maxWidth: "1236px" }}}>
                    <Box sx={{maxWidth: "100%",  position: "relative", [mainJumboTheme.breakpoints.up('sm')]: { maxWidth: "50%"}}}>
                        <Typography variant="h2" gutterBottom>
                            Invest your money
                            <br/>
                            {/* Use mui typography tag here for auto type in effect */}
                            {/* <span data-period="2000" data-rotate='["Crypto", "Stocks", "ETFs", "NFTs"]'></span> */}
                            {/* Use typewriter effect import from geeksforgeeks.org */}
                            {/* <Typewriter onInit={(typewriter) => {typewriter.typeString("Stocks").pauseFor(1000).deleteAll().typeString("Crypto")
                        .pauseFor(1000).deleteAll().typeString("ETFs").pauseFor(1000).deleteAll().typeString("NFTs").start()}}/> */}
                            {/* <TypeWriterEffect 
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: '#3F3D56',
                                fontWeight: 500,
                                fontSize: '1.5em',
                              }}
                            startDelay={2000}
                            cursorColor="#3F3D56"
                            multiText={[
                              'Hey there, This is a type writer animation package',
                              'it consist of two types...',
                              'Single text display and multi text display',
                              'Fonts can be customized.',
                              'The type speed can be customized as well',
                            ]}
                            multiTextDelay={1000}
                            typeSpeed={30}/> */}
                            {/* <span style={{ color : "#1976d2", display: "inline", margin: "0px" }}></span></Typography> */}
                            {/* <mark style={{ display: "inline-block", paddingBottom: "0.5em", lineHeight: "0em" }}> </mark> rgba(249, 185, 52, 0.3)*/}
                            <span>into <span style={{ color : "#ADD8e6", background: "linear-gradient(transparent 82%, #90ee90 0%)" }}> 
                                        <Typical wrapper="b" loop={Infinity} steps={["Stocks 📈", 3000, "Cryptos 🚀", 3000, "ETFs 💸", 3000, "NFTs🐒", 3000]}/> 
                                    </span>
                            </span>
                            {/* /</span> */}
                        </Typography>
                        <Typography variant="h6">
                            The best modernized way to invest in the ever expanding market of crypto and stocks!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        </ThemeProvider>
        {/*  Add path/svg to split box sections */}
            {/* May just add divider or horizontal ruler */}

        {/* //  Second Box, Mostly Dummy, and simple text > marginTop: "50px", */}
        {/* Cannot have custom theme and avatar tags, use base theme for now as seen in Root function/constant above. */}
        <ThemeProvider theme={mainJumboTheme}>
        <Box sx={{ width: "100%", margin: "0px auto", marginTop: "100px", paddingLeft: "16px", paddingRight: "16px",  
                    [mainJumboTheme.breakpoints.up('sm')]: { paddingTop: "48px", paddingBottom: "48px", maxWidth: "720px"}, 
                    [mainJumboTheme.breakpoints.up('md')]: { paddingTop: "64px", paddingBottom: "64px", maxWidth: "1236px"}}}>
                        {/* Have no clue why this empty box div is here */}
            <Box>
                <Box sx={{marginBottom: "32px"}}>
                    <Box sx={{marginBottom: "16px"}}>
                        <Typography sx={{ [mainJumboTheme.breakpoints.up('sm')]: { fontSize: "1.0219rem"}, [mainJumboTheme.breakpoints.up('md')]: { fontSize: "2.0243rem"} }} variant="h3" gutterBottom>
                            Start Investing In Minutes
                        </Typography>
                        <Typography sx={{ margin: "0px", font: "Inter, sans-serif", fontSize: "1.125rem", lineHeight: 1.6, textAlign: "center",
                    color: "rgb(103, 119, 136)", fontWeight: 400, 
                    [mainJumboTheme.breakpoints.up('sm')]: { fontSize: "1.125rem"}, 
                    [mainJumboTheme.breakpoints.up('md')]: { fontSize: "1.125rem"}  }} variant="h6">
                            Investing has finally been made easy, an all-in-one crypto and stock buying platform! 
                        </Typography>
                    </Box>
                </Box>
                <Grid container spacing={2} sx={{  boxSizing: "border-box", display: "flex", flexFlow: "row wrap", marginTop: "-16px", 
                width: "calc(100% + 16px)", marginLeft: "-16px"}}>
                    <Grid item xs={4} sx= {{boxSizing: "border-box", margin: "0px",flexDrection: "row", paddingTop: "16px", paddingLeft: "16px",
                [mainJumboTheme.breakpoints.up('sm')]: { flexBasis: "100%", flexGrow: 0, maxWidth: "100%", WebkitBoxFlex: 0},
                [mainJumboTheme.breakpoints.up('md')]: {flexBasis: "100%", flexGrow: 0, maxWidth: "33.33%", WebkitBoxFlex: 0}}}>
                       <Box sx={{ width: "100%", height: "100%"}}>
                            <Box sx={{ display: "flex", flexDirection: "column", WebkitBoxAlign: "center", alignItems: "center"}}>
                            <Avatar sx={{color: "#1976d2"}}>
                                    {/* <svg height= "24" width="24" fill="none" stroke="currentColor"> */}
                                        <AccessTimeFilledIcon />
                                    {/* </svg> */}
                                </Avatar>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </ThemeProvider>
    </div>
    )
}

export default LoggedOutHome;