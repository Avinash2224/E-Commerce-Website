const { Category } = require('../models/category');
const express = require('express');
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

// GET all categories
router.get('/', async (req, res) => {
    try {
        const categoryList = await Category.find();
        if (!categoryList) {
            return res.status(500).json({ success: false, message: "No categories found." });
        }
        res.status(200).json(categoryList);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "The category with the given ID was not found." });
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: "Invalid ID or server error.", error: err.message });
    }
});

// POST - Create a new category
router.post('/create', async (req, res) => {
    try {
        const pLimit = await loadPLimit();
        const limit = pLimit(2);

        // Validate that images is an array
        if (!req.body.images || !Array.isArray(req.body.images) || req.body.images.length === 0) {
            return res.status(400).json({
                error: "Invalid or missing 'images' field. Must be an array of image URLs.",
                status: false
            });
        }

        // Upload images to Cloudinary
        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);
        const imgUrls = uploadStatus.map((image) => image.secure_url);

        if (!imgUrls.length) {
            return res.status(500).json({
                error: "Image upload failed",
                status: false
            });
        }

        // Create new category
        const category = new Category({
            name: req.body.name,
            images: imgUrls,
            color: req.body.color,
        });

        const savedCategory = await category.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        console.error("Error in /create:", err);
        res.status(500).json({
            error: err.message,
            status: false
        });
    }
});

// DELETE - Remove a category by ID
router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "The category with the given ID was not found." });
        }
        res.status(200).json({
            success: true,
            message: "The category has been deleted."
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error deleting category.",
            error: err.message
        });
    }
});

// PUT - Update a category by ID
router.put('/:id', async (req, res) => {
    try {
        // Validate that images is an array if provided
        if (req.body.images && !Array.isArray(req.body.images)) {
            return res.status(400).json({
                success: false,
                message: "Images field must be an array."
            });
        }

        // Find and update the category
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                images: req.body.images || [], // Default to empty array if missing
                color: req.body.color
            },
            { new: true } // Return updated category
        );

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "The category with the given ID was not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Category updated successfully.",
            updatedCategory: category
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server error or invalid ID.",
            error: err.message
        });
    }
});

module.exports = router;
