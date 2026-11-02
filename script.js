
/* =================================
   KOMAL'S INTERACTIVE PORTFOLIO
   Week 3 - JavaScript
================================= */

// Select HTML elements
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formStatus = document.getElementById("formStatus");
const charCount = document.getElementById("charCount");
const backToTop = document.getElementById("backToTop");

// 1. Dark / Light Mode using Local Storage

function applyTheme(theme) {
    document.body.classList.toggle("light-mode", theme === "light");

    if (themeToggle) {
        themeToggle.textContent =
            theme === "light"
                ? "🌙 Dark Mode"
                : "☀️ Light Mode";
    }
}

function toggleTheme() {
    const isLight = document.body.classList.contains("light-mode");
    const newTheme = isLight ? "dark" : "light";

    applyTheme(newTheme);
    localStorage.setItem("portfolioTheme", newTheme);
}

// Load saved theme when page opens
const savedTheme = localStorage.getItem("portfolioTheme") || "dark";
applyTheme(savedTheme);

themeToggle.addEventListener("click", toggleTheme);


// 2. Contact Form Validation

function showMessage(message, color) {
    formStatus.textContent = message;
    formStatus.style.color = color;
}

function validateForm(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Name validation
    if (name.length < 2) {
        showMessage("Please enter a valid name.", "#ff7070");
        nameInput.focus();
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showMessage("Please enter a valid email address.", "#ff7070");
        emailInput.focus();
        return;
    }

    // Message validation
    if (message.length < 10) {
        showMessage("Message must contain at least 10 characters.", "#ff7070");
        messageInput.focus();
        return;
    }

    // Successful validation
    showMessage(
        "Form validated successfully! (Demo only — no message was sent.)",
        "#4ade80"
    );

    contactForm.reset();
    charCount.textContent = "0 characters";
}

contactForm.addEventListener("submit", validateForm);


// 3. Live Character Counter

function updateCharacterCount() {
    const count = messageInput.value.length;

    charCount.textContent = count + " characters";
}

messageInput.addEventListener("input", updateCharacterCount);


// 4. Back to Top Button

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

backToTop.addEventListener("click", scrollToTop);


// 5. Show / Hide Back to Top Button

function handleScroll() {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

window.addEventListener("scroll", handleScroll);

// Initial setup
handleScroll();

console.log("Komal's Portfolio JavaScript loaded successfully!");
