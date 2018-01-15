import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import * as Colors from 'material-ui/colors'
import {FieldType} from 'simple-react-form'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {

}

export default class CheckboxComponent extends React.Component {

  render () {
    return (
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Checkbox
          disabled={this.props.disabled}
          checked={typeof this.props.value !== 'undefined' ? this.props.value : false }
          onChange={() => this.props.onChange(!this.props.value)}
          {...this.props.passProps}
        />
        <span style={{ color: Colors.red[500] }}>{this.props.errorMessage}</span>
      </div>
    )
  }
}

CheckboxComponent.propTypes = propTypes
CheckboxComponent.defaultProps = defaultProps
