const locations = [
  {
    name: 'FreshMart',
    address: '123 Greenway Ave, Hyderabad, Telangana 500001',
    rating: 4,
    facilities: ['Fresh Produce', 'Bakery', 'Dairy'],
    coords: { lat: 51.455041, lng: -0.9690884 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '7:00am', closing: '10:00pm', closed: false }
    ],
    reviews: [
      { author: 'Aisha Khan', rating: 5, timestamp: '2023-07-16', reviewText: 'Great selection of fresh fruits and vegetables!' },
      { author: 'Raj Patel', rating: 4, timestamp: '2023-06-16', reviewText: 'Nice store, but can get crowded during weekends.' }
    ],
    gmail: 'freshmart@example.com',
    phno: '9876543210'
  },
  {
    name: 'Daily Essentials Store',
    address: '45 Market St, Hyderabad, Telangana 500002',
    rating: 4,
    facilities: ['Grocery Staples', 'Snacks', 'Beverages'],
    coords: { lat: 51.456042, lng: -0.970088 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '6:00am', closing: '11:00pm', closed: false }
    ],
    reviews: [
      { author: 'Sonia Mehta', rating: 4, timestamp: '2023-07-20', reviewText: 'Convenient place for quick shopping!' },
      { author: 'Vikram Rao', rating: 3, timestamp: '2023-06-25', reviewText: 'Good variety, but prices can be higher than expected.' }
    ],
    gmail: 'dailyessentials@example.com',
    phno: '9123456780'
  },
  {
    name: 'Healthy Foods Market',
    address: '78 Organic Lane, Hyderabad, Telangana 500003',
    rating: 5,
    facilities: ['Organic Products', 'Health Foods', 'Vegan Options'],
    coords: { lat: 51.457042, lng: -0.971088 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '7:00am', closing: '9:00pm', closed: false }
    ],
    reviews: [
      { author: 'Suresh Gupta', rating: 5, timestamp: '2023-08-10', reviewText: 'Best place for organic food lovers!' },
      { author: 'Priya Singh', rating: 4, timestamp: '2023-08-15', reviewText: 'Quality products but a bit pricey.' }
    ],
    gmail: 'healthyfoods@example.com',
    phno: '8765432109'
  },
  {
    name: 'Local Grocery Stop',
    address: '200 City Center Rd, Hyderabad, Telangana 500004',
    rating: 3,
    facilities: ['General Groceries', 'Household Items', 'Personal Care'],
    coords: { lat: 51.458042, lng: -0.972088 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '8:00am', closing: '10:00pm', closed: false }
    ],
    reviews: [
      { author: 'Arjun Verma', rating: 3, timestamp: '2023-09-10', reviewText: 'Average store with decent options.' },
      { author: 'Neha Reddy', rating: 2, timestamp: '2023-09-12', reviewText: 'Limited variety and stock issues sometimes.' }
    ],
    gmail: 'localgrocery@example.com',
    phno: '7654321098'
  },
  {
    name: 'Veggie Delight',
    address: '34 Greenfield Blvd, Hyderabad, Telangana 500005',
    rating: 5,
    facilities: ['Vegetarian Products', 'Organic Produce', 'Local Goods'],
    coords: { lat: 51.459042, lng: -0.973088 },
    openingTimes: [
      { days: 'Monday - Saturday', opening: '7:00am', closing: '9:00pm', closed: false },
      { days: 'Sunday', opening: '8:00am', closing: '8:00pm', closed: false }
    ],
    reviews: [
      { author: 'Meera Sharma', rating: 5, timestamp: '2023-09-15', reviewText: 'Excellent variety of vegetarian options!' },
      { author: 'Nitin Kumar', rating: 4, timestamp: '2023-09-20', reviewText: 'Love the organic section and fresh local produce.' }
    ],
    gmail: 'veggiedelight@example.com',
    phno: '8765432100'
  },
  {
    name: 'SuperMart Express',
    address: '99 Quick Lane, Hyderabad, Telangana 500006',
    rating: 4,
    facilities: ['Fast Checkout', 'Delivery Service', 'Self-Service Kiosks'],
    coords: { lat: 51.460042, lng: -0.974088 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '24/7', closed: false }
    ],
    reviews: [
      { author: 'Rahul Desai', rating: 4, timestamp: '2023-10-01', reviewText: 'Great for late-night shopping and quick pickups.' },
      { author: 'Anjali Verma', rating: 5, timestamp: '2023-10-05', reviewText: 'Fast service and a good selection of products.' }
    ],
    gmail: 'supermartexpress@example.com',
    phno: '9998765432'
  }
];



// Home List Route
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Online Grocery Store',
    pageHeader: {
      title: 'Online Grocey Store',
      strapline: 'Hunt your grocery needs!'
    },
    sidebar: "Searching for a grocery store with great facilities? Our Grocery Locator helps you find the best spots for all your grocery needs...",
    locations: locations
  });
};

// Location Info Route
const locationInfo = (req, res) => {
  const locationName = req.params.name.replace(/-/g, ' ');
  const location = locations.find(loc => loc.name.toLowerCase() === locationName.toLowerCase());

  if (!location) {
    return res.status(404).send('Location not found');
  }

  res.render('location-info', {
    title: location.name,
    pageHeader: { title: location.name },
    sidebar: {
      context: `is part of Onile Groceries because it offers a variety of products including grocery essentials.`,
      callToAction: `To Contact Us:\nGmail: ${location.gmail}\nPhone: ${location.phno}`
    },
    location: location
  });
};




// Add Review Page
const addReview = (req, res) => {
  res.render('location-review-form.jade', {
    title: 'Review on HMS',
    pageHeader: { title: 'Add my Review' }
  });
};
// Handle Review Submission
const submitReview = (req, res) => {
  // You can log the review details for now (or store them in a database when ready)
  console.log('Review submitted:', req.body);
  
  // Redirect to the home page after submission
  res.redirect('/');
};



// Add Appointment Page
const addAppointment = (req, res) => {
  res.render('location-appointment-form.jade', {
    title: 'Book an Appointment',
    pageHeader: { title: 'Book an Appointment' }
  });
};

// Handle Appointment Submission
const submitAppointment = (req, res) => {
  // Log appointment details for now (or store them in a database when ready)
  console.log('Appointment booked:', req.body);
  
  // Redirect to the home page after submission
  res.redirect('/');
};

// Export your functions
module.exports = {
  homelist,
  locationInfo,
  addReview,
  submitReview,
  addAppointment, // Add this line
  submitAppointment // Add this line
};
