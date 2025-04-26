const form = document.getElementById("reservation-form");
const partyDateInput = document.getElementById("party-date");
const partyTimeInput = document.getElementById("party-time");
const confirmationMessage = document.getElementById("confirmation-message");
const errorMessage = document.getElementById("error-message");

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const selectedDate = new Date(partyDateInput.value);
  const selectedDay = selectedDate.getDay(); // 0 = Sunday, 5 = Friday, 6 = Saturday
  const selectedTime = partyTimeInput.value;

  if ((selectedDay === 0 && selectedTime === "20:00") || (selectedDay === 5 || selectedDay === 6)) {
    confirmationMessage.style.display = "block";
    errorMessage.style.display = "none";

    sendEmailReservation();
  } else {
    errorMessage.style.display = "block";
    confirmationMessage.style.display = "none";
  }
});

function sendEmailReservation() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = partyDateInput.value;
  const time = partyTimeInput.value;

  console.log(`Reservation Info:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Date: ${date}
    Time: ${time}
  `);
  // Integrate your backend or email service here
}
