document.addEventListener('DOMContentLoaded', function() {
    // Check if we are on the home page
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        // Welcome message personalization
        const welcomeMessage = document.getElementById('welcomeMessage');
        if (welcomeMessage) {
            const userName = localStorage.getItem('userName');

            // If the userName is not set, prompt the user to enter their name
            if (!userName) {
                const enteredName = prompt('Please enter your name:');
                if (enteredName) {
                    // Store the entered name in localStorage
                    localStorage.setItem('userName', enteredName);
                    document.getElementById('welcomeMessage').textContent = `Hi ${enteredName}, Welcome To Website`;
                }
            } else {
                // If the userName is already stored, display it directly
                document.getElementById('welcomeMessage').textContent = `Hi ${userName}, Welcome To Website`;
            }
        }
    }

    // Form validation and submission (applies to all pages)
    const contactForm = document.getElementById('messageForm');
    if (contactForm) {  // Check if the form exists on the page
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
});

localStorage.removeItem('userName');
