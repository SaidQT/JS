const Joke = require('../models/joke.model');

const ids =[]

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.json({ jokes: allDaJokes })
        })
        .catch((err) => {
            res.json(err)
        });
}
 
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke })
            ids.push(oneSingleJoke[_id])
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ Joke: updatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });}
 
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });}
        
function generateRandom(){
    const length = ids.length;
    if (length === 0) {
        return -1; 
    }
    return Math.floor(Math.random() * (length-1));
    }

    module.exports.generateRandomJoke = (res) => {
        const randomNum = generateRandom();
        if (randomNum === -1) {
            // Handle the case when there are no jokes
            res.status(404).json({ error: "No jokes available" });
            return;
        }
    
        const id = ids[randomNum];
    
        // Validate and convert id to ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ error: "Invalid joke ID" });
            return;
        }
    
        Joke.findOne({ _id: mongoose.Types.ObjectId(id) })
            .then(oneSingleJoke => {
                if (!oneSingleJoke) {
                    res.status(404).json({ error: "Joke not found" });
                } else {
                    res.json({ joke: oneSingleJoke });
                }
            })
            .catch(err => {
                res.status(500).json({ error: "Internal server error", details: err });
            });
    };
