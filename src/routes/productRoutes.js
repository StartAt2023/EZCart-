const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// 获取所有商品（所有用户可访问）
router.get('/', productController.getProducts);
// 获取单个商品（所有用户可访问）
router.get('/:id', productController.getProductById);

// 以下操作仅限admin
router.post('/', auth, admin, productController.createProduct);
router.put('/:id', auth, admin, productController.updateProduct);
router.delete('/:id', auth, admin, productController.deleteProduct);

module.exports = router; 