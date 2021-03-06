import React from 'react';

const Weather = (props) => {
  return (
    <div className="weather__info">
      {
        props.city && props.country && <p className="weather__key">Location: <span className="weather__value">{ props.city }, { props.country }</span></p>
      }
      {
        props.temp && <p className="weather__key">Temperature: <span className="weather__value">{ props.temp }°</span></p>
      }
      {
        props.temp && <p className="weather__key">Max Temperature: <span className="weather__value">{ props.max_temp }°</span></p>
      }
      {
        props.temp && <p className="weather__key">Min Temperature: <span className="weather__value">{ props.min_temp }°</span></p>
      }
      {
        props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{ props.humidity }</span></p>
      }
      {
        props.description && <p className="weather__key">Conditions: <span className="weather__value">{ props.description }</span></p>
      }

      { props.error && <p className="weather__error">{ props.error }</p> }
    </div>
  );
}

export default Weather;
