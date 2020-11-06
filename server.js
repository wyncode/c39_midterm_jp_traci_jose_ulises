if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express()
const axios = require('axios');



app.get('/api/breweries/:locality', async (req, res) => {
  const locality = req.params.locality
  const { data } = await axios.get(
    `https://sandbox-api.brewerydb.com/v2/${locality}?key=${process.env.API_KEY}`
  )
    return response.json(data)
})


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});