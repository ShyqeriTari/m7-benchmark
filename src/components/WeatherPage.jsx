import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"

const WeatherPage = () => {

    const params = useParams()

    const [cityWeather, setCityWeather] = useState(undefined)


    const getWeather = async() => {
        try {
            
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${params.cityName}&limit=1&appid=${process.env.API_KEY}`)
            const data = await response.json()

            if(response.ok){

                const weatherResp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${process.env.API_KEY}`)
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

    useEffect(()=> {
        getWeather()
    }, [])

    return(
     
        <div className="text-center">
            <h1 className="text-center mt-3 mb-6">{params.cityName.toUpperCase()}</h1>
       {cityWeather && <p>{cityWeather.weather[0].main}</p>}
        </div>
    
    )
}

export default WeatherPage