const env = process.env.NODE_ENV || "development";

const config = {
	development: {
		port: process.env.PORT || 3000,
		dbURL: "mongodb+srv://realestateuser:realestatepass@cluster0.ozv6x.mongodb.net/Product-Catalog?retryWrites=true&w=majority",
		origin: ["http://localhost:5555", "http://localhost:4200"],
	},
	production: {
		port: process.env.PORT || 3000,
		dbURL: "mongodb+srv://realestateuser:realestatepass@cluster0.ozv6x.mongodb.net/Product-Catalog?retryWrites=true&w=majority",
		// dbURL: process.env.DB_URL_CREDENTIALS,
		origin: [],
	},
};

module.exports = config[env];
