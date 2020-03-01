import React from "react";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Navigation from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Navigation />
        <Route exact path="/home">
          <MainPage />
        </Route>
      </Switch>
      {/* <Signin /> */}
    </div>
  );
}

export default App;
