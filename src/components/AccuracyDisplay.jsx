import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const AccuracyDisplay = () => {
  const [accuracy, setAccuracy] = useState(null);
  const [truncatedAccuracy, setTruncatedAccuracy] = useState(null);

  useEffect(() => {
    const fetchAccuracy = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/score');
        if (response.ok) {
          const data = await response.json();
          setAccuracy(data.score);
          setTruncatedAccuracy(parseFloat(data.score.toFixed(2)));
          console.log(data.score);
        } else {
          console.error('Failed to fetch accuracy:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching accuracy:', error);
      }
    };

    // Call the fetchAccuracy function
    fetchAccuracy();
  }, []);


  return (
    <div>
      {accuracy !== null ? (

        <CircularProgressbar value={accuracy} text={`${truncatedAccuracy}%`} />
      ) : (
        <p>Loading accuracy...</p>
      )}
    </div>
  );
};

export default AccuracyDisplay;
