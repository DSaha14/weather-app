import axios from 'axios';

const API_KEY = '3c9d35929414fd0784d5093c0b6d1c0e';  // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
