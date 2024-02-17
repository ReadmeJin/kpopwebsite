document.addEventListener("DOMContentLoaded", function() {
    fetch("https://kpop-comebacks.heismauri.com/api")
    .then(response => response.json())
    .then(data => {
        const comebacksContainer = document.getElementById("comebacks");
        data.forEach(comeback => {
            // Convert the Unix timestamp to a readable date
            const date = new Date(comeback.date).toLocaleDateString("en-US", {
                year: 'numeric', month: 'long', day: 'numeric'
            });

            const div = document.createElement("div");
            div.innerHTML = `<strong>${date}</strong>: ${comeback.title}`;
            comebacksContainer.appendChild(div);
        });
    })
    .catch(error => console.error("Error fetching data:", error));
});
