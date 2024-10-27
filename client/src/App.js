const sendTestWebhook = async () => {
  try {
      const response = await axios.post('/api/webhook', { key: 'value' });
      setResponseMessage(response.data.message);
  } catch (error) {
      console.error("Error sending webhook:", error);
      setResponseMessage('Error sending webhook');
  }
};
