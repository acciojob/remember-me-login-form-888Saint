// Retrieve DOM elements
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingButton = document.getElementById("existing");

// Check if there are saved credentials in local storage
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingButton.style.display = "block";
    existingButton.addEventListener("click", () => {
      alert(`Logged in as ${savedUsername}`);
    });
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
    existingButton.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingButton.style.display = "none";
  }

  alert(`Logged in as ${username}`);

  // Clear form fields after submission
  loginForm.reset();
});
