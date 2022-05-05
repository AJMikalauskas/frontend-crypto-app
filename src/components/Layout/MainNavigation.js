import Fragment from "react";
// import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
       <div className={classes.logo}>Xander's Crypto Buying App</div>

      {/* <nav>
        <ul>
 
            <li>
              <Link to="/profile">Profile</Link>
            </li>




            <li>
              <button onClick={() => {authCtx.logout()}}>Logout</button>
            </li>


            <li>
              <Link to="/auth">Login</Link>
            </li>

        </ul>
      </nav> */}
    </header>
  );
};

export default MainNavigation;
