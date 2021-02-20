const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter the type of your exercise!"

            },
            name: {
                type: String,
                required: "Please enter the name of your exercise!"
            },
            duration: {
                type: Number,
                required: "Please enter the duration of your exercise!"
            },
            weight: {
                type: Number,

            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]

});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;