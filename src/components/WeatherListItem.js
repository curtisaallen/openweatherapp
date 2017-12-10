import React from 'react';
import { renderDay } from '../helper/renderDay';
import { renderDate } from '../helper/renderDate';
import { renderIcon } from '../helper/renderIcon';
const WeatherListItem =(props) => (
    <div className="col-md">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    {renderDay(props.data.dt_txt)}
                </h4>
                <p className="date">{renderDate(props.data.dt_txt)}</p>
                <img src={renderIcon(props.data.weather[0].icon)} alt={props.data.weather[0].description} className="img-circle" />
                <p className="card-text">
                    {`${props.data.main.temp} ˚C`}
                    <br />
                    {`${props.data.main.humidity} ˚F`}
                </p>
                <p className="description">{props.data.weather[0].description}</p>
            </div>
        </div>                
    </div>        
);
export default WeatherListItem;

