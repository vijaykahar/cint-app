// api/webhook.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log('Webhook received:', req.body);
        // Store the data in a simple in-memory array (for demonstration purposes)
        if (!Array.isArray(global.webhookData)) {
            global.webhookData = [];
        }
        global.webhookData.push(req.body);
        res.status(200).send('Webhook received');
    } else if (req.method === 'GET') {
        res.status(200).json(global.webhookData || []);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
