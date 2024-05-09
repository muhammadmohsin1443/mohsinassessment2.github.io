$(document).ready(function() {
    $('.nav-toggle').click(function() { // When the navigation toggle is clicked
      $('.nav-menu').toggleClass('show'); // Toggle the 'show' class on the navigation menu
    });
  
    // Close the navigation menu when clicking outside
    $(document).click(function(event) { // When clicking anywhere on the document
      var $navMenu = $('.nav-menu'); // Cache the navigation menu
      if (!$(event.target).closest('.nav-toggle, .nav-menu').length && $navMenu.hasClass('show')) { // If the click is not on the navigation toggle or the navigation menu and the menu is currently shown
        $navMenu.removeClass('show'); // Remove the 'show' class from the navigation menu
      }
    });
  });
  
  
  
  // Countdown Timer for Time Spent on the Website
  let startTime = new Date().getTime(); // Get the current time when the page loads
  
  const countdownTimer = document.createElement('div'); // Create a new div element for the countdown timer
  countdownTimer.classList.add('countdown-timer'); // Add a class to the countdown timer div
  document.body.appendChild(countdownTimer); // Append the countdown timer div to the body of the document
  
  function updateCountdownTimer() { // Function to update the countdown timer
  const currentTime = new Date().getTime(); // Get the current time
  const timeDiff = currentTime - startTime; // Calculate the time difference since the page loaded
  
  const seconds = Math.floor((timeDiff / 1000) % 60); // Calculate the remaining seconds
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60); // Calculate the remaining minutes
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24); // Calculate the remaining hours
  
  countdownTimer.textContent = `Time spent on the website: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // Update the countdown timer text content with the remaining time
  }
  
  setInterval(updateCountdownTimer, 1000); // Update the countdown timer every second
  
  
  
  // Smooth Scrolling
  const links = document.querySelectorAll('nav a[href^="#"]'); // Select all anchor links in the navigation menu with href starting with #
  
  links.forEach(link => { // Loop through each selected link
  link.addEventListener('click', e => { // Add a click event listener to each link
    e.preventDefault(); // Prevent the default behavior of the link
    const target = document.querySelector(e.currentTarget.getAttribute('href')); // Get the target element based on the href attribute of the clicked link
    target.scrollIntoView({ // Scroll to the target element
      behavior: 'smooth' // Use smooth scrolling behavior
    });
  });
  });
  