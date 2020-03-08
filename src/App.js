import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
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
