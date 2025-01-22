import Nav from "react-bootstrap/Nav";

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home" id="navbar">
        <Nav.Item>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="insert">Insert</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="display">Display</Nav.Link>
        </Nav.Item>
      </Nav>
      <div id="outlet">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
