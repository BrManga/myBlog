import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
import "./Navbar.style.scss";
function Navigation() {
  return (
    <>
      <div className="navTop">
        <Navbar.Brand>
          <Link className="brandLink">foreSight</Link>
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="searchButton">Search</Button>
        </Form>
      </div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Nav className="ml-auto">
              <Nav.Link><Link>Blog</Link></Nav.Link>
              <NavDropdown title="Topics" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link>Algorithms</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link>Artificial Intelligence</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link>Competitive Programming</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link>Cognitive</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
