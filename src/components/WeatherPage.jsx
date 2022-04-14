import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"

const WeatherPage = () => {

    const params = useParams()

    const [cityWeather, setCityWeather] = useState(undefined)

    useEffect(()=> {
        const getWeather = async() => {
            try {
                
                const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${params.cityName}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
                const data = await response.json()
    
                if(response.ok){
    
                    const weatherResp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${process.env.REACT_APP_API_KEY}`)
                    if(weatherResp.ok){
    
                    const weatherData = await weatherResp.json()
    
                    setCityWeather(weatherData)}
    
                    
                } else {
                    alert("something wrong here")
                }
    
            } catch (error) {
                console.log(error)
            }
        }

        getWeather()
    }, [])

    return(
     
        <div className="text-center search">
            <h1 className="text-center mt-3 mb-6">{params.cityName.toUpperCase()}</h1>
       {cityWeather &&
       <div className="card-color">
       <div className="d-flex mb-2 justify-content-center align-items-center">
       <p className="mr-2">{cityWeather.weather[0].main}</p>
       <img src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} alt="weather icon" ></img>
       </div>
       <p>Temp: {parseInt(cityWeather.main.temp - 273.15)} °C</p>
       <p>Perceived: {parseInt(cityWeather.main.feels_like - 273.15)} °C</p>
       <p>Max: {parseInt(cityWeather.main.temp_max - 273.15)} °C</p>
       <p>Min: {parseInt(cityWeather.main.temp_min - 273.15)} °C</p>
       <p>Wind speed: {cityWeather.wind.speed} mt/s</p>
       <p>Humidity: {cityWeather.main.humidity} %</p>
       </div>}
        </div>
    
    )
}

export default WeatherPage