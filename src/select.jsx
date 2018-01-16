import React from 'react'
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { FieldType } from 'simple-react-form'
import PropTypes from 'prop-types'

const propTypes = {
  ...FieldType.propTypes,
  /**
   * Optional default value.
   */
  defaultValue: PropTypes.string,
  /**
   * The options for the select input. Each item must have label and value.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  }))
}

const defaultProps = {
}

export default class SelectComponent extends React.Component {

  componentDidMount () {
    if (!this.props.value) {
      this.props.onChange(this.props.defaultValue);
    }
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render () {
    return (
      <FormControl fullWidth>
          <InputLabel htmlFor={this.props.fieldName}>{this.props.label}</InputLabel>
          <Select
            value={this.props.value}
            onChange={this.handleChange}
            input={<Input name={this.props.fieldName} id="age-simple" />}
          >
            {this.props.options.map( item => (
                <MenuItem key={item.value} value={String(item.value)}>
                  {item.label}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
    )
  }
}

SelectComponent.propTypes = propTypes
SelectComponent.defaultProps = defaultProps