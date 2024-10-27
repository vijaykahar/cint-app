// src/WebhookListener.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WebhookListener = () => {
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
            <h1>Received Webhooks</h1>
            {webhooks.length === 0 ? (
                <p>No webhooks received yet.</p>
            ) : (
                <ul>
                    {webhooks.map((webhook, index) => (
                        <li key={index}>
                            <pre>{JSON.stringify(webhook, null, 2)}</pre>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WebhookListener;
