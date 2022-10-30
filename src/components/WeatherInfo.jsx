import styles from "./weatherInfo.module.css"


function WeatherInfo({weather}) {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.location}>
                    <div className={styles.name}>{weather?.location.name}</div>
                    <div className={styles.city}>{weather?.location.country}</div>
                </div>
                <div className={styles.weather}>
                    <div>{weather?.current.temp_c}°</div>
                    <div className={styles.condition}>
                        <div><img src={`http:${weather?.current.condition.icon}`} alt="icon" style={{width:'100px'}} /></div>
                        <div>{weather?.current.condition.text}</div>
                    </div>
                </div>
            </div>
            <div>
            <iframe
                title="map"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
                width="100%"
                height="350"
                style={{ border: '2px inset', borderRadius: 10, marginBottom: 40 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </>
    );
}

export default WeatherInfo;