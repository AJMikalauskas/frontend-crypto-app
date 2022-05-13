import React, { useState } from 'react';
import styles from "./SignUp.module.css";
import { TextField } from '@mui/material';
import logo from "../../images/logoImg.jpg";
import technoPic from  "../../images/technoBgSignUp.jpg";

const SignUp = () => {
//  JSX conditionally show img div based on current window width
const [windowWidth,setWindowWidth] = useState(window.innerWidth);
const resizeListener = () => {
    setWindowWidth(window.innerWidth);
    //console.log(windowWidth);
    //return windowWidth;
}
window.addEventListener("resize", resizeListener);
    return (
    <form>
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
                {windowWidth > 768 && <div>
                    <img alt="technoPic" src={technoPic} height="300px" className={styles.technoImg}/>
                </div>}
            </div>
        </header>
        <main className={styles.main}>
            {/* Same css styles as div 3 as in here */}
            <div className={styles.div3}>
                <div className={styles.div4}>
                    <div className={styles.maindiv3}>
                        <span>
                        Enter your first and last name as they appear on your government ID.
                        </span>
                    </div>
                    <div className={styles.maindiv4}>
                        {/* Probably put refs to store data of these text field inputs */}
                        <div className={styles.maindiv4div1}>
                            <div>
                            <TextField id="outlined-firstName" label="First name" variant="outlined"></TextField>              
                            </div>
                        </div>
                        <div className={styles.maindiv4div2}>
                            <div>
                            <TextField id="outlined-lastName" label="Last name" variant="outlined"></TextField>              
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputField3}>
                        <div>
                        <TextField id="outlined-emailAddress" label="Email address" variant="outlined"></TextField>  
                        </div>
                    </div>
                    <div className={styles.inputField4}>
                        <div>
                        <TextField id="outlined-password" label="Password (min. 10 characters)" variant="outlined"></TextField>  
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    </form>
    );
}

export default SignUp;