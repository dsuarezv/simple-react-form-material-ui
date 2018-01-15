import React from 'react'
import Switch from 'material-ui/Switch'
import {FieldType} from 'simple-react-form'
import styles from './styles'

const propTypes = {
  ...FieldType.propTypes
}

const defaultProps = {

}

export default class SwitchComponent extends React.Component {

  render () {
    return (
      <div>
        <Switch
          label={this.props.label}
          value={this.props.value}
          disabled={this.props.disabled}
          onChange={() => this.props.onChange(!this.props.value)}
          {...this.props.passProps}/>
        <div style={styles.errorMessage}>{this.props.errorMessage}</div>
      </div>
    )
  }

}

SwitchComponent.propTypes = propTypes
SwitchComponent.defaultProps = defaultProps