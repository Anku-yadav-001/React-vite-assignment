// DataDisplay.jsx
import React from 'react';
import './DataDisplay.css'; // Import the CSS file

const DataDisplay = ({ data }) => {
  return (
    <div className="data-display">
      <h2>Data Display</h2>
      {data.length > 0 ? (
        <ol className='sub-data'>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ol>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default DataDisplay;
