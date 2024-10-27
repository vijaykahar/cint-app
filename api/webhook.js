// api/webhook.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log('GitHub Webhook received:', req.body);
        
        // Here you could process the webhook data or store it in a global variable
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
