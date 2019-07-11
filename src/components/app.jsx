import React from "react";
import {
  App,
  Panel,
  Views,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from "framework7-react";

import cordovaApp from "../js/cordova-app";
import routes from "../js/routes";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: "io.riafy.bubblepopmagic", // App bundle ID
        name: "Bubble Pop Magic", // App name
        theme: "auto", // Automatic theme detection
        // App root data
        data: function() {
          return {
            user: {
              firstName: "John",
              lastName: "Doe"
            }
          };
        },

        // App routes
        routes: routes,

        // Input settings
        input: {
          scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
          scrollIntoViewCentered: this.$device.cordova && !this.$device.electron
        },
        // Cordova Statusbar settings
        statusbar: {
          overlay: (this.$device.cordova && this.$device.ios) || "auto",
          iosOverlaysWebView: true,
          androidOverlaysWebView: false
        }
      },
      // Login screen demo data
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <App params={this.state.f7params}>
        {/* Status bar overlay for fullscreen mode*/}
        <Statusbar />
        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas" url="/" />

        {/* Popup */}
        <Popup id="my-popup">
          <View>
            <Page>
              <Navbar title="Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>
                <p>Popup content goes here.</p>
              </Block>
            </Page>
          </View>
        </Popup>
      </App>
    );
  }
  alertLoginData() {
    this.$f7.dialog.alert(
      "Username: " +
        this.state.username +
        "<br>Password: " +
        this.state.password
    );
  }
  componentDidMount() {
    this.$f7ready(f7 => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}
