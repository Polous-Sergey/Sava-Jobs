const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const multer = require('multer');
const upload = multer({dest: 'src/assets/uploads/'});
const auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');
const ctrlProducts = require('../controllers/products');
const ctrlCategory = require('../controllers/category');
const ctrlImage = require('../controllers/image');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// product
router.get('/products', ctrlProducts.productGet);
router.post('/products', ctrlProducts.productPost);
router.put('/products', ctrlProducts.productPut);
router.delete('/products', ctrlProducts.productDelete);

// category
router.get('/category', ctrlCategory.categoryGet);
router.post('/category', ctrlCategory.categoryPost);
router.put('/category', ctrlCategory.categoryPut);
router.delete('/category', ctrlCategory.categoryDelete);

// image
router.get('/image', ctrlImage.imageGet);
router.post('/image', upload.single('test'), ctrlImage.imagePost);


module.exports = router;
