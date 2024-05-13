function updateSubject(email) {
    const subjectField = document.getElementById('email-subject');
    subjectField.value = `New message from ${email}`;
  }
  