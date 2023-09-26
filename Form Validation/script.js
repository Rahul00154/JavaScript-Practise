const nameErr = document.getElementById("name-err");
const emailErr = document.getElementById("email-err");
const phnErr = document.getElementById("phn-err");
const passErr = document.getElementById("pass-err");
const locErr = document.getElementById("loc-err");
const dobErr = document.getElementById("dob-err");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isPasswordValid = validatePassword();
  const isDateValid = validateDate();

  if (
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isPasswordValid &&
    isDateValid
  ) {
    displaySuccessMessage();
  }
});

//display successful message

function displaySuccessMessage() {
  const successMessage = document.createElement("div");
  successMessage.classList.add("success-msg");
  successMessage.innerText = "Form submitted successfully!";

  // Append the success message after the form
  const container = document.querySelector(".container");
  container.appendChild(successMessage);

  // Reset the form
  form.reset();

  // Remove the success message after someTime
  setTimeout(() => {
    successMessage.remove();
  }, 5000);
}

//Code for name validation

function validateName() {
  const nameEle = document.getElementById("name").value;
  const name = nameEle.trim();

  if (name.length === 0) {
    nameErr.innerHTML = "Name is required ";
    return false;
  }

  if (name.length < 3) {
    nameErr.innerHTML = "Name must be at least 3 character";
    return false;
  }

  const nameReg = /^[A-Za-z]+(?:\s+[A-Za-z]+)?$/;
  if (!name[0].match(/[A-Za-z]/)) {
    nameErr.innerHTML = "First character must be a letter";
    return false;
  }

  if (!name.match(nameReg)) {
    nameErr.innerHTML = "Write Full Name";
    return false;
  }
  nameErr.innerHTML = "";
  return true;
}

//code for email validation

function validateEmail() {
  const emailEle = document.getElementById("email").value;
  const email = emailEle.trim();

  const lowerCaseEmail = email.toLowerCase();

  if (lowerCaseEmail.length === 0) {
    emailErr.innerHTML = "Email is required";
    return false;
  }

  if (lowerCaseEmail[0] === " ") {
    emailErr.innerHTML = "First character cannot be space";
    return false;
  }

  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!lowerCaseEmail.match(emailReg)) {
    emailErr.innerHTML = "Write email in valid format";
    return false;
  }
  emailErr.innerHTML = "";
  return true;
}

//code for phone no validation

function validatePhone() {
  const phoneEle = document.getElementById("phone-no").value;
  const phone = phoneEle.trim();

  //condition for validation
  const phoneReg = /^[789]\d{9}$/;
  const invalidCharReg = /[^0-9.\-\s]/; //match any character that is not a digit space dot or hyphen

  if (phone.length === 0) {
    phnErr.innerHTML = "Mobile no. is required";
    return false;
  }

  if (invalidCharReg.test(phone)) {
    phnErr.innerHTML = "Mobile no. contains character";
    return false;
  }

  if (!phone.match(phoneReg)) {
    phnErr.innerHTML = "Write mobile no. in valid format";
    return false;
  }

  phnErr.innerHTML = " ";
  return true;
}

//code for password validation

function validatePassword() {
  const passWrdEle = document.getElementById("passwrd").value;
  const passwrd = passWrdEle.trim();

  const minLength = 6;
  //Regular expression to check some criteria

  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[@#&]/;

  if (passwrd.length === 0) {
    passErr.innerHTML = "Password is required";
    return false;
  }

  if (passwrd.length < minLength) {
    passErr.innerHTML = "Password must contains eight character";
    return false;
  }

  if (!passwrd.match(upperCaseRegex)) {
    passErr.innerHTML =
      "Password must contains atleast one uppercase character";
    return false;
  }

  if (!passwrd.match(lowerCaseRegex)) {
    passErr.innerHTML =
      "Password must contains atleast one lowercase character ";
    return false;
  }

  if (!passwrd.match(digitRegex)) {
    passErr.innerHTML = "Password must contains atleast one digit";
    return false;
  }

  if (!passwrd.match(specialCharRegex)) {
    passErr.innerHTML = "Password must contains atleast one special character";
    return false;
  }

  passErr.innerHTML = "";
  return true;
}

//code for date validation

const dateInput = document.getElementById("dob");
//set limit on date
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; //month is zero base indexinf
const year = currentDate.getFullYear();

let formatDay;
if (day < 10) {
  formatDay = "0" + day;
} else {
  formatDay = day;
}

let formatMnth;
if (month < 10) {
  formatMnth = "0" + month;
} else {
  formatMnth = month;
}

const formattedDate = `${year}-${formatMnth}-${formatDay}`;

dateInput.setAttribute("max", formattedDate);

function validateDate() {
  const date = document.getElementById("dob").value;
  if (date.length === 0) {
    dobErr.innerHTML = "Date is required";
    return false;
  }

  dobErr.innerHTML = "";
  return true;
}
