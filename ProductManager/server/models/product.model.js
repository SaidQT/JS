const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 character"]
    },
    price: { type: Number, required:[true, "Price is required"], min:[1,"Price must be at least one dollar"] },
    description: { type: String,
        required: [true, "Description is required"],
        minLength: [3, "Description must be at least 3 character"]
     }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
