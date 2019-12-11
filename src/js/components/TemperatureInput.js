import React from "react";
import { scaleNames } from "./utils";
import { connect } from "react-redux";
import { addTemperature } from "../actions/index";
import { tryConvert, toCelsius, toFahrenheit } from './utils';

function mapDispatchToProps(dispatch) {
  return {
    addTemperature: temperature => dispatch(addTemperature(temperature))
  };
}

const mapStateToProps = (state, ownProps) => {
  return { scale_origin: ownProps.scale, temperature : state.temperature, scale_to_convert: state.scale };
};

class ConnectedTemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: '', scale: ''};
    }
  
    handleChange(event) {
      const scale = this.props.scale;
      const temperature = event.target.value;

      let result  = '';

      if(scale === 'f')
        result = tryConvert(temperature, toCelsius);
      else
        result = tryConvert(temperature, toFahrenheit);

      this.props.addTemperature({scale: event.target.id, temperature: result});
      this.setState({temperature: event.target.value});
    }
  
    render() {
      const temperature_converted = this.props.temperature;
      const scale_to_convert = this.props.scale_to_convert;
      const scale_origin = this.props.scale_origin;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale_origin]}:</legend>
          <input value={scale_to_convert !== scale_origin?temperature_converted: this.state.temperature} id={scale_origin}
                  onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  const TemperatureInput = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectedTemperatureInput);
  

  export default TemperatureInput;