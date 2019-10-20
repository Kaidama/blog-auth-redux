import React from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import {
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";

const InputClass = props => {
  const { input } = props;
  let dynamicInputField = null;
  switch (input.type) {
    case "text":
      dynamicInputField = (
        <TextValidator
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type={input.type}
          value={props.username}
          validators={input.validators}
          errorMessages={input.errorMessages}
          onChange={props.handleInputChange}
        />
      );
      break;

    case "email":
      dynamicInputField = (
        <TextValidator
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type={input.type}
          value={props.email}
          validators={input.validators}
          errorMessages={input.errorMessages}
          onChange={props.handleInputChange}
        />
      );
      break;

    case "password":
      dynamicInputField = (
        <TextValidator
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type={input.type}
          value={props.password}
          validators={input.validators}
          errorMessages={input.errorMessages}
          onChange={props.handleInputChange}
        />
      );
      break;
    case "confirmPassword":
      dynamicInputField = (
        <TextValidator
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type='password'
          value={props.confirmPassword}
          validators={input.validators}
          errorMessages={input.errorMessages}
          onChange={props.handleInputChange}
        />
      );
      break;
    case "select":
      dynamicInputField = (
        <FormControl style={input.style}>
          <InputLabel htmlFor='input-gende' style={{ top: "-15px" }}>
            {props.gender.length > 1 ? "" : "Choose Your Gender"}
          </InputLabel>
          <SelectValidator
            value={props.gender || ""}
            onChange={props.handleInputChange}
            validators={input.validators}
            errorMessages={input.errorMessages}
            name={input.name}
          >
            {input.genders.map(option => {
              return (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              );
            })}
          </SelectValidator>
        </FormControl>
      );

      break;
    case "multiline":
      dynamicInputField = (
        <TextField
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type={input.name}
          onChange={props.handleInputChange}
          rows={input.rows}
          multiline={input.multiline}
        />
      );

      break;

    default:
      return null;
  }

  return <>{dynamicInputField}</>;
};

export default InputClass;

/*

import React from 'react';
import {TextField, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';

const InputClass = (props) => {
  const { input } = props;

  let dynamicInputField = null 

  
  switch (input.type) {

    case('text'):

      dynamicInputField = <TextField 
                                id={input.id}
                                label={input.label}
                                required={input.required}
                                style={input.style}
                                name={input.name}
                                type={input.type}
                                onChange={props.handleInputChange}
                          />
      break;

    case('email'):
        dynamicInputField = <TextField 
                              id={input.id}
                              label={input.label}
                              required={input.required}
                              style={input.style}
                              name={input.name}
                              type={input.type}
                              onChange={props.handleInputChange}
                            />
        break;                   
      
    case('password'):
        dynamicInputField = <TextField 
                              id={input.id}
                              label={input.label}
                              required={input.required}
                              style={input.style}
                              name={input.name}
                              type={input.type}
                              onChange={props.handleInputChange}
                            />
        break; 
    case('select'):

        dynamicInputField = <FormControl style={input.style}>
                              <InputLabel htmlFor="select-multiple">Choose You Gender</InputLabel>
                              <Select
                                value={props.gender || ''}
                                onChange={props.handleInputChange}
                        
                                name={input.name}
                              >
                              {
                                input.genders.map(option => {
                                  return (
                                    <MenuItem key={option} value={option}>
                                      {option}
                                    </MenuItem>
                                  )
                              })}
                              </Select>
                              </FormControl>


      break;
    case('multiline'):
                 
      dynamicInputField = <TextField 
                            id={input.id}
                            label={input.label}
                            required={input.required}
                            style={input.style}
                            name={input.name}
                            type={input.name}
                            onChange={props.handleInputChange}
                            rows={input.rows}
                            multiline={input.multiline}
                          />

      break;

    default: 
      return null;
  }



  return (
    <>
      {dynamicInputField}
    </>
  )
}

export default InputClass

*/
