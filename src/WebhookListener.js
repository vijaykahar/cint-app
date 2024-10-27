// src/WebhookListener.js

import React from 'react';

const WebhookListener = ({ webhooks }) => {
    return (
        <div>
            <h2>Received Webhooks</h2>
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
