const fetchWebhooks = async () => {
    const response = await axios.get('/api/webhook'); // This should resolve correctly in production
    setWebhooks(response.data);
};
