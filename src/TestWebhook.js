// src/TestWebhook.js

import React from 'react';

const TestWebhook = () => {
    const sendWebhook = async () => {
        const response = await fetch('/api/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log("coming ==> ",data);
        const data = await response.json();
        
    };

    return (
        <div>
            <button onClick={sendWebhook}>Send Webhook</button>
        </div>
    );
};

export default TestWebhook;
