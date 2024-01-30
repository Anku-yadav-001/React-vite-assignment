import React, { useState } from 'react';
import DataDisplay from './components/DataDisplay';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed');
      }

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      setError("An error occurred while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>React App</h1>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <DataDisplay data={data} />
    </div>
  );
};

export default App;