import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = '1c468f6c7f7706c21e38214960006416'; // Remplacez YOUR_API_KEY par votre clé API

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setWeather(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather:', error.message);
      setError('An error occurred while fetching weather data');
    }
  };

  const handleButtonPress = () => {
    fetchWeather();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={handleButtonPress} />
      {weather && (
        <View style={styles.weatherContainer}>
          <Text>City: {weather.name}</Text>
          <Text>Temperature: {weather.main.temp}</Text>
          <Text>Description: {weather.weather[0].description}</Text>
          {/* Ajoutez d'autres informations météorologiques si nécessaire */}
        </View>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  weatherContainer: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default App;
