import React from 'react';
import Button from '@material-ui/core/Button';

class ButtonClass extends React.Component {
  render(){

    return (
      <Button 
        color={this.props.color}
        variant={this.props.variant}
        type={this.props.type}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </Button>
    )
  }
}


export default ButtonClass;