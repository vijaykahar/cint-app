// api/webhook.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
        // Log the received webhook data
        console.log('Webhook received:', req.body);
        console.log('Webhook received res:', res);

        // Respond back to the sender
        return res.status(200).json({ message: 'Webhook received', data: req.body });
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
