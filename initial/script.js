document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form data
    var formData = new FormData(this);
    // You can now use formData to access form fields and their values
    // For example:
    var name = formData.get('name');
    var email = formData.get('email');
    var message = formData.get('message');
    
    // Now you can do something with the form data, like send it to a server using AJAX
    // For example:
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'url_to_your_server_endpoint');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify({name: name, email: email, message: message}));

    // For demonstration purposes, let's just log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can display a success message or redirect the user after form submission
});
