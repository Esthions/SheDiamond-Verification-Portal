const status = (match.Status || "").toString().toLowerCase();

        if (status.includes("confirm")  status.includes("attend")  status.includes("verified")) {
            result.innerText = "✅ VERIFIED - Invitation Confirmed";
            result.style.color = "green";
        } else {
            result.innerText = "⚠️ FOUND BUT NOT CONFIRMED";
            result.style.color = "orange";
        }

    } catch (error) {
        result.innerText = "Error checking invitation. Try again.";
        result.style.color = "orange";
    }
}
