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
    const selectedDay = selectedDate.getDay(); // 0 = Sunday, 5 = Friday, 6 = Saturday
    const selectedTime = partyTimeInput.value;

    // Check if date and time are valid
    if ((selectedDay === 0 && selectedTime === "20:00") || (selectedDay === 5 || selectedDay === 6)) {
        confirmationMessage.style.display = "block";
        errorMessage.style.display = "none";

        // Example: Send email (using services like EmailJS or Formspree if needed)
        sendEmailReservation();
    } else {
        errorMessage.style.display = "block";
        confirmationMessage.style.display = "none";
    }
});

// Example function to send reservation (implement your own email sending service)
function sendEmailReservation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = partyDateInput.value;
    const time = partyTimeInput.value;

    console.log(`New Reservation:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}`);
    // Here you would connect to Formspree, EmailJS, etc.
}
