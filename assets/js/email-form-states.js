// Debounce function
function debounce(callback, delay = 1500) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }
  
  function handleEmailInput(event) {
    const emailInput = document.getElementById('email');
    const emailLabel = document.querySelector('label[for="email"]');
    const errorSpan = document.getElementById('email-error');
    const regex = new RegExp(emailInput.pattern);

    if (event.type === 'focus') {
        errorSpan.style.display = 'none';
        emailInput.classList.remove('input-error');
        emailLabel.classList.remove('label-error');
    } else if (event.type === 'blur' && emailInput.value && !regex.test(emailInput.value)) {
        errorSpan.style.display = 'block';
        emailInput.classList.add('input-error');
        emailLabel.classList.add('label-error');
    }
}

document.getElementById('email').addEventListener('focus', handleEmailInput);
document.getElementById('email').addEventListener('blur', handleEmailInput);
