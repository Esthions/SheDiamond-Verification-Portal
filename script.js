const SHEET_URL = "https://opensheet.elk.sh/1-tpFvrD1CMh61jNb94rNL8KMQqcVqfxvEx2iGmj90CU/Sheet1";

function showLoading() {
    const result = document.getElementById("result");
    result.innerHTML = "⏳ Verifying invitation...";
    result.style.color = "blue";
}

async function verifyInvitation() {
    const phone = document.getElementById("phone").value.trim();
    const result = document.getElementById("result");

    console.log("Button clicked");
    console.log("Input phone:", phone);

    if (!phone) {
        result.innerHTML = "Please enter your phone number";
        result.style.color = "red";
        return;
    }

    showLoading();

    try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();

        console.log("Sheet data loaded:", data);

        const match = data.find(row => {
            const sheetPhone = (row["Phone number"] || "").toString().replace(/\D/g, "");
            const inputPhone = phone.replace(/\D/g, "");
            return sheetPhone.includes(inputPhone) || inputPhone.includes(sheetPhone);
        });

        if (!match) {
            result.innerHTML = "❌ NOT REGISTERED";
            result.style.color = "red";
            return;
        }

        const name = match.Name || "Guest";
        const status = (match.Status || "").toLowerCase();

        if (status.includes("confirm")  status.includes("attend")  status.includes("verified")) {
            result.innerHTML = 
                ✅ <b>INVITATION CONFIRMED</b><br><br>
                👤 Name: ${name}<br>
                📱 Phone: ${phone}<br>
                🎉 You are welcome to the SheDiamond Event
            ;
            result.style.color = "green";
        } else {
            result.innerHTML = 
                ⚠️ <b>FOUND BUT NOT CONFIRMED</b><br><br>
                👤 Name: ${name}<br>
                🕒 Status: Pending Approval
            ;
            result.style.color = "orange";
        }

    } catch (error) {
        console.error("Error:", error);
        result.innerHTML = "Error checking invitation. Check console.";
        result.style.color = "red";
    }
}
[18/06/2026 19:04] Esther Omuedi: const SHEET_URL = "https://opensheet.elk.sh/1-tpFvrD1CMh61jNb94rNL8KMQqcVqfxvEx2iGmj90CU/Sheet1";

function showLoading() {
    const result = document.getElementById("result");
    result.innerHTML = "⏳ Verifying invitation...";
    result.style.color = "blue";
}

async function verifyInvitation() {
    const phone = document.getElementById("phone").value.trim();
    const result = document.getElementById("result");

    if (!phone) {
        result.innerHTML = "Please enter your phone number";
        result.style.color = "red";
        return;
    }

    showLoading();

    try {
        const response = await fetch(SHEET_URL);
        const data = await response.json();

        const match = data.find(row => {
            const sheetPhone = (row["Phone number"] || "")
                .toString()
                .replace(/\D/g, "");

            const inputPhone = phone.replace(/\D/g, "");

            return (
                sheetPhone.includes(inputPhone) ||
                inputPhone.includes(sheetPhone)
            );
        });

        if (!match) {
            result.innerHTML = "❌ NOT REGISTERED";
            result.style.color = "red";
            return;
        }

        const name = match.Name || "Guest";
        const eventDate = match["Event Date"] || "";
        const eventTime = match["Event Time"] || "";
        const eventVenue = match["Event Venue"] || "";
        const status = (match.Status || "").toLowerCase();

        if (
            status.includes("confirm") ||
            status.includes("attend") ||
            status.includes("verified")
        ) {
            result.innerHTML = 
                ✅ <b>INVITATION CONFIRMED</b><br><br>
                👤 Name: ${name}<br>
                📱 Phone: ${phone}<br><br>
                📅 Date: ${eventDate}<br>
                ⏰ Time: ${eventTime}<br>
                📍 Venue: ${eventVenue}<br><br>
                🎉 You are welcome to the SheDiamond Event
            ;

            result.style.color = "green";

        } else {

            result.innerHTML = 
                ⚠️ <b>FOUND BUT NOT CONFIRMED</b><br><br>
                👤 Name: ${name}<br>
                🕒 Status: Pending Approval
            ;

            result.style.color = "orange";
        }

    } catch (error) {
        console.error(error);

        result.innerHTML =
            "Error checking invitation. Please try again.";

        result.style.color = "red";
    }
}
