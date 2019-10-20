import React, { Component } from "react";
import { connect } from "react-redux";

import "./Signup.css";
import Input from "../../Factory/Input/InputClass";
import ButtonClass from "../../Factory/Button/ButtonClass";
import { ValidatorForm } from "react-material-ui-form-validator";
import formArray from "./SignUpConfig";
import { authUserSuccessful, signup } from "../../redux/action/authUserAction";
import Spinner from "../../Factory/Spinner/Spinner";

class Signup extends Component {
  state = {
    formData: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: ""
    },
    submitted: false
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      const { formData } = this.state;
      if (value !== formData.password) {
        return false;
      }
      return true;
    });
  }
  successfullySignedUp = () => {
    this.setState({
      submitted: false,
      formData: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""
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
          .signup(this.state.formData)
          .then(() => {
            this.successfullySignedUp();
          })
          .catch(() => {});
        this.setState({
          submitted: false,
          formData: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: ""
          }
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
        {this.props.authUser.message !== null
          ? this.props.authUser.message
          : ""}
        <ValidatorForm className='Form' onSubmit={this.handleSubmit}>
          {submitted ? <Spinner /> : form}
          <br />

          <ButtonClass
            color='primary'
            variant='contained'
            type='submit'
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
    authUser: state.authUser
  };
};

export default connect(
  mapStateToProps,
  { authUserSuccessful, signup }
)(Signup);
