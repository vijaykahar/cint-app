// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Store received webhooks
let webhookData = [];

// Webhook route
app.post('/api/webhook', (req, res) => {
    console.log('Webhook received:', req.body);
    webhookData.push(req.body);
    res.status(200).send('Webhook received');
});

// Route to get received webhooks
app.get('/api/webhooks', (req, res) => {
    res.status(200).json(webhookData);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
