import React, { Component } from "react";
import { connect } from "react-redux";
import {
  authSigninSuccessful,
  signin
} from "../../redux/action/authUserAction";
import Input from "../../Factory/Input/InputClass";
import formArray from "./SignInConfig";
import "./Signin.css";
import MessageBar from "../../Factory/MessageBar/MessageBar";
import { ValidatorForm } from "react-material-ui-form-validator";
import ButtonClass from "../../Factory/Button/ButtonClass";
import Spinner from "../../Factory/Spinner/Spinner";

class Signin extends Component {
  state = {
    formData: {
      email: "",
      password: ""
    }
  };

  componentDidMount() {
    //handle your jwtExpiration here
  }
  successfullySignedIn = () => {
    this.setState({
      submitted: false,
      formData: {
        email: "",
        password: ""
      }
    });
  };
  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(
      {
        submitted: true
      },
      () => {
        this.props
          .signin(this.state.formData)
          .then(() => {
            this.successfullySignedIn();
            this.props.history.push("/");
          })
          .catch(error => {
            this.setState({
              submitted: false
            });
          });
        // this.props.authUserSuccessful();
        // this.props.history.push("/");
      }
    );
  };

  render() {
    const { submitted } = this.state;

    let form = formArray.map((field, index) => {
      return (
        <div key={field.input.label}>
          <Input
            {...field}
            {...this.state.formData}
            handleInputChange={this.handleChange}
          />
          <br />
        </div>
      );
    });
    return (
      <>
        {this.props.message.serverMessage !== null ? (
          <MessageBar
            fontColorStyle={this.props.message.messageStyle.fontColorStyle}
            dynamicClassName={this.props.message.messageStyle.dynamicClassName}
          >
            {this.props.message.serverMessage}
          </MessageBar>
        ) : (
          ""
        )}

        <ValidatorForm className="Form" onSubmit={this.handleSubmit}>
          {submitted ? <Spinner /> : form}
          <br />

          <ButtonClass
            color="primary"
            variant="contained"
            type="submit"
            disabled={submitted}
          >
            {(submitted && "Your form is submitted!") ||
              (!submitted && "Submit")}
          </ButtonClass>
        </ValidatorForm>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser,
    message: state.message
  };
};

export default connect(
  mapStateToProps,
  { authSigninSuccessful, signin }
)(Signin);
