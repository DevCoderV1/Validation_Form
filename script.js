const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const Birth_Month = document.getElementById("birth_month");
const Birth_Day = document.getElementById("birth_day");
const Birth_Year = document.getElementById("birth_year");
const Gender_Selection = document.getElementById("gender_type").value;
const submit_btn = document.querySelector(".submit_btn");
const CheckInput = document.querySelectorAll("input");
const modal = document.querySelector(".popup_message_container")
const close_modal = document.querySelector(".close_btn")
const DaysOfMonths = [31, 28, 31, 20, 31, 30, 31, 31, 30, 31, 30, 31]
const Today = new Date()
// event when submit the form
submit_btn.addEventListener("click", (e) => {
  e.preventDefault()
  let validInput = 0;
  //check if all the inputs are fill in. If not, show which input needs to be fill
  CheckInput.forEach((item) => {
    if (item.value === "") {
      item.style.borderColor = "red"
    } else {
      item.style.borderColor = "green"
      validInput++
    }

  });
  if (validInput != CheckInput.length) {
    alert("Please fill in the remaining blanks input")
  } else {
    let validName = CheckName(firstName.value, lastName.value)
    let ValidBirth = CheckAge(Birth_Month.value, Birth_Month.value, Birth_Year.value)
    if (validName && ValidBirth) {
      modal.classList.add("open_message")
    } else {
      console.log("not working")
    }

  }

});
close_modal.addEventListener('click', () => {
  modal.classList.remove("open_message")
  location.reload()
})

//check if first and last name contains any other special character
function CheckName(first, last) {
  const regex = /^[A-Za-z]+$/
  let valid = 0;
  if (first.match(regex)) {
    valid++
  } else {
    firstName.style.borderColor = "red"
  }
  if (last.match(regex)) {
    valid++
  } else {
    lastName.style.borderColor = "red"
  }
  if (valid == 2) {
    return true
  } else {
    return false
  }

}

function CheckAge(month, day, year) {
  let LeapYear = CheckLeapYear(year)
  if (LeapYear) {
    DaysOfMonths[1] = 29
  }
  if ((month > 0 && month <= 12) && (day > 0 && day <= DaysOfMonths[month - 1]) && (year > 0 && year <= Today.getFullYear())) {

    return true
  }
  else {
    alert("Invalid Birth Date")
    Birth_Month.style.borderColor = "red"
    Birth_Year.style.borderColor = "red"
    Birth_Day.style.borderColor = "red"
    return false
  }
}


function CheckLeapYear(year) {
  if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
    return true
  } else {
    return false;
  }
}

