const router = require("express").Router();
const workout = require("../models/workout.js");

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    })

















}