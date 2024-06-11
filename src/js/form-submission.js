// import { toast, AUTO_HIDE, PERSISTENT } from './toast.js';
// import { validateEmail } from './email-form-states.js';
// import { updateSubject } from './email-subject.js';

// document
//   .getElementById('contact-form')
//   .removeEventListener('submit', handleFormSubmit);
// document
//   .getElementById('contact-form')
//   .addEventListener('submit', handleFormSubmit);

// async function handleFormSubmit(event) {
//   event.preventDefault();

//   if (!validateEmail(event)) {
//     return;
//   }

//   const form = event.target;
//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries());

//   try {
//     const response = await fetch('/', {
//       method: 'POST',
//       body: new URLSearchParams(data),
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     });

//     if (response.ok) {
//       toast.showToast('Message sent!', PERSISTENT);
//       form.reset();
//     } else {
//       throw new Error('Form submission failed');
//     }
//   } catch (error) {
//     toast.showToast('Message failed', PERSISTENT);
//     console.error(error);
//   }
// }
