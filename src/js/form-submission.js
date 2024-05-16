document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault(); 

  if (!validateEmail(event)) {
    return;
  }

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/', {
      method: 'POST',
      body: new URLSearchParams(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    if (response.ok) {
      showToast('Message sent!');
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    showToast('Message failed');
    console.error(error);
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  toastMessage.textContent = message;
  toast.style.display = 'flex';

}

function hideToast() {
  document.getElementById('toast').style.display = 'none';
}
