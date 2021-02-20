const express = require("express");
const router = express.Router();
const workout = require("../models/workout.js");

module.exports = function (app) {

    router.get("/api/workouts", function (req, res) {
        workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    })


    router.put("/api/workouts/:id", ({ body, params }, res) => {
        workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true }
        )
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    })

    router.post("/api/workouts", (req, res) => {

    })

















}