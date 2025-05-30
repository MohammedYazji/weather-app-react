const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`;

  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error("Failed to fetch weather data");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error: ", error.message);
  }
};
