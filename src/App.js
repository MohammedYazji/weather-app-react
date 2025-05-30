import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { getWeather } from "./services";
import { WiStrongWind, WiCloudyWindy } from "react-icons/wi";

const iconMap = {
  "01d": "sun.png",
  "01n": "moon.png",
  "02d": "partly-cloudy-day.png",
  "02n": "partly-cloudy-night.png",
  "03d": "cloud.png",
  "03n": "cloud.png",
  "04d": "broken-clouds.png",
  "04n": "broken-clouds.png",
  "09d": "shower-rain.png",
  "09n": "shower-rain.png",
  "10d": "rain.png",
  "10n": "rain.png",
  "11d": "thunderstorm.png",
  "11n": "thunderstorm.png",
  "13d": "snow.png",
  "13n": "snow.png",
  "50d": "mist.png",
  "50n": "mist.png",
};

function App() {
  const [city, setCity] = useState("paris");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    fetchWeather();
    setCity("");
  }

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="SEARCH"
          value={city}
          onChange={handleChange}
        />
        <button>
          <CiSearch />
        </button>
      </form>
      {weather && !loading ? (
        <>
          <div className="info">
            <img
              src={`/icons/${iconMap[weather.weather[0].icon]}`}
              alt={weather.weather[0].description}
            />

            <span className="degree">{parseInt(weather.main.temp)} °C</span>
            <span className="city">
              {weather.name}, {weather.sys["country"]}
            </span>
          </div>
          <div className="summary">
            <div className="left">
              <div>
                <WiCloudyWindy className="icon" />
              </div>
              <div>
                <p>{weather.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="right">
              <div>
                <WiStrongWind className="icon" />
              </div>
              <div>
                <p>{weather.wind.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </>
      ) : loading ? (
        <div className="msg">
          <p className="no-result">Loading...</p>
        </div>
      ) : (
        <div className="msg">
          <p className="no-result">😟There is No Country by this name!</p>
          <p className="no-result">Sorry!</p>
        </div>
      )}
    </div>
  );
}

export default App;
