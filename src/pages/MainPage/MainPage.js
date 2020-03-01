import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../../components/Navbar/Navbar";
import "./MainPage.styles.scss";
import Main from "../Main/Main";
function MainPage() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/home">
          <Main />
        </Route>
      </Switch>
      {/* <Signin /> */}
    </>
  );
}

export default MainPage;
