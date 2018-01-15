import React from 'react'
import Radio, { RadioGroup } from 'material-ui/Radio'
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import { FieldType } from 'simple-react-form'
//import * as Colors from 'material-ui/colors'
//import styles from './styles'
import PropTypes from 'prop-types'

const propTypes = {
  ...FieldType.propTypes,
  /**
   * The options for the select input. Each item must have label and value.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    description: PropTypes.string
  })).isRequired
}

const defaultProps = {

}

export default class RadioComponent extends React.Component {

  renderItems () {
    return this.props.options.map((item) => {
      return (
        <FormControlLabel 
          key={item.value}
          value={item.value} 
          control={<Radio />} 
          label={item.label} 
          checked={item.value === this.props.value}/>
      )
    })
  }

  handleChange = (event, value) => {
    this.props.onChange(value);
  };

  render () {
    return (
      <FormControl 
          component="fieldset"
          required={this.props.required} 
          error={typeof this.props.errorMessage !== 'undefined'} 
          //className={classes.formControl}
      >
        <FormLabel component="legend">{this.props.label}</FormLabel>
        <RadioGroup
          //className={classes.group}
          value={this.props.value}
          onChange={this.handleChange}
        >
          {this.renderItems()}
        </RadioGroup>
        <FormHelperText>{this.props.errorMessage}</FormHelperText>
      </FormControl>

      
      // <div style={styles.fieldContainer}>
      //   <div style={styles.mirrorLabel}>
      //     {this.props.label}
      //   </div>
      //   {this.renderItems()}
      //   <div style={styles.errorMessage}>{this.props.errorMessage}</div>
      // </div>
      
    )
  }
}

RadioComponent.propTypes = propTypes
RadioComponent.defaultProps = defaultProps



