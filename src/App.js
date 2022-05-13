import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
//import Layout from "./components/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

// Lazy load the pages
const SignUpPage  = React.lazy(() => import("./pages/SignUpPage"));
const LoggedOutHomePage  = React.lazy(() => import("./pages/LoggedOutHomePage"));
const LoggedInHomePage  = React.lazy(() => import("./pages/LoggedInHomePage"));
const SpecificCrypto  = React.lazy(() => import("./pages/SpecificCrypto"));

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
        <Route path="loggedInHomePage" element={<LoggedInHomePage/>}>
        {/* Specfic Crypto Page, Not Overview/Home Page */}
          <Route path=":userId" element={<SpecificCrypto/>}/>
        </Route>
      </Routes>
      </Suspense>
  );
}

export default App;
