document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    // Check if the page has been loaded before
    if (!localStorage.getItem('pageLoaded')) {
        // If it's the first load, set the flag and reload the page
        localStorage.setItem('pageLoaded', 'true');
        window.location.reload();
    } else {
        // If it's not the first load, check if there's a stored name
        const storedName = localStorage.getItem('userName');
        if (welcomeMessage) {
            if (storedName) {
                // Use the stored name for the welcome message
                welcomeMessage.textContent = `Hi ${storedName}, Welcome To Website`;
            } else {
                // Prompt for the name if not stored
                const enteredName = prompt('Please enter your name:');
                if (enteredName) {
                    localStorage.setItem('userName', enteredName);
                    welcomeMessage.textContent = `Hi ${enteredName}, Welcome To Website`;
                }
            }
        }
    }
});



    const contactForm = document.getElementById('messageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const dob = document.getElementById('dob').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const message = document.getElementById('message').value;

            if (name && dob && gender && message) {
                document.getElementById('displayName').textContent = name;
                document.getElementById('displayDob').textContent = dob;
                document.getElementById('displayGender').textContent = gender;
                document.getElementById('displayMessage').textContent = message;
                document.getElementById('currentTime').textContent = new Date().toLocaleString();
                document.getElementById('submitted-info').style.display = 'block';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }


