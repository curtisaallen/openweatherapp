import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem';
export default class WeatherList extends Component {
    renderList(){
      if(this.props.weather.list !== undefined) {
        return this.props.weather.list.map((data, i)=>{
            return(
             <WeatherListItem key={i} data={data} />   
            );
        });
      }  
    }
    render() {  
    return (
      <div className="row">
        {this.renderList()}
      </div>
    );
  }
}
