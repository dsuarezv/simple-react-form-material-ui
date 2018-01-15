import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import * as Colors from 'material-ui/colors'
import {FieldType} from 'simple-react-form'
import FormControlLabel from 'material-ui/Form/FormControlLabel';

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {

}

export default class CheckboxComponent extends React.Component {

  render () {
    return (
      <div>
      <FormControlLabel 
        control={
          <Checkbox
            disabled={this.props.disabled}
            checked={typeof this.props.value !== 'undefined' ? this.props.value : false }
            onChange={() => this.props.onChange(!this.props.value)}
            {...this.props.passProps}
          />
        }
        label={this.props.label} >
        </FormControlLabel>
        <span style={{ color: Colors.red[500] }}>{this.props.errorMessage}</span>
      </div>
    )
  }
}

CheckboxComponent.propTypes = propTypes
CheckboxComponent.defaultProps = defaultProps
