const Veggie = require('../models/Veggie.js')

const createVeggie = async (req, res) =>{
    try{
        let newVeggie = await Veggie.create(req.body)
        res.json(newVeggie)
    }catch(err){
        console.log(err)
        res.status(500).send("couldn't create veggie")
    }
}

const getVeggie = async (req, res) =>{
    try{
        let responseFromDatabase = await Veggie.find()
        res.json(responseFromDatabase);
    }catch(err){
        console.log(err)
        res.status(500).send("couldn't pull from veggie database")
    }
}

const updateVeggie = async (req, res) =>{
    try{
        let foundVeggie = await Veggie.findByIdAndUpdate(req.params.veggieID, req.body, {new: true})
        res.json(foundVeggie)
    }catch(err){
        console.log(err)
        res.status(500).send("couldn't find veggie")
    }
}

const deleteVeggie = async (req, res) =>{
    try{
        let deletedVeggie = await Veggie.find({name: req.params.veggieName})
        let deleteStatus = await Veggie.deleteMany({name: req.params.veggieName})
        res.send(`deleted all ${deletedVeggie.name} from database`)
    }catch(err){
        console.log(err)
        res.status(500).send("couldn't find veggie")
    }
}
module.exports = {
    createVeggie,
    getVeggie,
    updateVeggie,
    deleteVeggie
}