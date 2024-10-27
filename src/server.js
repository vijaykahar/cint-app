const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Endpoint to receive webhook data
app.post('/', (req, res) => {
    console.log("Received Data:", req.body); // Print received data to console
    res.sendStatus(200); // Respond with 200 OK
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
