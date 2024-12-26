document.addEventListener("DOMContentLoaded", () => {
    console.log("Script is running...");

    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header.html: " + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
            console.log("Header loaded successfully.");
        })
        .catch(error => {
            alert("Error loading header: " + error.message);
        });

    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer.html: " + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            console.log("Footer loaded successfully.");
        })
        .catch(error => {
            alert("Error loading footer: " + error.message);
        });
});