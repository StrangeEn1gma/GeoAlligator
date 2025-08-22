const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/geolocate', async (req, res) => {
    const ip = req.query.ip;

    if (!ip) {
        return res.status(400).json({ error: 'IP address is required' });
    }

    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch IP info' });
    }
});

app.listen(PORT, () => {
    console.log(`IP Geolocation API running on port ${PORT}`);
});
