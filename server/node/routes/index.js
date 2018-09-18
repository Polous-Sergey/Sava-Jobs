const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');
const ctrlProducts = require('../controllers/products');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// custom
router.get('/products', ctrlProducts.products);

module.exports = router;
