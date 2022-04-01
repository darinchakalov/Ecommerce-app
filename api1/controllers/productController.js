const productModel = require("../models/productModel.js");

function createProduct(req, res, next) {
	const { _id: userId } = req.user;
	const { name, price, quantity, imgUrl, description } = req.body;
	productModel
		.create({ name, price, quantity, imgUrl, description, userId })
		.then((product) => {
			res.status(201).json(product);
		})
		.catch(next);
}

function getAllProducts(req, res, next) {
	const limit = Number(req.query.limit) || 0;
	productModel
		.find()
		.sort({ created_at: -1 })
		.limit(limit)
		// .pupulate("userId")
		.then((products) => res.json(products))
		.catch(next);
}

function getSingleProduct(req, res, next) {
	const { productId } = req.params;
	productModel
		.findById(productId)
		.then((product) => res.json(product))
		.catch(next);
}

module.exports = {
	createProduct,
	getAllProducts,
	getSingleProduct,
};
