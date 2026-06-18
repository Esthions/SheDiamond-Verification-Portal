if (match) {
    const name = match.Name || "Guest";
    const event = match["Event Name"] || "";
    const date = match["Event Date"] || "";
    const time = match["Event Time"] || "";
    const venue = match["Event Venue"] || "";
    const status = (match.Status || "").toLowerCase();

    if (status.includes("confirm")  status.includes("attend")  status.includes("verified")) {
        result.innerHTML = 
            ✅ <b>INVITATION CONFIRMED</b><br><br>
            👤 Name: ${name}<br>
            🎉 Event: ${event}<br>
            📅 Date: ${date}<br>
            ⏰ Time: ${time}<br>
            📍 Venue: ${venue}<br><br>
            🎟 Status: Approved Guest<br><br>
            Welcome to SheDiamond Executive Event
        ;
        result.style.color = "green";
    } else {
        result.innerHTML = 
            ⚠️ <b>FOUND BUT NOT CONFIRMED</b><br><br>
            👤 Name: ${name}<br>
            🎟 Status: Pending Approval
        ;
        result.style.color = "orange";
    }
}
