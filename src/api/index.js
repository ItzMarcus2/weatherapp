import React from 'react';

const API_KEY = "3abbcc3e5db6af76f3f32b19497b78bb";

export function getWeatherData(city, country) {
  return (
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
  );
}
