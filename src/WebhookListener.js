// src/WebhookListener.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WebhookListener = () => {
    const [webhooks, setWebhooks] = useState([]);

    const fetchWebhooks = async () => {
        const response = await axios.get('/api/webhook');
        setWebhooks(response.data);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            fetchWebhooks();
        }, 1000); // Fetch webhooks every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Received Webhooks</h1>
            <ul>
                {webhooks.map((webhook, index) => (
                    <li key={index}>{JSON.stringify(webhook)}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebhookListener;
