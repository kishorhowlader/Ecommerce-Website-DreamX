// Function to toggle the sliding form visibility
function toggleForm() {
  const formContainer = document.getElementById('formContainer');
  formContainer.classList.toggle('active');
}

// Function to show the Signup form and hide the Login form
function showSignupForm() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const formTitle = document.getElementById('formTitle');
  const formSubtitle = document.getElementById('formSubtitle');

  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
  formTitle.textContent = 'Sign Up';
  formSubtitle.textContent = 'Create your account';
}

// Function to show the Login form and hide the Signup form
function showLoginForm() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const formTitle = document.getElementById('formTitle');
  const formSubtitle = document.getElementById('formSubtitle');

  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
  formTitle.textContent = 'Welcome!';
  formSubtitle.textContent = 'Please Login or Sign Up';
}
