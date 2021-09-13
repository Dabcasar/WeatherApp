import './App.css';
import EnterCity from './Components/InputCity'
import WeatherInfo from './Components/WeatherInfo'
import {useState} from 'react';
import CityAndDate from './Components/CityAndDate'
import Daily16Forecast from './Components/DailyForecast'
import Error from './Components/Error'
function App() {
    //Enter Api key from openweathermap to make request
    const key = '';
    var lon = 0;
    var lat = 0;
    const apiURLReq1 = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const apiURLReq2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
    const appid = '&appid=';
    const lonid = "&lon="
    const[weatherData,updateWeatherData] = useState([]);
    const[forecast,updateForecast] = useState([]);
    const [badInput,updateInput] = useState(false);
    // Once user enters a city, we want to retrieve data
    const click = (cityname) => request1(cityname,lon,lat);
    const request1 = async (cityname,lon,lat) =>{
       await fetch(apiURLReq1 + cityname+ appid + key)
            .then( await function(resp) { return resp.json() }) // Convert data to json
            .then(await function(data) {
                console.log(data);
                   lon = data.coord.lon;
                   lat = data.coord.lat;
               request2(lon,lat);
                updateWeatherData(data);
                updateInput(false);

            })
            .catch(function(e) {
                updateInput(true);


            });
    }

    const request2 = async (lon,lat) =>{

        await fetch(apiURLReq2+ lat+ lonid + lon+ appid + key)
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
                console.log(data);
                updateForecast(data);
            })
            .catch(function(e) {
                console.log("something is wrong with first call" + e)
            });
    }

    return (
    <div className="App">
        <EnterCity click = {click} />
        {badInput ? <Error/> :  <CityAndDate data = {weatherData} forecast = {forecast}/>}
        {badInput ? '' :   <WeatherInfo data = {forecast} />}
        {badInput ? '' :     <Daily16Forecast forecast = {forecast}/> }
    </div>
  );
}

export default App;
