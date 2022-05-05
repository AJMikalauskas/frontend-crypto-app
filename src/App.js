import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';

// Lazy load the pages
const LoggedOutHomePage  = React.lazy(() => import("./pages/LoggedOutHomePage"));
const LoggedInHomePage  = React.lazy(() => import("./pages/LoggedInHomePage"));
const SpecificCrypto  = React.lazy(() => import("./pages/SpecificCrypto"));

function App() {
  return (
    <Layout>
       <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner/>
        </div>
      }>
      <Routes>
        {/* This redirects to loggedout home page if any route that is given is whacko or not part of Routes ->
            Will Probably use ternary operator of (?:)  based on if used is logged in or out leading to loggedInHomePage or loggedOutHomePage*/}
        <Route path="/" element={<Navigate replace to="/loggedOutHomePage"/>}/>
        {/* When not logged in home page, once logged in, redirect to logged in home page below */}
        <Route path="/" exact element={<LoggedOutHomePage/>}/>

        {/* Routes of actually being logged in */}
        <Route path="/loggedInHomePage" element={<LoggedInHomePage/>}/>
        {/* Specfic Crypto Page, Not Overview/Home Page */}
        <Route path="/loggedInHomePage/:userId" element={<SpecificCrypto/>}/>
      </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
