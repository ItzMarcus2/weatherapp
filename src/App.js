import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

import { getWeatherData } from './api';

class App extends Component {

  constructor() {
    super();
    this.state = {
      temp: undefined,
      min_temp: undefined,
      max_temp: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }

  getWeather = async (event) => {
    event.preventDefault(); // prevent default behaviour of this component

    const city = event.target.elements.city.value; // Grabbing the value of the <input> object with the attribute "name"
    const country = event.target.elements.country.value; // ^^

    const api_call = await getWeatherData(city, country);
    const data = await api_call.json();
    console.log(data);

    if (city && country) { // if city and country returns true, then set the state values.
      this.setState({
        temp: data.main.temp,
        min_temp: data.main.temp_min,
        max_temp: data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: data.message
      })
    }
  }

  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temp={this.state.temp}
                    min_temp={this.state.min_temp}
                    max_temp={this.state.max_temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
