import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const styles = {
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  },
  navLinkStyle: {
    textDecoration: "none",
    color: "white"
  },
  signupAndSignin: {
    marginLeft: "10px"
  }
};
class Navbar extends Component {
  render() {
    let navigation = null;

    if (this.props.authUser.isAuthenticated) {
      navigation = (
        <>
          <NavLink
            exact
            to='/user-profile'
            className={[
              this.props.classes.navLinkStyle,
              this.props.classes.signupAndSignin
            ].join(" ")}
            activeStyle={{ color: "white", textDecoration: "underline white" }}
          >
            Hamster
          </NavLink>
        </>
      );
    } else {
      navigation = (
        <>
          <NavLink
            exact
            to='/sign-up'
            className={[
              this.props.classes.navLinkStyle,
              this.props.classes.signupAndSignin
            ].join(" ")}
            activeStyle={{ color: "white", textDecoration: "underline white" }}
          >
            Sign up
          </NavLink>

          <NavLink
            exact
            to='/sign-in'
            className={[
              this.props.classes.navLinkStyle,
              this.props.classes.signupAndSignin
            ].join(" ")}
            activeStyle={{ color: "white", textDecoration: "underline white" }}
          >
            Sign in
          </NavLink>
        </>
      );
    }

    return (
      <AppBar position='static'>
        <Toolbar>
          <NavLink
            exact
            to='/'
            className={this.props.classes.navLinkStyle}
            activeStyle={{ color: "white", textDecoration: "underline white" }}
          >
            Talk that Talk
          </NavLink>

          <section className={this.props.classes.rightToolbar}>
            {navigation}
          </section>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Navbar));
