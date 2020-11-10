const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let Course = new Schema({
    CId: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    fee: { type: Number, required: true },
    duration: { type: Number, required: true },
    desc: { type: String, required: true },
}, {
    'collection': "course"
});

Course.plugin(uniqueValidator, {message: "is already exists"});

module.exports = mongoose.model("Course", Course);