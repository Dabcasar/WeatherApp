import React from 'react';
const MyComponent = ({data}) => {
    if(data.length === 0){
        return(
            <div/>
        )
    }

    console.log(data);

    var feels_like = Math.round(parseFloat(data.daily[0].feels_like.day)-273.15) ;
    var low = Math.round(parseFloat(data.daily[0].temp.min)-273.15);
    var high = Math.round(parseFloat(data.daily[0].temp.max)-273.15);
    return (

        <div className={"cards transparent"}>
            <div className={"child_cards"}>
                <h2>Gust</h2>
                <h2 className={"child-style"}>{data.daily[0].wind_gust}mph</h2>
            </div>

            <div className={"child_cards"}>
                <h2>feels_like</h2>
                <h2 className={"child-style"}>{feels_like}{'\u00b0'}c</h2>
            </div>

            <div className={"child_cards "}>
                <h2>Low</h2>
                <h2 className={"child-style"}>{low}{'\u00b0'}c</h2>
            </div>

            <div className={"child_cards "}>
                <h2>High</h2>
                <h2 className={"child-style"}>{high}{'\u00b0'}c</h2>
            </div>

            <div className={"child_cards"}>
                <h2>Pressure</h2>
                <h2 className={"child-style"}>{data.daily[0].pressure}mb</h2>
            </div>

            <div className={"child_cards"}>
                <h2>Humidity</h2>
                <h2 className={"child-style"}>{data.daily[0].humidity}%</h2>
            </div>
        </div>
    );
};

export default MyComponent;
