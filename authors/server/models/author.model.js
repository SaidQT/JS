const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required"],
        minLength: [3, "Author name must be at least three character"]
    },
}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);
