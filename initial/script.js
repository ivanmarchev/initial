document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form data
    var formData = new FormData(this);
    // You can now use formData to access form fields and their values
    // For example:
    var name = formData.get('name');
    var email = formData.get('email');
    var message = formData.get('message');
    
    // For demonstration purposes, let's just log the form data
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Message:', message);

    // Optionally, you can display a success message or redirect the user after form submission
});
