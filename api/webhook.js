// api/webhook.js

let webhookEvents = []; // Use a variable for storing events

export default function handler(req, res) {
    // if (req.method === 'POST') {
    //     console.log('Webhook received:', req.body);

    //     // Store the event in memory
    //     webhookEvents.push(req.body);
        
    //     // Optionally limit the number of stored events
    //     if (webhookEvents.length > 1000) {
    //         webhookEvents.shift(); // Remove the oldest event if over limit
    //     }

    //     res.status(200).send('Webhook received');
    // } else if (req.method === 'GET') {
    //     res.status(200).json(webhookEvents);
    // } else {
    //     res.status(405).json({ message: 'Method not allowed' });
    // }
}
