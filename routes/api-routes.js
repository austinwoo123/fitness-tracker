
const express = require("express");
const router = express.Router();
const workout = require("../models/workout.js");



router.get("/api/workouts", function (req, res) {
    workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get("/api/workouts/range", (req, res) => {
    workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json(err));
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
});

router.post("/api/workouts", (req, res) => {
    workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })

});


module.exports = router;