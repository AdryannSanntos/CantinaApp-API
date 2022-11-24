"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const createCategory_1 = require("./app/useCases/categories/createCategory");
const listCategories_1 = require("./app/useCases/categories/listCategories");
const createProducts_1 = require("./app/useCases/products/createProducts");
const listProducts_1 = require("./app/useCases/products/listProducts");
const listProductsByCategories_1 = require("./app/useCases/categories/listProductsByCategories");
const listOrders_1 = require("./app/useCases/order/listOrders");
const createOrder_1 = require("./app/useCases/order/createOrder");
const changeOrderStatus_1 = require("./app/useCases/order/changeOrderStatus");
const cancelOrder_1 = require("./app/useCases/order/cancelOrder");
const deleteProducts_1 = require("./app/useCases/products/deleteProducts");
exports.router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(res, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});
// List categories
exports.router.get('/categories', listCategories_1.listCategories);
// Create category
exports.router.post('/categories', createCategory_1.createCategory);
// List products
exports.router.get('/products', listProducts_1.listProducts);
// Create product
exports.router.post('/products', upload.single('image'), createProducts_1.createProducts);
// Delete product
exports.router.delete('/products/:productId', deleteProducts_1.cancelProducts);
// Get products by category
exports.router.get('/categories/:categoryId/products', listProductsByCategories_1.listProductsByCategories);
// List order
exports.router.get('/orders', listOrders_1.listOrders);
// Create order
exports.router.post('/orders', createOrder_1.createOrder);
// Change order status
exports.router.patch('/orders/:orderId', changeOrderStatus_1.changeOrderStatus);
// Delete/cancel order
exports.router.delete('/orders/:orderId', cancelOrder_1.cancelOrder);
