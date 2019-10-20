import React, { Component } from 'react'
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className='App'>
       {this.props.authUser.isAuthenticated ? 'Welcome back Hamster~' : <h1>Sign up to join the Talks show!</h1>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};


export default connect(mapStateToProps, null)(Home);