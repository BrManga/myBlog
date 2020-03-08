import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../../components/Navbar/Navbar";
import "./MainPage.styles.scss";
import Main from "../Main/Main";
import Details from "../Details/Details"
import Edit from "../Edit/Edit";
function MainPage() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/blog">
          <Main />
        </Route>
        <Route exact path="/blog/:slug" component={Details}/>
        <Route exact path="/edit" component={Edit}></Route>
      </Switch>
      {/* <Signin /> */}
    </>
  );
}

export default MainPage;
