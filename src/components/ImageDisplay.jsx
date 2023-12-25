import React, { useState, useEffect } from 'react';

const ImageDisplay = () => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/plot');

                if (response.ok) {
                    // Get the blob data from the response
                    const blob = await response.blob();

                    const dataUrl = URL.createObjectURL(blob);

                    setImageUrl(dataUrl);
                } else {
                    console.error('Failed to fetch image:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        // Call the fetchImage function
        fetchImage();
    }, []);

    return (
        <div>
            {imageUrl ? (
                // Render the image if imageUrl is available
                <img src={imageUrl} alt="Fetched Image" />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
};

export default ImageDisplay;
