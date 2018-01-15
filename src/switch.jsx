import React from 'react'
import Switch from 'material-ui/Switch'
import { FormControlLabel, FormHelperText } from 'material-ui/Form';
import { FieldType } from 'simple-react-form'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {

}

export default class SwitchComponent extends React.Component {

  render () {
    return (
      <FormControlLabel
        control={        
          <Switch
            checked={this.props.value}
            disabled={this.props.disabled}
            onChange={() => this.props.onChange(!this.props.value)}
            {...this.props.passProps}/>
        } 
        label={this.props.label}
      >
        <FormHelperText>{this.props.errorMessage}</FormHelperText>
      </FormControlLabel>
    )
  }

}

SwitchComponent.propTypes = propTypes
SwitchComponent.defaultProps = defaultProps