// api/webhook.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
        console.log('Webhook received:', req.body);

        // Initialize in-memory storage if it doesn't exist
        if (!Array.isArray(global.webhookEvents)) {
            global.webhookEvents = [];
        }
        global.webhookEvents.push(req.body);

        res.status(200).send('Webhook received');
    } else if (req.method === 'GET') {
        res.status(200).json(global.webhookEvents || []);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
