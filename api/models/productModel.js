const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		imgUrl: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		userId: {
			type: ObjectId,
			ref: "User",
		},
	},
	{ timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Product", productSchema);
