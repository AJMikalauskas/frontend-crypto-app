import React from "react";

import LoggedInAppBar from './LoggedInAppBar';
import LoggedInMain from "./LoggedInMain";

const LoggedInHome = (props) => {

    return (
        <>
        <LoggedInAppBar/>
        <LoggedInMain/>
        </>
    );
}

export default LoggedInHome;