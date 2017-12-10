import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherList  from './WeatherList';
import { apiKey } from '../helper/apiKey';
import { apiUrl } from '../helper/apiUrl';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = { 
          weather: [],
          zipcode: 29605,
          city: ''
        };
  }
  componentDidMount() {  
    this.fetchWeather(this.state.zipcode);
  }
  fetchWeather = (zipcode) => {
    fetch(`${apiUrl}zip=${zipcode}&units=metric&cnt=5&appid=${apiKey}`)
    .then(res => res.json())
    .then((result) => {
      this.setState({ weather: result, city: result.city.name});
    })  
  }
  render() {
    return (
      <div className="container weather">
         <div className="card">
           <div className="card-body">
              <h1 className="card-title">
                  <i className="fa fa-eercast" aria-hidden="true"></i>
                  Check the Weather in your City: {this.state.city}
              </h1>
              <hr />
              <WeatherForm onSubmit={(zipcode) => {
                   this.setState({ zipcode: zipcode });
                   this.fetchWeather(zipcode);
                }} />
              <br />
              <WeatherList weather={this.state.weather}/>
           </div>  
         </div>
      </div>
    );
  }
}

export default App;
