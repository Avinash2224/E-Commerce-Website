const express = require('express');
const { Product } = require('../models/product.js');
const { Category } = require('../models/category.js');
const router = express.Router();

async function loadPLimit() {
    return (await import('p-limit')).default;
}

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret
});

// GET all products
router.get('/', async (req, res) => {
    try {
        const productList = await Product.find().populate('category');
        if (!productList) {
            return res.status(500).json({ success: false, message: 'No products found' });
        }
        res.status(200).json(productList);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// GET product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category');
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// POST - Create a new product
router.post('/create', async (req, res) => {
    try {
        const { name, description, brand, price, category, images, countInStock, rating, numReviews, isFeatured } = req.body;

        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(404).send("Invalid Category!");
        }

        if (!images || !Array.isArray(images) || images.length === 0) {
            return res.status(400).json({
                error: "Invalid or missing 'images' field. Must be an array of image URLs or base64 strings.",
                status: false
            });
        }

        const pLimit = await loadPLimit();
        const limit = pLimit(2);
        const uploadImages = images.map((img) =>
            limit(async () => {
                const uploaded = await cloudinary.uploader.upload(img);
                return uploaded.secure_url;
            })
        );

        const uploadedImageUrls = await Promise.all(uploadImages);

        const product = new Product({
            name,
            description,
            brand,
            price,
            category,
            images: uploadedImageUrls,
            countInStock,
            rating: rating || 0,
            numReviews: numReviews || 0,
            isFeatured: isFeatured || false,
            dateCreated: Date.now()
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);

    } catch (error) {
        console.error("Error in /products/create:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// PUT - Update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const productExists = await Product.findById(req.params.id);
        if (!productExists) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // If category is updated, validate it
        if (req.body.category) {
            const categoryExists = await Category.findById(req.body.category);
            if (!categoryExists) {
                return res.status(400).json({ success: false, message: 'Invalid category' });
            }
        }

        // If images are provided, re-upload to Cloudinary
        let uploadedImageUrls = productExists.images;
        if (req.body.images && Array.isArray(req.body.images) && req.body.images.length > 0) {
            const pLimit = await loadPLimit();
            const limit = pLimit(2);
            const uploadImages = req.body.images.map((img) =>
                limit(async () => {
                    const uploaded = await cloudinary.uploader.upload(img);
                    return uploaded.secure_url;
                })
            );
            uploadedImageUrls = await Promise.all(uploadImages);
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                images: uploadedImageUrls,
                dateCreated: Date.now()
            },
            { new: true }
        );

        res.status(200).json({ success: true, product: updatedProduct });

    } catch (error) {
        console.error("Error in PUT /:id", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// DELETE - Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
