document.getElementById('contact-form').addEventListener('submit', validateEmail);

function validateEmail(event) {
  const emailInput = document.getElementById('email');
  const errorSpan = document.getElementById('email-error');
  const emailLabel = document.querySelector('label[for="email"]');
  let isValid = true;

  // Check if the email field is empty
  if (!emailInput.value) {
    event.preventDefault(); // Prevent form submission
    errorSpan.textContent = 'Email is required'; // Set the custom error message
    errorSpan.style.display = 'block';
    emailInput.classList.add('input-error', 'jiggle');
    emailLabel.classList.add('label-error');
    isValid = false;
  } else {
    // Check for invalid email format
    const regex = new RegExp(emailInput.pattern);
    if (!regex.test(emailInput.value)) {
      event.preventDefault(); // Prevent form submission
      errorSpan.textContent = 'Invalid email, try another';
      errorSpan.style.display = 'block';
      emailInput.classList.add('input-error', 'jiggle');
      emailLabel.classList.add('label-error');
      isValid = false;
    } else {
      // If no errors, remove error state
      errorSpan.style.display = 'none';
      emailInput.classList.remove('input-error', 'jiggle');
      emailLabel.classList.remove('label-error');
    }
  }

  emailInput.addEventListener('animationend', () => {
    emailInput.classList.remove('jiggle');
  });
  
  return isValid;
}

document.getElementById('email').addEventListener('focus', function() {
  const errorSpan = document.getElementById('email-error');
  const emailInput = document.getElementById('email');
  const emailLabel = document.querySelector('label[for="email"]');

  // Clear the error state when the field gains focus
  errorSpan.style.display = 'none';
  emailInput.classList.remove('input-error');
  emailLabel.classList.remove('label-error');
});
