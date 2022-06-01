import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
//import Layout from "./components/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

// Lazy load the pages
const SignUpPage  = React.lazy(() => import("./pages/SignUpPage"));
const LoggedOutHomePage  = React.lazy(() => import("./pages/LoggedOutHomePage"));
const LoggedInHomeAppBarPage  = React.lazy(() => import("./pages/LoggedInHomeAppBarPage"));
const LoggedInHomePage  = React.lazy(() => import("./pages/LoggedInHomePage"));
const SpecificCryptoPage  = React.lazy(() => import("./pages/SpecificCryptoPage"));

function App() {
  return (
       <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner/>
        </div>
      }>
      <Routes>
        {/* Login/SignUp Page */}
        <Route path="signUp" element={<SignUpPage/>} />

        {/* This redirects to loggedout home page if any route that is given is whacko or not part of Routes ->
            Will Probably use ternary operator of (?:)  based on if used is logged in or out leading to loggedInHomePage or loggedOutHomePage*/}
        <Route path="/" element={<Navigate replace to="loggedOutHomePage"/>}/>
        {/* When not logged in home page, once logged in, redirect to logged in home page below */}
        <Route path="loggedOutHomePage" element={<LoggedOutHomePage/>}/>
        <Route path="Crypto" element={<p>Test Crypto Click</p>}/>

        {/* Routes of actually being logged in */}
        <Route path="loggedInHome" element={<LoggedInHomeAppBarPage/>} >
        {/* Specific Crypto Page, Not Overview/Home Page */}
        <Route path="portfolio" element={<LoggedInHomePage />} />
         <Route path=":coinName" element={<SpecificCryptoPage/>}/>

        </Route>

        {/* Such example below would be for what I did with app bar, going to test out anyway
          The nav bar could be at the top , one nested route could be the home page, non dynamic URL
          The other nested route could be dynamic crypto and it would jsut replace the middle content.
          Testing Nested Routes with combined JSX - Success, need to use outlet keywrod in order for the parent
          route to show the child routes JSX
              <Routes>
      <Route path="loggedInAppBar" element={<LoggedInAppBar />}>, use redirect to the below home page route if appbar just searched up
        <Route path="loggedInHomePage" element={<LoggedInHomePage />} />
        <Route path="crypto/:cryptoName" element={<SpecificCryptoPage />} />
      </Route>
    </Routes>
        */}
      </Routes>
      </Suspense>
  );
}

export default App;
