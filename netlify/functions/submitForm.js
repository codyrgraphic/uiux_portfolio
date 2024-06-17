exports.handler = async function (event, context) {
  const data = new URLSearchParams(event.body);
  console.log('Form submission received:', data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submission successful' }),
  };
};
