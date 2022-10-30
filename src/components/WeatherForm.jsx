import { useState } from "react";
import styles from "./weatherForm.module.css"


function WeatherForm({onChangeCity}) {

    const[city, setCity] = useState('')

    function handleChange(e) {
    const value = e.target.value
    setCity(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onChangeCity(city)
    }

    return(
            <form onSubmit={handleSubmit} className={styles.container}>
                <input type="text" onChange={handleChange} className={styles.input} placeholder={'Ingrese ciudad'}/>
            </form>
    )
}

export default WeatherForm;