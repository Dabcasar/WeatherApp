import React from 'react';
const MyComponent = ({data,forecast}) => {
    if(data.length === 0 || forecast.length === 0){
        return(
            <div/>
        )
    }


    const getDay = (day) =>{
        const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        return week[day];
    }

    const getMonth = (day) =>{
        const week = ["January","February","March","April","June","July","August","September","October","November","December"];
        return week[day-1];
    }

    const temp = Math.round(forecast.daily[0].temp.day-273.15);


    return (

        <div className={"cityname"}>
            <br/>
           <h1 className={"name"}>{data.name}, {data.sys.country}</h1>
            <h2 id = "description" className={"date"}>{getDay(new Date().getDay()) +' ' + new Date().getDate() + ' ' + getMonth(new Date().getMonth()) + ', ' + data.weather[0].description }</h2>
            <h2 className={"temp"}>{temp}{'\u00b0'}c</h2>
            <i className="fas fa-cloud fa-10x icon"  style={{color: 'white'}}/>
        </div>
    );
};

export default MyComponent;
