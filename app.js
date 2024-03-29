var express = require('express') // call express
var app = express() // define our app using express
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/on-the-snow-2')	// connects to db on-the-snow-2
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/on-the-snow-2')

var Resort = require('./models/resort')

// configure app to use bodyParser() -> this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
var port = process.env.PORT || 3000 // set our port

// ROUTES FOR OUR API
var router = express.Router() // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening')
	next() // make sure we go to the next routes and don't stop here
})

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	// res.json({ message: 'hooray! welcome to our api!' });
	res.sendFile()
})

// more routes for our API will happen here
router.route('/resort')

// get all the resorts (accessed at GET http://localhost:8080/api/resorts)
.get(function(req, res) {
	Resort.find(function(err, resort) {
		if (err) res.send(err)
		res.json(resort)
	})
})

// routes that end in /resort/_id
router.route('/resort/:id')
	.get(function(req, res) {
		console.log('REQ FOR', req.params.id)
		Resort.findOne({ id: req.params.id }, function(err, resort) {
			if (err) res.send(err)
			res.json(resort)
		})
	})

// REGISTER OUR ROUTES:all of our routes will be prefixed with /api 
app.use('/api', router)

// START THE SERVER
app.listen(port)
console.log('Magic happens on port ' + port)
