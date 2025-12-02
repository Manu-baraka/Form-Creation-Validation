document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form")
  const feedbackDiv = document.getElementById("form-feedback")
  form.addEventListener("submit", function(event) {
    event.preventDefault()
  });

  const username = document.getElementById("username").Value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;           // Tracks if the form is valid
  let messages = [];            // Stores any validation error messages

  if (username.length < 3) {
  isValid = false;
  messages.push("Username must be at least 3 characters long.");
}

  if (!email.includes("@") && !email.includes(".")) {
  isValid = false;
  messages.push("Email must include both '@' and '.' characters.");
}

  if (password.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.")
  }

feedbackDiv.style.display = "block";
if(isValid) {
  feedbackDiv.style.color = "#28a745";
  feedbackDiv.textContent = "Registration successful!";
} 
else {
  feedbackDiv.style.color = "#dc3545";
  feedbackDiv.innerHTML = messages.join("<br>");
}
});