const mongoose = require('mongoose')

const veggieSchema = new mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        eatable: Boolean
    },
    {timestamps: true}
)

const Veggie = mongoose.model('Veggie', veggieSchema)

module.exports = Veggie