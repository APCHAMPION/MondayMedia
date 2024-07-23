
document.querySelector("#queryform").addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const form = event.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('We will connect to you very soon.');
        form.reset(); // Reset the form fields
      } else {
        const errorText = await response.text();
        console.error('Error submitting query:', errorText);
      }
    } catch (error) {
      console.error('Error submitting query:', error);
    }
  });