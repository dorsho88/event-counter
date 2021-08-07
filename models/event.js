const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create event model instance
const EventSchema = new Schema({
    event_type: {
        type: String, // ENUM?
        required: [true, 'event_type is required'],
    },
    event_id: {
        type: String,
        required: [true, 'event_id is required']
    },
    event_name: {
        type: String,
        required: [false]
    }
}, { timestamps: true });

const Event = mongoose.model('event', EventSchema);
module.exports = Event;