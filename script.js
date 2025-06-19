// script.js

// Utility function to create a delay using Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function that handles the form submission
async function handleSubmit() {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;
  const outputDiv = document.getElementById('output');

  // Clear previous output
  outputDiv.textContent = '';

  // Parse delay as a number (ms)
  const delay = parseInt(delayInput);

  // Input validation
  if (!textInput || isNaN(delay) || delay < 0) {
    outputDiv.textContent = 'Please enter valid text and a non-negative delay.';
    return;
  }

  // Wait for the specified delay
  await wait(delay);

  // Display the message
  outputDiv.textContent = textInput;
}

// Attach event listener to the button
document.getElementById('btn').addEventListener('click', handleSubmit);

