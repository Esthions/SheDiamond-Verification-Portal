
                🎉 You are welcome to the SheDiamond Executive Event
            ;
            result.style.color = "green";
        } else {
            result.innerHTML = 
                ⚠️ <b>FOUND BUT NOT CONFIRMED</b><br><br>
                👤 Name: ${name}<br>
                📱 Phone: ${phone}<br>
                🕒 Status: Pending Approval
            `;
            result.style.color = "orange";
        }

    } catch (error) {
        result.innerHTML = "Error checking invitation. Please try again.";
        result.style.color = "red";
    }
}
