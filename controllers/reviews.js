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
// index route
router.get('/', (req, res) => {
    db.Monitor.find({}, { reviews: true, _id: false })
        .then(monitors => {
            const flatList = []
            for (let monitor of monitors) { flatList.push(...monitor.reviews) }
            res.render('reviews/review-index', { review: flatList })
        })
});

// new route
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

// create route
router.post('/create/:monitorId', (req, res) => {
    db.Monitor.findByIdAndUpdate(
        req.params.monitorId,
        { $push: { reviews: req.body } },
        { new: true }
    )
        .then(() => res.redirect('/monitors/' + req.params.monitorId))
});

// show route
router.get('/:id', (req, res) => {
    db.Monitor.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
        .then(product => {
            res.render('reviews/review-details', { review: product.reviews[0] })
        })
});

// destroy route
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