function sendOTP() {
  const email = document.getElementById("email").value;

  // Check if email is valid
  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Generate a random 6-digit OTP code
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Save the OTP code, email, and timestamp to a database
  saveOTP(email, otp);

  // Send the OTP code to the user's email address
  sendEmail(email, otp);
}

function verifyOTP() {
  const email = document.getElementById("email").value;
  const otp = document.getElementById("otp").value;

  // Check if email and OTP are valid
  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!validateOTP(otp)) {
    alert("Please enter a valid OTP code");
    return;
  }

  // Retrieve the OTP code from the database and compare it to the user's input
  const savedOTP = getOTP(email);

  if (otp !== savedOTP) {
    alert("Invalid OTP code");
    return;
  }

  // If the OTP code is valid, log the user in
  login(email);
}

function saveOTP(email, otp) {
  // Save the OTP code, email, and timestamp to a database using AJAX or another method
  // For simplicity, we'll just log them to the console
  console.log(`Saving OTP code ${otp} for email ${email}`);
}

function sendEmail(email, otp) {
  // Send the OTP code to the user's email address using AJAX or another method
  // For simplicity, we'll just log it to the console
  console.log(`Sending OTP code ${otp} to email ${email}`);
}

function getOTP(email) {
  // Retrieve the OTP code from the
