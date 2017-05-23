// enable the pointer events only on click;
$('#map_canvas').addClass('scrolloff') // set the pointer events to none on doc ready
$('#map_wrapper').on('click', function() {
	$('#map_canvas').removeClass('scrolloff') // set the pointer events true on click
})

$('#map_canvas').mouseleave(function() {
	$('#map_canvas').addClass('scrolloff') // set the pointer events to none when mouse leaves the map area
})

// resets form input once one location is clicked 
var form = document.getElementById("myForm")
form.reset()

// autocomplete input field
$(function() {
		var availableTags = [
			'Aspen',
			'Vail',
			'Keystone',
			'Breckenridge',
			'Beaver Creek',
			'Arapahoe Basin',
			'Copper',
			'Monarch',
			'Loveland',
			'Eldora',
			'Purgatory',
			'Crested Butte',
			'Powderhorn',
			'Cooper',
			'Steamboat',
			'Sunlight',
			'Telluride',
			'Winter Park',
			'Wolf Creek',
			'Silverton',
			'Echo'
		]
		$('.tags').autocomplete({
			source: availableTags
		})
	})
	// end of autocomplete

var resortArray = [
	'Vail',
	'vail',
	'Aspen',
	'aspen',
	'Keystone',
	'keystone',
	'Breckenridge',
	'breckenridge',
	'Beaver Creek',
	'beaver creek',
	'Arapahoe Basin',
	'arapahoe basin',
	'Copper',
	'copper',
	'Monarch',
	'monarch',
	'Loveland',
	'loveland',
	'Eldora',
	'eldora',
	'Purgatory',
	'purgatory',
	'Crested Butte',
	'crested butte',
	'Powderhorn',
	'powderhorn',
	'Cooper',
	'cooper',
	'Steamboat',
	'steamboat',
	'Sunlight',
	'sunlight',
	'Telluride',
	'telluride',
	'Winter Park',
	'winter park',
	'Wolf Creek',
	'wolf creek',
	'Silverton',
	'silverton',
	'Echo',
	'echo'
]

var arrayLength = resortArray.length
var userInput
$('#myForm').submit(function(e) {
	e.preventDefault()
	userInput = $('#search').val()

	for (var i = 0; i < arrayLength; i++) {
		if (userInput === resortArray[i]) {
			window.location = userInput.replace(/\s/g, '').toLowerCase() + '.html' // remove spaces in string
			console.log(userInput)
			return false
		} else {
			// alert('type a resort name')
		}
	}
})

// MAP CODE
$(function() {
	// Asynchronously Load the map API 
	var script = document.createElement('script')
	script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDaidSgjFzj8MV98T7-PFBwvnDwS56c4e0&callback=initialize"
	document.body.appendChild(script) // add map to body tag in html
})

function initialize() {
	var map
	var bounds = new google.maps.LatLngBounds()
	var mapOptions = {
		mapTypeId: 'terrain'
	}

	// Display a map on the page
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions)
	map.setTilt(45)

	// Multiple Markers
	var markers = [
		['Aspen', 39.190921918, -106.821099395, 'aspen.html'],
		['Vail', 39.6403, -106.3742, 'vail.html'],
		['Keystone', 39.5792, -105.9347, 'keystone.html'],
		['Breckenridge', 39.4817, -106.0384, 'breckenridge.html'],
		['Beaver Creek', 39.6042, -106.5165, 'beavercreek.html'],
		['Arapahoe Basin', 39.6423, -105.8717, 'arapahoebasin.html'],
		['Copper', 39.5014, -106.1516, 'copper.html'],
		['Monarch', 38.5114, -106.3330, 'monarch.html'],
		['Loveland', 39.6800, -105.8979, 'loveland.html'],
		['Eldora', 39.9372, -105.5827, 'eldora.html'],
		['Purgatory', 37.6303, -107.8140, 'purgatory.html'],
		['Echo', 39.74137, -105.512217, 'echo.html'],
		['Silverton', 37.826, -107.6733, 'silverton.html'],
		['Wolf Creek', 37.474449, -106.793118, 'wolfcreek.html'],
		['Winter Park', 39.86462264, -105.7785112, 'winterpark.html'],
		['Telluride', 37.937494, -107.812285, 'telluride.html'],
		['Sunlight', 39.401048, -107.340781, 'sunlight.html'],
		['Steamboat', 40.46051953, -106.7902279, 'steamboat.html'],
		['Cooper', 39.253288, -106.291331, 'cooper.html'],
		['Powderhorn', 39.070036, -108.150964, 'powderhorn.html'],
		['Crested Butte', 38.89235721, -106.9586235, 'crestedbutte.html']
	]

	// Display multiple markers on a map
	var infoWindow = new google.maps.InfoWindow(),
		marker, i

	// Loop through our array of markers & place each one on the map  
	for (i = 0; i < markers.length; i++) {
		// console.log(infoWindowContent);    
		var position = new google.maps.LatLng(markers[i][1], markers[i][2])
		bounds.extend(position)
		marker = new google.maps.Marker({
				position: position,
				map: map,
				title: markers[i][0],
				url: markers[i][3]
			})
			// Allow each marker to have an info window    
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			var infoWindowContent = '<a href="' + markers[i][3] + '">' + markers[i][0] + '</a>'
			return function() {
				infoWindow.setContent(infoWindowContent)
				infoWindow.open(map, marker)
					// window.location.href = this.url;
			}
		})(marker, i))

		// Automatically center the map fitting all markers on the screen
		map.fitBounds(bounds)
	}

	// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
	var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
		this.setZoom(7)
		google.maps.event.removeListener(boundsListener)
	})
}
// END OF MAP CODE
