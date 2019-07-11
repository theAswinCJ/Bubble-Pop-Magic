import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from "framework7-react";

let Background = require("../assets/background.jpg");

export default () => (
  <Page name="game">
    {/* Top Navbar */}
    <div
      id="gameBackground"
      style={{
        height: "100vh",
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h1 style={{ margin: "0px" }}>HELLO</h1>
      <p>The Game Begins!!</p>
    </div>
  </Page>
);
