// Get form elements
const form = document.getElementById("reservation-form");
const partyDateInput = document.getElementById("party-date");
const partyTimeInput = document.getElementById("party-time");
const confirmationMessage = document.getElementById("confirmation-message");
const errorMessage = document.getElementById("error-message");

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from refreshing the page
    
    const selectedDate = new Date(partyDateInput.value);
    const selectedDay = selectedDate.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
    const selectedTime = partyTimeInput.value;

    // Check for date and time validity
    if ((selectedDay === 0 && selectedTime === "20:00") || (selectedDay === 5 || selectedDay === 6)) {
        confirmationMessage.style.display = "block";
        errorMessage.style.display = "none";

        // Send email with reservation details (use your email service API)
        sendEmailReservation();
    } else {
        errorMessage.style.display = "block";
        confirmationMessage.style.display = "none";
    }
});

// Example function to send reservation email (e.g., via Formspree or EmailJS)
function sendEmailReservation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = partyDateInput.value;
    const time = partyTimeInput.value;

    const message = `New party reservation:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Date: ${date}
    Time: ${time}`;

    // For example, use Formspree:
    fetch('https://formspree.io/f/yourFormID', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => {
        if (response.ok) {
            console.log("Email sent!");
        } else {
            console.error("Error sending email");
        }
    });
}
