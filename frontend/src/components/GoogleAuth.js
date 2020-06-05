import React from "react";

import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      console.log("loaded gapi");

      window.gapi.client
        .init({
          clientId:
            "657139755782-1mug9f3gtqjltimrgos9c0balerkrd1f.apps.googleusercontent.com",

          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
    console.log("auth changed");
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    return this.props.isSignedIn === true ? (
      <button
        className="bg-red-600 rounded p-2 text-white"
        onClick={this.onSignOut}
      >
        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        Sign Out
      </button>
    ) : (
      <button
        className="bg-red-600 rounded p-2 text-white"
        onClick={this.onSignIn}
      >
        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
        Sign in with Google
      </button>
    );
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signOut, signIn })(GoogleAuth);
