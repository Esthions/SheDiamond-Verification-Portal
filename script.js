[18/06/2026 15:03] Esther Omuedi: alert("JavaScript is working");
[18/06/2026 15:11] Esther Omuedi: const SHEET_URL = "https://opensheet.elk.sh/1-tpFvrD1CMh61jNb94rNL8KMQqcVqfxvEx2iGmj90CU/Sheet1";

async function verifyInvitation() {
    const phone = document.getElementById("phone").value.trim();
    const result = document.getElementById("result");

    if (!phone) {
        result.innerHTML = "Please enter a phone number.";
        return;
    }

    result.innerHTML = "Checking...";

    try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();

        const person = data.find(row =>
            String(row.Phone  row.phone  "").trim() === phone
        );

        if (person) {
            result.innerHTML = 
                <div style="color:green;">
                    <h3>Invitation Verified ✅</h3>
                    <p><strong>Name:</strong> ${person.Name || person.name || ""}</p>
                    <p><strong>Status:</strong> Invited Guest</p>
                </div>
            ;
        } else {
            result.innerHTML = 
                <div style="color:red;">
                    <h3>Invitation Not Found ❌</h3>
                    <p>This phone number is not on the invitation list.</p>
                </div>
            ;
        }

    } catch (error) {
        console.error(error);
        result.innerHTML = 
            <div style="color:red;">
                Error loading invitation data.
            </div>
        ;
    }
}
