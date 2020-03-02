import React from "react";
import "./landingPage.styles.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function LandingPage() {
  return (
    <div className="landingPage">
      <div id="landing-header">
        <h1>Welcome to foreSight Blog!</h1>
        <Link to="/blog">
          <Button>Get Started</Button>
        </Link>
      </div>

      <ul class="slideshow">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default LandingPage;
