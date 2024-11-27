let currentSection = 0;
const formSections = document.querySelectorAll('.form-section');
const progressBar = document.getElementById('progress');

// Show the first section on load
document.getElementById('contactInfoSection').classList.add('active');
updateProgressBar();

// Slider for Desired Monthly Payment Range
const monthlyPaymentRange = document.getElementById('monthlyPaymentRange');
const rangeValue = document.getElementById('rangeValue');
const downPayment = document.getElementById('downPayment');

// Update the displayed value of the slider as it moves and set the Down Payment Amount
monthlyPaymentRange.addEventListener('input', function() {
    const sliderValue = monthlyPaymentRange.value;
    rangeValue.textContent = sliderValue;  // Update the value displayed next to the slider
    downPayment.value = sliderValue;  // Set the Down Payment input field value to the slider's value
});

function nextSection(nextId) {
    // Hide current section
    formSections[currentSection].classList.remove('active');

    // Move to next section
    currentSection++;
    document.getElementById(nextId).classList.add('active');
    updateProgressBar();
}

function updateProgressBar() {
    // Calculate percentage based on current section
    const totalSections = formSections.length;
    const progress = (currentSection / totalSections) * 100;

    // Update progress bar width
    progressBar.style.width = progress + '%';
}
