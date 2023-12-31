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
// index route with conditional to show monitors by category
router.get('/', function (req, res) {
    let filter = {};
    const category = req.query.category;

    if (category) {
        filter = { category: category };
    }
    db.Monitor.find(filter)
        .then(monitors => res.render('monitors/monitor-index', { monitors: monitors, category: category }))
})

// new route
router.get('/new', (req, res) => {
    res.render('monitors/new-form')
})

// show route
router.get('/:id', function (req, res) {
    db.Monitor.findById(req.params.id)
        .then(monitor => {
            if (monitor) {
                res.render('monitors/monitor-details', { monitor: monitor })
            } else {
                res.send('404 Error: Page Not Found')
            }
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})

// create route
router.post('/', (req, res) => {
    db.Monitor.create(req.body)
    .then(monitor => res.redirect('/monitors/' + monitor._id))
})

// edit route
router.get('/:id/edit', (req, res) => {
    db.Monitor.findById(req.params.id)
    .then(monitor => res.render('monitors/edit-form', { monitor: monitor }))
})

// update route
router.put('/:id', (req, res) => {
    db.Monitor.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(monitor => res.redirect('/monitors/' + monitor._id))
})

// destroy/delete route
router.delete('/:id', (req, res) => {
    db.Monitor.findByIdAndRemove(req.params.id)
        .then(() => res.redirect('/monitors'))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router