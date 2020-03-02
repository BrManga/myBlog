import React from "react";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Navigation from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
function App(props) {
  console.log(props)
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <MainPage />
    </Switch>
  );
}

export default App;
