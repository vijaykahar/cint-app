// src/WebhookListener.js

import React from 'react';
import DataTable from 'react-data-table-component';

const WebhookListener = ({ webhooks }) => {
    // Define columns for the data table
    const columns = [
        {
            name: 'Index',
            selector: (row, index) => index + 1, // Index starts from 1
            sortable: true,
            width: '100px'
        },
        {
            name: 'Event Type',
            selector: (row) => row.action || row.event || 'N/A', // Adjust based on your payload structure
            sortable: true
        },
        {
            name: 'Payload',
            selector: (row) => JSON.stringify(row, null, 2),
            cell: row => <pre>{JSON.stringify(row, null, 2)}</pre>,
            wrap: true // Enable wrapping for better visibility
        }
    ];

    return (
        <div>
            <h2>Received Webhooks</h2>
            {webhooks.length === 0 ? (
                <p>No webhooks received yet.</p>
            ) : (
                <DataTable
                    columns={columns}
                    data={webhooks}
                    pagination
                    highlightOnHover
                    striped
                />
            )}
        </div>
    );
};

export default WebhookListener;
