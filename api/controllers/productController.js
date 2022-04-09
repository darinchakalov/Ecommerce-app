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

function getMyProducts(req, res, next) {
	const { _id: userId } = req.user;

	productModel
		.find({ userId: userId })
		.then((products) => res.json(products))
		.catch(next);
}

function getProductList(req, res, next) {
	const startIndex = +req.query.startIndex || 0;
	const limit = +req.query.limit || Number.MAX_SAFE_INTEGER;
	Promise.all([productModel.find().skip(startIndex).limit(limit), productModel.find().countDocuments()])
		.then(([products, totalResults]) => res.json({ products, totalResults }))
		.catch(next);
}

function deleteProduct(req, res, next) {
	const { productId } = req.params;
	productModel
		.findByIdAndDelete({ _id: productId })
		.then((deleted) => {
			res.status(200).json(deleted);
		})
		.catch(next);
}

function editProduct(req, res, next) {
	const product = req.body;
	const { productId } = req.params;
	productModel
		.findByIdAndUpdate(productId, product)
		.then((updated) => {
			if (updated) {
				res.status(200).json(updated);
			} else {
				res.status(401).json({ message: `Not allowed!` });
			}
		})
		.catch(next);
}

function finishingOrder(req, res, next) {
	let products = req.body;
	products.forEach((element) => {
		let product = element.product;
		let count = element.productCount;
		product.quantity -= count;
		productModel
			.findByIdAndUpdate(product._id, product)
			.then((updated) => {
				if (updated) {
					res.status(200).json(updated);
				} else {
					res.status(401).json({ message: `Not allowed!` });
				}
			})
			.catch(next);
	});
}

module.exports = {
	createProduct,
	getAllProducts,
	getSingleProduct,
	getMyProducts,
	deleteProduct,
	editProduct,
	finishingOrder,
	getProductList,
};
