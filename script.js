document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("festivals.json");
        if (!response.ok) throw new Error("Failed to load festival data");

        const data = await response.json();
        const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

        let festivalMessage = "No festival today. Stay blessed! 🎉";
        data.festivals.forEach(festival => {
            if (festival.date === today) {
                festivalMessage = festival.message;
            }
        });

        document.getElementById("festival-message").textContent = festivalMessage;
    } catch (error) {
        console.error("Error loading festival data:", error);
        document.getElementById("festival-message").textContent = "Error loading greetings.";
    }
});
