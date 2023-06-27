// Require the Mongoose package
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    review: { type: String, required: true }
});


// Export the schema as a Monogoose model. 
module.exports = reviewSchema;