async function verifyInvitation() {
    document.getElementById("result").innerHTML = "Checking...";

    const response = await fetch("https://opensheet.elk.sh/1-tpFvrD1CMh61jNb94rNL8KMQqcVqfxvEx2iGmj90CU/Sheet1");
    const data = await response.json();

    alert("Rows found: " + data.length);
}
