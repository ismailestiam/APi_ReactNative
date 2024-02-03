// server.js
const express = require('express');
const axios = require('axios');
const { apiKey } = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint pour obtenir les informations météorologiques actuelles d'une ville
app.get('/current-weather/:city', async (req, res) => {
  try {
    const cityName = req.params.city;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching current weather:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching current weather' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
