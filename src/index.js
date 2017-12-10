import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherMain from './components/WeatherMain';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WeatherMain />, document.getElementById('root'));
registerServiceWorker();
