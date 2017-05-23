const express = require('express') // always leave express at the top
const request = require('request')
const app = express()
const port = 3000 
const parser = require('json-parser')
const mongoose = require('mongoose')
const Resort = require('./models/resort')

// mongoose.connect('mongodb://localhost/on-the-snow-2') // connects to db on-the-snow-2
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/on-the-snow-2')

let db = mongoose.connection
var token = '?token=a5bae8eea465aae8f096ad0b775121a6702a31e6eb2686d8'
let handler
db.once('open', function() {
	console.log('Connection to DB made!') // tests if connection has been made to db
		
	Resort.find({}, function(err, documents) {
		for (let resort of documents) {
			request('http://clientservice.onthesnow.com/externalservice/resort/' + resort.id + '/forecast' + token + '&language=en&country=US', function(error, response, body) {
				if (!error && response.statusCode === 200) {
					var object = parser.parse(body)
					Resort.update({id: resort.id}, {resortTemp: object.tempTop}, function(err) {
						if(err) {
							console.log('Error: ' + err)
						}
						console.log('updated at ' + Date.now())
					})
				}
			})
		}
	})
// the above will run everything so make sure you don't have too much data above 
// DONT NEED TIME OUT!! 
	handler = setInterval(() => {
	}, 100000000) // makes request once a day
})

db.on('error', function(err) {
	console.log(err)
	clearInterval(handler)
})