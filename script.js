document.addEventListener("DOMContentLoaded", function() {
    // Using All Origins (https://allorigins.win/) as a CORS proxy
    const apiURL = 'https://kpop-comebacks.heismauri.com/api';
    const proxyURL = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiURL)}`;

    fetch(proxyURL)
    .then(response => response.json())
    .then(data => {
        const comebacksContainer = document.getElementById("comebacksContainer");
        data.forEach(comeback => {
            const date = new Date(comeback.date).toLocaleDateString("en-US");
            const card = document.createElement("div");
            card.className = 'card';
            card.innerHTML = `<h2>${comeback.title}</h2><p>${date}</p>`;
            comebacksContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        // Optional: Display an error message in the UI
    });
});
