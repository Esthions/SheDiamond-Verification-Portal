const SHEET_URL = "https://opensheet.elk.sh/1-tpFvrD1CMh61jNb94rNL8KMQqcVqfxvEx2iGmj90CU/Sheet1";

async function verifyInvitation() {
    const phone = document.getElementById("phone").value.trim();
    const result = document.getElementById("result");

    result.innerHTML = "Checking...";

    try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();

        const person = data.find(
            row => String(row["Phone number"] || "").trim() === phone
        );

        if (person) {
