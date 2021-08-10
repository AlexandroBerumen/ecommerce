import express from "express";
import products from "./data/products.js";

const app = express();

app.get("/", (req, res) => {
	res.send("API is working");
});
app.get("/api/products", (req, res) => {
	res.send(products);
});
app.get("/api/products/:id", (req, res) => {
	const product = products.find(p => p._id === req.params.id);
	res.send(product);
});

app.listen(5000, console.log("port running on port 5000"));