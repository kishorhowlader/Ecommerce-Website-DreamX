// Import the Firebase Authentication SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPpPayLo4Tr70GbrjUI8gLk5HSAwU1m2M",
    authDomain: "dreamx-bd.firebaseapp.com",
    projectId: "dreamx-bd",
    storageBucket: "dreamx-bd.firebasestorage.app",
    messagingSenderId: "215116387397",
    appId: "1:215116387397:web:a5a1aafba260d3eaecff2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Signup Form Submission
document.getElementById("signupForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    const feedback = document.getElementById("signup-feedback") || document.createElement("div");
    feedback.id = "signup-feedback";
    feedback.style.marginTop = "10px";
    document.getElementById("signupForm").appendChild(feedback);
    feedback.innerHTML = ""; // Clear previous messages

    // Check if passwords match
    if (password !== confirmPassword) {
        feedback.innerHTML = "<p style='color: red;'>Passwords do not match. Please try again.</p>";
        return;
    }

    try {
        // Create a new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Signup successful:", user);
        feedback.innerHTML = `<p style='color: green;'>Welcome ${username}! Your account has been created successfully.</p>`;

        // Clear form fields
        document.getElementById("signupForm").reset();

        // Optionally switch to login form
        setTimeout(() => showLoginForm(), 3000);
    } catch (error) {
        console.error("Signup error:", error.message);
        feedback.innerHTML = `<p style='color: red;'>${error.message}</p>`;
    }
});

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    const feedback = document.getElementById("login-feedback") || document.createElement("div");
    feedback.id = "login-feedback";
    feedback.style.marginTop = "10px";
    document.getElementById("loginForm").appendChild(feedback);
    feedback.innerHTML = ""; // Clear previous messages

    try {
        // Sign in the user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Login successful:", user);
        feedback.innerHTML = `<p style='color: green;'>Login successful! Welcome back.</p>`;

        // Clear form fields
        document.getElementById("loginForm").reset();

        // Hide the login form after successful login
        setTimeout(() => {
            document.getElementById("formContainer").style.display = "none";
        }, 2000);

        // Redirect to another page or perform additional actions
    } catch (error) {
        console.error("Login error:", error.message);
        feedback.innerHTML = `<p style='color: red;'>Incorrect email or password. Please try again.</p>`;
    }
});

// Helper functions to toggle forms
function showSignupForm() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signup-feedback")?.remove();
}

function showLoginForm() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("login-feedback")?.remove();
}
