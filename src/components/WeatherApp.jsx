import { useEffect } from "react";
import { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";
import styles from "./weatherApp.module.css";
import Loading from "./loading";

function WeatherApp() {

    const [weather, setWeather] = useState(null)

    async function loadInfo (city='london') {
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)

            const json = await request.json()

            setTimeout(()=>{
                setWeather(json)
            },1500)
            
        } catch(error) {}
    }

    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city)
    }

    useEffect(() => {
        document.title = "Weather | " + weather?.location?.name?? ""
    }, [weather]);

    useEffect(()=>{
        loadInfo()
    },[])

    return ( 
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity}/>
            {weather ? <WeatherInfo weather={weather}/> : <Loading/>}
        </div>
    );
}


export default WeatherApp;
