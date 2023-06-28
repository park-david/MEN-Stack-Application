// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review')

const monitorSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    description: { type: String, required: true },
    screenSize: { type: Number, enum: [24, 27, 32, 34, 40], required: true },
    resolution: { type: String, enum: ['1920x1080', '2560x1440', '3440x1440', '3840x2160', '5120x2160'], required: true },
    refreshRate: { type: Number, enum: [60, 72, 75, 144, 165, 180, 240], required: true },
    responseTime: { type: String, enum: ['0.3ms', '0.5ms', '1ms', '4ms', '5ms'], required: true },
    panelType: { type: String, enum: ['IPS', 'VA', 'TN', 'OLED'], required: true },
    curved: { type: Boolean, default: false, required: true },
    category: { type: String, enum: ['Gaming', 'Office'], required: true },
    photo: { type: String, required: true },
    // reviews: [reviewSchema]
});


// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Monitor', monitorSchema);
