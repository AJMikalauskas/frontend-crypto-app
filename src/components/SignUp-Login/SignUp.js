import React, { useRef, useState } from "react";
import styles from "./SignUp.module.css";
import {
    Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import logo from "../../images/logoImg.jpg";
import technoPic from "../../images/technoBgSignUp.jpg";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    // Add Refs so that data inputted into the input/text fields is tracked and sent up once form is submitted  
        // const testInputRef = useRef(); -> for textfield, normally tracked on every keystroke, im going to use refs here though 
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    //Navigate to different pages including the history back button, sign in, not sign up page,
let navigate = useNavigate();
  //  JSX conditionally show img div based on current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeListener = () => {
    setWindowWidth(window.innerWidth);
    //console.log(windowWidth);
    //return windowWidth;
  };
  window.addEventListener("resize", resizeListener);


//   Need to add type of submit to mui react button for it to call form submit.
  const formSubmitHandler = async(event) => {
     event.preventDefault();
     //console.log(testInputRef);
     //console.log(firstNameRef);
     console.log(firstNameRef.current.value);
     console.log(lastNameRef.current.value);
     console.log(emailRef.current.value);
     console.log(passwordRef.current.value);
    //navigate("/loggedInHomePage");


    try {
    //send POST request to google firebase backend
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOEdz8qvHiQMKD-HqYSqWUmOlZSM3YVUc", {
        method: "POST",
        headers: {
            "Content-Type": "aaplication/json"
        },
        body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
        }),
    });
    const data = await response.json();
    console.log(data);
    console.log(data.code);
} catch(error) {
    //show in error modal?
    if (error.message.length > 0) {
        console.log(error.message);
        alert(error.message);
      } else {
        alert("Authentication Failed!");
      }
}

  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles.mostImportantGridDiv}>
        <header className={styles.head}>
          <div className={styles.div1}>
            <div className={styles.div2}>
              <img src={logo} alt="logo" width="100px" height="10px" />
            </div>
          </div>
          <div className={styles.div3}>
            <div>
              <h2 className={styles.div3h2}>Create Login Info</h2>
            </div>
            <div className={styles.div4}>
              <span>
                We'll need your name, email address, and a unique password.
                You'll use this login to access your portfolio.
              </span>
            </div>
            {windowWidth > 768 && (
              <div>
                <img
                  alt="technoPic"
                  src={technoPic}
                  height="300px"
                  className={styles.technoImg}
                />
              </div>
            )}
          </div>
        </header>
        <main className={styles.main}>
            {/* <input ref={testInputRef}/> */}
          {/* Same css styles as div 3 as in here */}
          <div className={styles.div3}>
            <div className={styles.div4}>
              <div className={styles.maindiv3}>
                <span>Enter your first and last name which is on your ID.</span>
              </div>
              <div className={styles.maindiv4}>
                {/* Probably put refs to store data of these text field inputs */}
                <div className={styles.maindiv4div1}>
                  <div>
                    <TextField
                      id="outlined-firstName"
                      label="First name"
                      variant="outlined"
                      inputRef={firstNameRef}
                    //   value={firstNameRef}
                    ></TextField>
                  </div>
                </div>
                <div className={styles.maindiv4div2}>
                  <div>
                    <TextField
                      id="outlined-lastName"
                      label="Last name"
                      variant="outlined"
                      inputRef={lastNameRef}
                    ></TextField>
                  </div>
                </div>
              </div>
              <div className={styles.inputField3}>
                <div>
                  <TextField
                    id="outlined-emailAddress"
                    label="Email address"
                    variant="outlined"
                    inputRef={emailRef}
                  ></TextField>
                </div>
              </div>
              <FormControl
                sx={{ width: "31ch", marginTop: "20px" }}
                variant="outlined"
              >
                {/* <div> */}
                {/* <VisibilityOffIcon/> */}
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="password"
                  // type={values.showPassword ? 'text' : 'password'}
                  // value={values.password}
                  // onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        //   onClick={handleClickShowPassword}
                        //   onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                        <VisibilityOff />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  inputRef={passwordRef}
                />
                {/* </div> */}
              </FormControl>
              <div className={styles.loginLink}>
                  <div>
                    <span className={styles.loginLinkText}>
                        Already Started?
                    </span>
                    <div className={styles.loginLinkLink}>
                    <Link
                    // color="rgb(0,0,0)"
      component="button"
      variant="body2"
      onClick={() => {
        navigate("/signUp");
      }}
    >
      Log in to complete your application
    </Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
            <div className={styles.footerDiv1}></div>
            <div className={styles.footerDiv2}></div>
            <div className={styles.footerDivWithContent}>
                <div></div>
                <div className={styles.footerDivWithContentDiv1}>
                    <div className={styles.footerDivWithContentDiv1Div}>
                        <Button type="submit" variant="contained" sx={{ backgroundColor: "#2e7d32", borderRadius:"15px"}}>
                            continue
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </form>
  );
};

export default SignUp;
