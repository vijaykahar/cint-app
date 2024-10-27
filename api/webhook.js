export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle the webhook data
      const data = req.body;
  
      // Process the webhook data (for example, log it)
      console.log('Webhook received:', data);
  
      // Respond with a success status
      res.status(200).json({ message: 'Webhook received successfully!' });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  