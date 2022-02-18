let mongoose = require("mongoose");

let CharacterSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    element: {type: String, required: true},
    specialtyMaterial: {type: String, required: true},
    bossMaterial: {type: String, required: true},
    enemyMaterial: {type: String, required: true}
});

module.exports = mongoose.model('Character', CharacterSchema);