// script.js

const header = document.getElementById('main-header');

// Function to add dynamic content to the header
function addDynamicContent() {
  // Get the data you want to display in the header
  // This could be from an API, a database, or hardcoded
  const data = {
    title: 'Welcome to our Dynamic Website!',
    message: 'This is a message that can change dynamically.'
  }

  // Create elements to display the data
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.textContent = data.title;
  p.textContent = data.message;

  // Append the elements to the header
  header.appendChild(h1);
  header.appendChild(p);
}

// Call the function to add dynamic content
addDynamicContent();
