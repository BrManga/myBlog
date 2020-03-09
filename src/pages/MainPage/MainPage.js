import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../../components/Navbar/Navbar";
import "./MainPage.styles.scss";
import Main from "../Main/Main";
import Details from "../Details/Details";
import Edit from "../Edit/Edit";
import About from "../About/About"
import AddArticle from "../AddArticle/AddArticle";
function MainPage() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/blog">
          <Main />
        </Route>
        <Route exact path="/blog/:slug" component={Details} />
        <Route exact path="/edit" component={Edit}></Route>
        <Route exact path="/addarticle" component={AddArticle}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
      {/* <Signin /> */}
    </>
  );
}

export default MainPage;
