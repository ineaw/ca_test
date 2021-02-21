function validate() {
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  const text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length < 10) {
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (address.length <= 10) {
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
