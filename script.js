alert("Button script loaded");
const SHEET_URL =
"https://opensheet.elk.sh/1-tpFvrD1CMh61jNb94rNL8KMQqcVqfxvEx2iGmj90CU/Sheet1";

async function verifyInvitation(){

    const phone =
    document.getElementById("phone")
    .value
    .trim();

    const result =
    document.getElementById("result");

    result.innerHTML =
    "<p>Checking invitation...</p>";

    try{

        const response =
        await fetch(SHEET_URL);

        const data =
        await response.json();

        const attendee =
        data.find(row =>
            row["Phone Number"] &&
            row["Phone Number"].replace(/\s+/g,'') === phone.replace(/\s+/g,'')
        );

        if(attendee){

            result.innerHTML = 
            <div class="card">

            <h2 style="color:#00ff88">
            INVITATION VERIFIED
            </h2>

            <h3>
            Welcome, ${attendee["Name"]}
            </h3>

            <p>
            ${attendee["Event Name"]}
            </p>

            <p>
            <strong>Date:</strong>
            ${attendee["Event Date"]}
            </p>

            <p>
            <strong>Time:</strong>
            ${attendee["Event Time"]}
            </p>

            <p>
            <strong>Venue:</strong>
            ${attendee["Event Venue"]}
            </p>

            </div>
            ;
        }
        else{

            result.innerHTML = 
            <div class="card">

            <h2 style="color:red">
            NO INVITATION FOUND
            </h2>

            <p>
            Please contact support:
            0808 940 6844
            </p>

            </div>
            ;
        }

    }catch(error){

        result.innerHTML =
        "<p>Error loading attendee records.</p>";
    }
}
