// src/TestWebhook.js

import React from 'react';

const TestWebhook = () => {
    const sendWebhook = async () => {
        const response = await fetch('/api/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: 'Hello from React!' }),
        });
        
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <button onClick={sendWebhook}>Send Webhook</button>
        </div>
    );
};

export default TestWebhook;
