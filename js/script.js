document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const enteredName = prompt('Please enter your name:');
    if (enteredName) {
        localStorage.setItem('userName', enteredName);
        (welcomeMessage) {
            welcomeMessage.textContent = `Hi ${enteredName}, Welcome To Website`;
        }
        window.location.reload();
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


