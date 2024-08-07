const mongoose = require('mongoose');
 

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [5, "Setup must be at least five characters"],
        required:[true, "Setup is required"]
    },
    punchline: {
        type: String, 
        minlength: [5, "Punchline must be at least five characters"],
        required:[true, "Setup is required"]
    },
    __v: { 
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
