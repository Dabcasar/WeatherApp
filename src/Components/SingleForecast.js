import React from 'react';

const MyComponent = ({min,max,icon,date,index}) => {


    const MonthandDay = (date) =>{
        date = date*1000;
        const d = new Date(date);

        return d.getDate();
    }


   const day= (date) =>{
       date = date*1000;
       const d = new Date(date);

       return getDay(d.getDay());
   }


    const getDay = (day) =>{
        const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        return week[day];
    }


    min = Math.round(min-273.15);
    max = Math.round(max-273.15);

    const src = `http://openweathermap.org/img/w/${icon}.png`
    return (
        <div className={"single transparent"}>
            {index == 0 ?  <h6>Today</h6>: <h6>{day(date) + ' ' + MonthandDay(date)}</h6>}
            <img src = {src} id={"imgs"}/>
            <h6>{max}{'\u00b0'}</h6>
            <h6>{min}{'\u00b0'}</h6>
        </div>
    );
};

export default MyComponent;
