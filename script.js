// script.js

// Sample data for the transistor radio
const radioData = {
    image: 'transistor_radio.jpg',
    description: 'The first transistor radio, compact and portable.',
    features: [
        'Revolutionary transistor technology.',
        'Portable and lightweight design.',
        'Crystal clear AM radio reception.'
    ]
};





// Function to update the radio information
function updateRadioInfo() {
    // Get HTML elements to update
    const radioImage = document.getElementById('radio-image');
    const radioDescription = document.getElementById('radio-description');
    const radioFeatures = document.getElementById('radio-features');

    // Update content based on radioData
    radioImage.src = radioData.image;
    radioDescription.textContent = radioData.description;

    // Clear previous features
    radioFeatures.innerHTML = '';

    // Add features to the list
    radioData.features.forEach(feature => {
        const listItem = document.createElement('li');
        listItem.textContent = feature;
        radioFeatures.appendChild(listItem);
    });
}

// Initial update when the page loads
window.onload = updateRadioInfo;
