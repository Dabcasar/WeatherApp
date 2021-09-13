import React from 'react';
import Single from './SingleForecast'
const MyComponent = ({forecast}) => {


    if(forecast.length === 0){
        return(
            <div/>
        )
    }

    const daily = forecast.daily;

    return (
        <div className={"forecast"}>
            {daily.map((daily,index) => <Single min = {daily.temp.min} max = {daily.temp.max} icon = {daily.weather[0].icon} date = {daily.sunrise} index = {index} />)}
        </div>
    );
};

export default MyComponent;
