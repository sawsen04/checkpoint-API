import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import "./style.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Segment inverted color="teal">
        <Menu inverted secondary>
          <Menu.Item>
            <Link
              style={{ color: "black", fontSize: "1,7rem", fontWeight: "800" }}
              to="/"
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              style={{ color: "black", fontSize: "1,7rem", fontWeight: "800" }}
              to="/users"
            >
              users
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              style={{ color: "black", fontSize: "1,7rem", fontWeight: "800" }}
              to="/messages"
            >
              messages
            </Link>
          </Menu.Item>
        </Menu>
      </Segment>
    </div>
  );
}

export default NavBar;
