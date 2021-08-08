const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create event model instance
const EventSchema = new Schema({
    event_type: {
        type: String, // ENUM?
        required: [true, 'event_type is required'],
    },
    event_id: {
        type: String, // add auto uuid? make unique?
        required: [true, 'event_id is required']
    },
    event_name: {
        type: String,
        required: [false]
    }
}, { timestamps: true }); // timestamps for filtering 

const Event = mongoose.model('event', EventSchema);
module.exports = Event;