javascript
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    // Send registration request
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Send login request
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
});

// Function to fetch available motorcycles
function fetchMotorcycles() {
    fetch('/motorcycles')
        .then(response => response.json())
        .then(data => {
            const motorcycleList = document.getElementById('motorcycle-list');
            motorcycleList.innerHTML = ''; // Clear existing list
            data.forEach(motorcycle => {
                const li = document.createElement('li');
                li.innerText = motorcycle.name; // Assuming motorcycle object has a 'name' property
                motorcycleList.appendChild(li);
            });
        });
}

// Call the function to fetch motorcycles when the page loads
document.addEventListener('DOMContentLoaded', fetchMotorcycles);
