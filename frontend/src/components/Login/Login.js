import React, { useEffect, useRef, useState, useContext } from "react";
import styles from "./Login.module.css";
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
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
const LOGIN_URL = '/auth';

const Login = () => {
  
  // Regex Validation 
  const firstNameRef = useRef();
  const errRef = useRef();

  // This is for on keystroke tracking and allowing us to check if password and email meet specific requirements
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  // Success or Fail Login States -> error message is for specific requirements in password and email
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Navigate to different pages including the history back button, sign in, not sign up page,
  let navigate = useNavigate();

  // To focus the first name input on load of page
  useEffect(() => {
    firstNameRef.current.focus();
  });

  // Stop error message from showing if requirements are met in password and email
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  // JSX conditionally show img div based on current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeListener = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", resizeListener);

  // Object destructure the setAuth from the AuthContext using the useContext() hook
const {setAuth} = useContext(AuthContext);
  // Handles inputs of when form is submitted.
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    // new user to send up to axios/node backend of adding a new user. Uses ES6 feature of same property name as same value name.
    const newUser = { firstName, lastName, email, password };

    try {
        // Options added are to pass in body/data as JSON and withCredentials as true.
        const response = await axios.post(LOGIN_URL,
            JSON.stringify(newUser),
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            })
        // axios handles the response already unlike fetch and converts from JSON; converted back to JSON below
            // If response isn't null it will try to access the data property within, else if it is null it won't do something that will result in error
        console.log(JSON.stringify(response?.data));
        // Optional chaining by(?) -> Codes/Roles are made up, not sure exactly what they are.
        const accessToken  = response?.data?.accessToken;
        const roles = response?.data?.roles;
        // Set Auth object to the values we get back from response
        setAuth({ firstName, lastName, email, password, roles, accessToken})
    // If all goes well, form is submitted successfully and change state; set all inputs to empty strings too
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setSuccess(true);
    } catch(err) {
        // Handle errors using optional chaining(?), probably no reason for the optional chaining in the 1st if; May be good
            // due to the fact it does 2 things in 1, so if the err passes the optional chaing, the else if doesn't have to contain the err with
                // optional chaing(?)
        if(!err?.response)
        {
            setErrMsg("No Server Response");
        } else if(err.response?.status === 400)
        { // optional chaining to check if there is a response and if so will try to access the property of status. 
            setErrMsg("Missing Username or Password")
        } else if(err.response?.status === 401) 
        {
            setErrMsg("Unauthorized")
        } else {
            setErrMsg("Login Failed")
        }
        // So the user can read the error message, focus the error paragraph.
        errRef.current.focus();
    }
  };

  return (
    <section>
      {/* If there is an error message, it will choose the errmsg classname styles else the offscreen styles. Aria-live is for when the error message
        is focused from ref. */}
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
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
                  <span>
                    Enter your first and last name which is on your ID.
                  </span>
                </div>
                <div className={styles.maindiv4}>
                  {/* Probably put refs to store data of these text field inputs */}
                  <div className={styles.maindiv4div1}>
                    <div>
                      <TextField
                        id="outlined-firstName"
                        label="First name"
                        variant="outlined"
                        type="text"
                        autoComplete="off"
                        ref={firstNameRef}
                        onChange={(e) => setFirstName(e.target.value)}
                        // Crucial if you are going to clear inputs on submission, put value as useState() -> 2-way binding
                        value={firstName}
                        required
                      ></TextField>
                    </div>
                  </div>
                  {/* No need for refs in these next inputs as they aren't going to be focused */}
                  <div className={styles.maindiv4div2}>
                    <div>
                      <TextField
                        id="outlined-lastName"
                        label="Last name"
                        variant="outlined"
                        type="text"
                        autoComplete="off"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        required
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
                      type="text"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
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
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  {/* </div> */}
                </FormControl>
                <div className={styles.loginLink}>
                  <div>
                    <span className={styles.loginLinkText}>
                      Already have an account? 
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
                        Login here
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
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#2e7d32", borderRadius: "15px" }}
                    // Put router link and navigation here?
                    href="#"
                  >
                    continue
                  </Button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </form>
    </section>
  );
};

export default Login;