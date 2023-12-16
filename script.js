// Sample data (placeholders)
const donations = [
    {
      name: "Restaurant A",
      category: "Prepared Meals",
      quantity: "10 servings",
      location: "123 Main Street"
    },
    {
      name: "Grocery Store B",
      category: "Fresh Produce",
      quantity: "20 lbs of fruits and vegetables",
      location: "456 Oak Avenue"
    },
    // More sample donation objects...
  ];
  
  // Function to simulate the count-up animation for meals donated
function countUpAnimation() {
    let mealsDonated = 0;
    const counterElement = document.querySelector('.counter');
    const animationDuration = 3000; // Animation duration in milliseconds
    const interval = 50; // Interval for increasing the counter
  
    const iterations = animationDuration / interval;
    const increment = Math.ceil(2000 / iterations); // Simulated meals donated (for animation purposes)
  
    const timer = setInterval(() => {
      mealsDonated += increment;
      counterElement.textContent = mealsDonated;
  
      if (mealsDonated >= 2000) {
        clearInterval(timer);
      }
    }, interval);
  }
  
  // Call count-up animation function when the page loads
  window.onload = function () {
    countUpAnimation();
  };
  
  // Function to display donations in the Donors section
  function displayDonations() {
    const donorsSection = document.getElementById('donors');
  
    donations.forEach(donation => {
      const donationCard = document.createElement('div');
      donationCard.classList.add('donation-card');
  
      donationCard.innerHTML = `
        <h3>${donation.name} Donation</h3>
        <p>Category: ${donation.category}</p>
        <p>Quantity: ${donation.quantity}</p>
        <p>Location: ${donation.location}</p>
      `;
  
      donorsSection.appendChild(donationCard);
    });
  }
  
  // Function to handle search for nearby donations in the Recipients section
  function searchDonations(location) {
    const recipientsSection = document.getElementById('recipients');
    const donationResults = recipientsSection.querySelector('.donation-results');
    
    // Clear previous search results
    donationResults.innerHTML = '';
  
    // Simulating search results based on location
    const nearbyDonations = donations.filter(donation =>
      donation.location.toLowerCase().includes(location.toLowerCase())
    );
  
    nearbyDonations.forEach(donation => {
      const donationCard = document.createElement('div');
      donationCard.classList.add('donation-card');
  
      donationCard.innerHTML = `
        <h3>${donation.name} Donation</h3>
        <p>Category: ${donation.category}</p>
        <p>Quantity: ${donation.quantity}</p>
        <p>Location: ${donation.location}</p>
      `;
  
      donationResults.appendChild(donationCard);
    });
  }
  
  // Event listeners or additional functionalities could be added for user interactions.
  // For instance, handling form submissions, buttons clicks, etc.
  
  // Display donations on page load (for prototype demonstration)
  displayDonations();
  