const express = require('express');
const request = require('request');

const app = express();
const API_URL = 'https://5e62-122-161-194-177.in.ngrok.io/shop/1/brands' // Replace this URL with your own

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api', (req, res) => {
  request(
    { url: `${API_URL}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }

      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
