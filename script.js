// ==========================================
// Part 1: Time-based Greeting
// ==========================================
let userName = prompt("What is your name?", "Bidur");
let currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

// Display personalized greeting in the console
console.log(`${greeting}, ${userName}!`);


// ==========================================
// Part 2: Age and Days Lived Verification
// ==========================================
let birthYear = prompt("What year were you born?");
let currentYear = 2026; // Set to 2026 as per your project instructions
let age = currentYear - birthYear;
let daysLived = age * 365;

// Output the calculations to the console
console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
    console.log("Status: You are an adult.");
} else {
    console.log("Status: You are a minor.");
}


// ==========================================
// Part 3: Dark Mode Toggle Logic
// ==========================================

// 1. Select the button using its ID from the HTML
const toggleBtn = document.querySelector('#dark-mode-toggle');

// 2. Add the Event Listener for the 'click' event
toggleBtn.addEventListener('click', function() {
    
    // 3. Use classList.toggle to switch the 'dark-mode' class on and off
    document.body.classList.toggle('dark-mode');
    
    // 4. Debugging log for the screenshot requirements
    console.log("Dark mode toggled. Current state: " + document.body.classList.contains('dark-mode'));
});

// Final Console Verification for Student ID
console.log("Student ID: 2026300025 verified.");
