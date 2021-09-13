import React from 'react';
import {useState} from 'react';
const MyComponent = ({click}) => {
    const[city,setCity,incorrect] = useState('');

    const badInput = () =>{
        return <div>
            <h1>Please enter city again</h1>
        </div>
    }


    return (

        <div>
            <div className={"search-box"}>

                <input type="text" placeholder={"Enter city"} value = {city} className={"search-txt"} onChange={(e) => setCity(e.target.value)}  onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        click(city);
                        console.log("It has been clicked " + city)
                        setCity('');
                    }
                }} />
                <button className={"search-button"} onClick={() => {
                    click(city);
                    console.log("It has been clicked " + city)
                    setCity('');
                }} >
                    <i className="fas fa-search"/>
                </button>


            </div>

        </div>




    );
};

export default MyComponent;
