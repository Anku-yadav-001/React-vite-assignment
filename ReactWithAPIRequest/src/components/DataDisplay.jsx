import './DataDisplay.css';
import React from 'react';

const DataDisplay = ({data}) => {
  return (
    <div className="data-display">
      <h2>Data Display</h2>
      {data.length > 0 ? (
        <ol>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default DataDisplay;
