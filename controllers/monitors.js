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
// index, show all monitors
router.get('/', function (req, res) {
    db.Monitor.find({})
        .then(monitors => res.render('monitors/monitor-index', { monitors: monitors }))
})

// new form, add new monitor
router.get('/new', (req, res) => {
    res.render('monitors/new-form')
})

// show monitor details
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

// receives request from new route, creates new document with data, redirect to show
router.post('/', (req, res) => {
    db.Monitor.create(req.body)
    .then(monitor => res.redirect('/monitors/' + monitor._id))
})

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router