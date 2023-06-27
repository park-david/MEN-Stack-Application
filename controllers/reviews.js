/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outside of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// index, all reviews
router.get('/', (req, res) => {
    db.Monitor.find({}, { reviews: true, _id: false })
        .then(monitors => {
            const flatList = []
            for (let monitor of monitors) { flatList.push(...monitor.reviews) }
            res.render('reviews/review-index', { revs: flatList })
        })
});

// New Route: GET localhost:3000/reviews/new/:monitorId
router.get('/new/:monitorId', (req, res) => {
    db.Monitor.findById(req.params.monitorId)
        .then(monitor => {
            if (monitor) {
                res.render('reviews/new-form.ejs', { monitor: monitor })
            } else {
                res.render('404')
            }
        })
})

// Create Route: POST localhost:3000/reviews/
router.post('/create/:monitorId', (req, res) => {
    db.Monitor.findByIdAndUpdate(
        req.params.monitorId,
        { $push: { reviews: req.body } },
        { new: true }
    )
        .then(() => res.redirect('/monitors/' + req.params.monitorId))
});

// Show Route: GET localhost:3000/reviews/:id
router.get('/:id', (req, res) => {
    db.Monitor.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
        .then(product => {
            // format query results to appear in one object, 
            // rather than an object containing an array of one object
            res.render('reviews/review-details', { rev: product.reviews[0] })
        })
});

// Destroy Route: DELETE localhost:3000/reviews/:id
router.delete('/:id', (req, res) => {
    db.Monitor.findOneAndUpdate(
        { 'reviews._id': req.params.id },
        { $pull: { reviews: { _id: req.params.id } } },
        { new: true }
    )
        .then(product => res.redirect('/monitors/' + product._id))
});


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router