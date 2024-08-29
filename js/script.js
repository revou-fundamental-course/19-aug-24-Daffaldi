document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const renameButton = document.getElementById('renameButton');
    
    // Retrieve the stored name from localStorage
    const storedName = localStorage.getItem('userName');

    if (storedName) {
        // Use the stored name for the welcome message
        if (welcomeMessage) {
            welcomeMessage.textContent = `Hi ${storedName}, Welcome To Website`;
        }
    } else {
        // Prompt for the name if not stored
        const enteredName = prompt('Please enter your name:');
        if (enteredName) {
            localStorage.setItem('userName', enteredName);
            if (welcomeMessage) {
                welcomeMessage.textContent = `Hi ${enteredName}, Welcome To Website`;
            }
            // Reload the page to apply the changes
            window.location.reload();
        }
    }

    // Handle the rename button click
    if (renameButton) {
        renameButton.addEventListener('click', function() {
            const newName = prompt('Enter your new name:');
            if (newName) {
                localStorage.setItem('userName', newName);
                if (welcomeMessage) {
                    welcomeMessage.textContent = `Hi ${newName}, Welcome To Website`;
                }
            }git pull
        });
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