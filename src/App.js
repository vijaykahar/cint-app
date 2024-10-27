// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WebhookListener from './WebhookListener';

function App() {
    const [webhooks, setWebhooks] = useState([]);

    const fetchWebhooks = async () => {
        try {
            const response = await axios.get('/api/webhook');
            setWebhooks(response.data);
        } catch (error) {
            console.error('Error fetching webhooks:', error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            fetchWebhooks();
        }, 1000); // Fetch webhooks every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Webhook Listener</h1>
            <WebhookListener webhooks={webhooks} />
        </div>
    );
}

export default App;
