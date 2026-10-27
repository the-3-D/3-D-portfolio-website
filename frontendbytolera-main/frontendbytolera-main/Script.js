//this is page logic for controlling the web page in the HTML 
const form = document.querySelector('.contact-form');
const demo = document.getElementById('demo');//here we have access to the lines of paragraph to display messages to the user, such as success or error messages after form submission.

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload
  // Get values from inputs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const button = document .getElementById('btn-send');
  button.textContent="sending...";
  button.disabled=true;

  //to help to debug latter  just when it is submitted to see if the values are being captured correctly
console.log("Form submitted with:", { name, email, message }); // Debug log
//let's specifically take the email in to account to see if it is being captured correctly
console.log("Email captured:", email); // Debug log for email
//do you think the email is being captured correctly ?
// If the email is not being captured correctly, it could be due to several reasons such as:
// 1. The selector used to target the email input field might be incorrect. Ensure that the class name '.email-input' is correctly assigned to the email input element in the HTML.
// 2. There might be an issue with the form structure or how the elements are nested, which could affect how the values are being accessed.
// 3. There could be a typo in the ID or class names used in the JavaScript code compared to the HTML.
// To troubleshoot, you can check the console logs to see if the email value is being captured as expected and verify that the HTML structure matches what your JavaScript code is targeting.

  // Simple validation
  if (!name || !email || !message) {
    demo.textContent = "Please fill all fields!";
    demo.style.color = 'red';   
    return;
  }
  // Prepare data to send
  const formData = { name, email, message };

  // Send POST request to backend

  fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(data => {
      demo.textContent = data.message || 'Message sent successfully!';
      demo.style.color = 'green';
      form.reset(); // clear form
    })
    .catch(err => {
      console.error(err);
      demo.textContent = 'Error sending message.';
      demo.style.color = 'red';
    });

  // Log form data for debugging
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
});

{

}
