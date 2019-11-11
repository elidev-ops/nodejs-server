const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController');

router.get('/', (req, res) => res.send('API Rest em nodeJS teste!'));
router.get('/product', productController.index);
router.get('/product/:id', productController.show);
router.post('/product', productController.store);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.destroy);

module.exports = router;