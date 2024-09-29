// const express = require('express');
// const router = express.Router();
// const ctrlLocations = require('../controllers/locations');
// const ctrlOthers = require('../controllers/others');
// /* Locations pages */
// router.get('/', ctrlLocations.homelist);
// router.get('/location', ctrlLocations.locationInfo);
// /* Other pages */
// router.get('/about', ctrlOthers.about);
// module.exports = router;

const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);

// Route with dynamic locationName parameter
router.get('/location/:name', ctrlLocations.locationInfo);

// Update this route to include the locationId for adding a review
router.get('/location/review/new', ctrlLocations.addReview);
router.post('/location/review', ctrlLocations.submitReview);

router.get('/location/appointment/new', ctrlLocations.addAppointment);

// Route to handle appointment submission
router.post('/location/appointment', ctrlLocations.submitAppointment); 

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
