// Retrieve DOM elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingUserContainer = document.getElementById("existingUserContainer");

// Check if there are saved credentials in local storage
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    const existingButton = document.createElement("button");
    existingButton.id = "existing";
    existingButton.innerText = "Login as existing user";
    existingButton.addEventListener("click", () => {
      alert(`Logged in as ${savedUsername}.`);
    });
    existingUserContainer.appendChild(existingButton);
  }
});

// Handle form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const rememberMe = checkbox.checked;

  if (!username || !password) {
    alert("Username and password cannot be empty.");
    return;
  }

  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}.`);

  // Show existing user button if 'Remember me' was checked
  if (rememberMe) {
    if (!document.getElementById("existing")) {
      const existingButton = document.createElement("button");
      existingButton.id = "existing";
      existingButton.innerText = "Login as existing user";
      existingButton.addEventListener("click", () => {
        alert(`Logged in as ${username}.`);
      });
      existingUserContainer.appendChild(existingButton);
    }
  } else {
    const existingButton = document.getElementById("existing");
    if (existingButton) {
      existingUserContainer.removeChild(existingButton);
    }
  }

  // Clear form fields after submission
  loginForm.reset();
});
