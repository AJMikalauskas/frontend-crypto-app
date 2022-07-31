import React, { useEffect, useRef, useState, useContext } from "react";
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
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
// Need to manually import these.
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//const LOGIN_URL = '/auth';


// Regex Validation 
const EMAIL_REGEX = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const PASSWORD_REGEX= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NAME_REGEX = /^[a-z]{2,15}$/i; 

const SignUp = () => {
  

  // refs are used to focus on the input/ref field.
  const firstNameRef = useRef();
  const errRef = useRef();

  // This is for on keystroke tracking and allowing us to check if password and email meet specific requirements
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [errShowing, setErrShowing] = useState(false);
  // validity states of each input
  const [validLastname, setValidLastname] = useState(false);
  const [validFirstname, setValidFirstname] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  // Not exactly sure why focus on all of them may be to show which is valid when focused on?
  const [firstnameFocus, setFirstnameFocus] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);


  // Success or Fail Login States -> error message is for specific requirements in password and email
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Navigate to different pages including the history back button, sign in, not sign up page,
  let navigate = useNavigate();

  // To focus the first name input on load of page
  useEffect(() => {
    firstNameRef.current.focus();
  });

  // validity of firstname using useEffect, everytime state of firstname changes -> IGNORE LINTER ERROR
  useEffect(() => {
    // will return boolean value based on .test() method from regex.
    const result = NAME_REGEX.test(firstname);
    console.log(result);
    console.log(`${firstname}`);
    setValidFirstname(result);
    setErrShowing(firstname && !validFirstname && firstnameFocus)
  }, [firstname, firstnameFocus, validFirstname]);

    // validity of lastname using useEffect, everytime state of lastname changes -> IGNORE LINTER ERROR
    useEffect(() => {
      // will return boolean value based on .test() method from regex.
      const result = NAME_REGEX.test(lastname);
      console.log(result);
      console.log(`${lastname}`);
      setValidLastname(result);
    }, [lastname])

  // validity of email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(`${email}`);
    setValidEmail(result);
  }, [email])

  // validity of password
  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    console.log(result);
    console.log(`${password}`);
    setValidPassword(result);
  }, [password])

  // Stop error message from showing if requirements are met in password and email
  useEffect(() => {
    setErrMsg("");
  }, [firstname, lastname, email, password]);

  // JSX conditionally show img div based on current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeListener = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", resizeListener);

  // Object destructure the setAuth from the AuthContext using the useContext() hook
// const {setAuth} = useContext(AuthContext);
//   // Handles inputs of when form is submitted.
//   const formSubmitHandler = async (event) => {
//     event.preventDefault();
//     // new user to send up to axios/node backend of adding a new user. Uses ES6 feature of same property name as same value name.
//     const newUser = { firstname, lastname, email, password };

//     try {
//         // Options added are to pass in body/data as JSON and withCredentials as true.
//         const response = await axios.post(LOGIN_URL,
//             JSON.stringify(newUser),
//             {
//                 headers: {'Content-Type': 'application/json'},
//                 withCredentials: true
//             })
//         // axios handles the response already unlike fetch and converts from JSON; converted back to JSON below
//             // If response isn't null it will try to access the data property within, else if it is null it won't do something that will result in error
//         console.log(JSON.stringify(response?.data));
//         // Optional chaining by(?) -> Codes/Roles are made up, not sure exactly what they are.
//         const accessToken  = response?.data?.accessToken;
//         const roles = response?.data?.roles;
//         // Set Auth object to the values we get back from response
//         setAuth({ firstname, lastname, email, password, roles, accessToken})
//     // If all goes well, form is submitted successfully and change state; set all inputs to empty strings too
//     setFirstname("");
//     setLastname("");
//     setEmail("");
//     setPassword("");
//     setSuccess(true);
//     } catch(err) {
//         // Handle errors using optional chaining(?), probably no reason for the optional chaining in the 1st if; May be good
//             // due to the fact it does 2 things in 1, so if the err passes the optional chaing, the else if doesn't have to contain the err with
//                 // optional chaing(?)
//         if(!err?.response)
//         {
//             setErrMsg("No Server Response");
//         } else if(err.response?.status === 400)
//         { // optional chaining to check if there is a response and if so will try to access the property of status. 
//             setErrMsg("Missing Username or Password")
//         } else if(err.response?.status === 401) 
//         {
//             setErrMsg("Unauthorized")
//         } else {
//             setErrMsg("Login Failed")
//         }
//         // So the user can read the error message, focus the error paragraph.
//         errRef.current.focus();
//     }
//   };

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
      <form onSubmit={console.log("Test")}>
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
                        {/* <span className={validName ? "valid": "hide"}>
                          <FontAwesomeIcon icon={faCheck}/>
                        </span>
                        <span className={validName || !firstname ? "hide": "invalid"}>
                        <FontAwesomeIcon icon={faTimes}/>
                        </span> */}
                      <TextField
                      // Ignore error for this.
                        error={firstnameFocus && firstname && !validFirstname}
                        type="text"
                        id="firstname"
                        label="First name"
                        variant="outlined"
                        autoComplete="off"
                        ref={firstNameRef}
                        onChange={(e) => setFirstname(e.target.value)}
                        // Crucial if you are going to clear inputs on submission, put value as useState() -> 2-way binding
                        value={firstname}
                        // Search thia aria properties up, very specific HTML unknown features. uidnote is for a font awesome icon/note 
                        aria-invalid={validFirstname ? "false": "true"}
                        aria-describedby="uidnote"
                        // when user leaves and enters an input field -> need to use so that wehen field is clicked off of, error msg will stop showing
                        onFocus={()=> setFirstnameFocus(true)}
                        onBlur={()=> setFirstnameFocus(false)}
                        required
                      />
                      <p id="uidnote" className={firstnameFocus && firstname && !validFirstname ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                           2 to 15 characters.<br/>
                           Must Only Contain Letters.
                      </p>
                    </div>
                  </div>
                  {/* No need for refs in these next inputs as they aren't going to be focused */}
                  <div className={styles.maindiv4div2}>
                    {/* <label>Lastname:</label> */}
                    <div>
                      <TextField
                        error={firstnameFocus && firstname && !validFirstname}
                        id="lastname"
                        label="Last name"
                        variant="outlined"
                        type="text"
                        autoComplete="off"
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname}
                        aria-invalid={validFirstname ? "false": "true"}
                        aria-describedby="uidnote"
                        onFocus={()=> setLastnameFocus(true)}
                        onBlur={()=> setLastnameFocus(false)}
                        required
                      ></TextField>
                      <p id="uidnote" className={lastnameFocus && lastname && !validLastname ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                           2 to 15 characters.<br/>
                           Must Only Contain Letters.
                      </p>
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
  )
}

export default SignUp;
