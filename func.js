
const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const gender = document.registration;
const language = document.getElementById("language");
const zipcode = document.getElementById("zipcode");


function formValidation() {
 
 if (userName.value.length < 2 || userName.value.length > 30) 
 {
    
 alert("Name length should be more than 2 and less than 31 charaters");
 userName.focus();
 return false;
 }
 
 if(!userName.value.match(/^[A-Za-z]+$/))
 {
    alert("Name must contain appropriate input");
    userName.focus();
    return false;
 }
 

 if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) 
 {
 alert("Please enter a valid email!");
 email.focus();
 return false;
 }

 if (!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) 
 {
 alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.");
 password.focus();
 return false;
 }

 if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/))
  {
 alert("Phone number must be 10 characters long number and first digit can't be 0!");
 phoneNumber.focus();
 return false;
  }

 if (gender.gender.value === "")
  {
 alert("Please select your gender!");
 return false;
 }

 if (language.value === "") 
 {
 alert("Please select your language!")
 return false;
 }
 if (nationality.value === "") 
 {
 alert("Please select your language!")
 return false;
 }
 
 if (!zipcode.value.match(/^[0-9]{6}$/)) 
 {
 alert("Zip code must be 6 characters long number!");
 zipcode.focus();
 return false;
 }
 

 else
 alert("Form successfully submitted");
 (window.location.reload)
 return true;
 
}