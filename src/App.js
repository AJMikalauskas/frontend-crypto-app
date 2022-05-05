import { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import LoggedOutHomePage from "./components/LoggedOut/LoggedOutHomePage";
import LoggedInHomePage from "./components/LoggedIn/LoggedInHomePage";
import SpecificCrypto from "./components/Cryptos/SpecificCrypto";

function App() {
  return (
    <Layout>
       <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner/>
        </div>
      }></Suspense>
      <Routes>
        {/* This redirects to loggedout home page if any route that is given is whacko or not part of Routes ->
            Will Probably use ternary operator of (?:)  based on if used is logged in or out leading to loggedInHomePage or loggedOutHomePage*/}
        <Route path="/" element={<Navigate replace to="/loggedOutHomePage"/>}/>
        {/* When not logged in home page, once logged in, redirect to logged in home page below */}
        <Route path="/" exact element={<LoggedOutHomePage/>}/>

        {/* Routes of actually being logged in */}
        <Route path="/loggedInHomePage" element={<LoggedInHomePage/>}/>
        {/* Specfic Crypto Page, Not Overview/Home Page */}
        <Route path="/loggedInHomePage/:usedId" element={<SpecificCrypto/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
