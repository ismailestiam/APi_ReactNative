import axios from 'axios';

// URL de base de l'API OpenWeather
const baseURL = 'https://openweathermap.org/faq#error401';

// Clé API fournie par votre professeur
const apiKey = '1c468f6c7f7706c21e38214960006416';

// Fonction pour récupérer les informations météorologiques actuelles d'une ville spécifique
export const getCurrentWeatherByCity = async (cityName) => {
  try {
    const response = await axios.get(`${baseURL}/weather?q=${cityName}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

// Fonction pour récupérer les prévisions météorologiques pour les prochains jours d'une ville spécifique
export const getWeatherForecastByCity = async (cityName) => {
  try {
    const response = await axios.get(`${baseURL}/forecast?q=${cityName}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
};

// Autres fonctions pour récupérer d'autres informations météorologiques selon les besoins
