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
})
// get api /
router.get('/', async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        return res.status(500).json({ success: false });
    }
    res.send(categoryList);
});

// get by id 
router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return res.status(500).json({ message : 'The category with the given ID was not found.' });
    }
    res.send(category);
});

// post api
router.post('/create', async (req, res) => {
    const pLimit = await loadPLimit();
    const limit = pLimit(2);
    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        });
    });

    const uploadStatus = await Promise.all(imagesToUpload);
    const imgurl = uploadStatus.map((image) => {
        return image.secure_url;
    });
    if (!uploadStatus){
        return res.status(500).json({
            error: 'Image cant upload', 
            status : CSSFontFeatureValuesRule
        })
    }

    let category = new Category({
        name: req.body.name,
        images: imgurl,
        color: req.body.color,
    });

    if (!category) {
        req.status(500).json({
            error : err,
            status : false
        })
   }
   category = await category.save();
   res.status(201).json(category);
});

router.delete('/:id', async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
        return res.status(500).json({ message : 'The category with the given ID was not found.' });
    }
    res.status(200).json({
        success: true,
        message: 'The category has been deleted.'
    })
});

// put api
router.put('/:id', async (req, res) => {
    try {
        // Find the category by ID and update it
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                images: req.body.images, // Ensure it's an array
                color: req.body.color
            },
            { new: true } // Returns the updated category
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
