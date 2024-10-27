import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null);

    // This function could be called after receiving data from the server
    const fetchData = async () => {
        try {
            const response = await axios.get('https://cint-app-vijaykahars-projects.vercel.app/');
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data on component mount
    }, []);

    return (
        <div>
            <h1>Webhook Data</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>No data received yet.</p>
            )}
        </div>
    );
}

export default App;
