import React, { useState, useEffect } from 'react';

const HistoryLog = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch history log data from backend API and set it to state
    const fetchHistoryLog = async () => {
      try {
        const response = await fetch('backend/api/history');
        if (response.ok) {
          const data = await response.json();
          setHistory(data);
        } else {
          throw new Error('Failed to fetch history log');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistoryLog();
  }, []);

  return (
    <div>
      <h2>Token History Log</h2>
      <ul>
        {history.map((token, index) => (
          <li key={index}>{token}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryLog;