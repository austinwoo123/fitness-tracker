# Fitness-tracker

## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [How to Start](#how-to-start)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

-----------------------
## Description
For this project, I created a workout tracker. This project requires you to create Mongo database with a Mongoose schema and handle routes with Express.

-----------------------
## Deployed Link
[Link to Deployed Site](https://pacific-beach-58149.herokuapp.com/)

## How to Start
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Open the index.html, script.js, and style.css file

## Code Snippets
```
router.get("/api/workouts", function (req, res) {
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json(err));
})


router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
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
    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })

});
```
This code shows all of the api routes that I created for this project. Each route is making a request to the "Workout" database and returning the data that is stored.

```
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
```
This code shows the workout schema blueprint. It is collecting information for each exercise. 


## Built With
- Express
- Javascript
- HTML/CSS
- Mongoose
- Morgan

-----------------------
## Licenses
MIT

-----------------------
## Authors
- Austin Woo


-----------------------
## Acknowledgments
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp

