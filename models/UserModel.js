let mongoose = require("mongoose");

/**
 * UserSchema
 * 
 * Schema for storing user details
 * 
 * @property username: unique username of the user
 * @property password: password of the user
 */
let UserSchema = new mongoose.Schema ({
    username: {type: String, required: true, maxLength: 20},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);