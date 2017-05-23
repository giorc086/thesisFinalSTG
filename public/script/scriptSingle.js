$(function() {
	$.ajax({
		method: 'GET',
		url: 'http://localhost:8080/api/resort/25'
	})
		.done(function(response) {
			console.log(response)
			// $('#lifts').text(response.resortSnowreport.report.liftsReport.liftsOpen + '/' + response.resortTerrain.lifts.numLifts)
			// $('#longestRun').text(response.resortTerrain.terrain.longestRun + ' miles')
			// $('#seasonDates').text('Closing Date: ' + response.resortTerrain.facts.projectedClosingDate + 'Opening Date: ' + response.resortTerrain.facts.projectedOpeningDate)
			// $('#surfaceTop').text(response.resortSnowreport.report.snowQuality.onSlope.upperDepth + " inches")
			// $('#surfaceBottom').text(response.resortSnowreport.report.snowQuality.onSlope.lowerDepth + " inches")
		})

// header
	function stickyRelocate() {
		var windowTop = $(window).scrollTop()
		var divTop = $('#sticky-anchor').offset().top
		if (windowTop > divTop) {
			$('#sticky').addClass('stick')
			$('#sticky-anchor').height($('#sticky').outerHeight())
		} else {
			$('#sticky').removeClass('stick')
			$('#sticky-anchor').height(0)
		}
	}

	$(function() {
		$(window).scroll(stickyRelocate)
		stickyRelocate()
	})

	var dir = 1
	var MIN_TOP = 200
	var MAX_TOP = 350

	function autoscroll() {
		var windowTop = $(window).scrollTop() + dir
		if (windowTop >= MAX_TOP) {
			windowTop = MAX_TOP
			dir = -1
		} else if (windowTop <= MIN_TOP) {
			windowTop = MIN_TOP
			dir = 1
		}
		$(window).scrollTop(windowTop)
		window.setTimeout(autoscroll, 100)
	}
// End of header 
 // autocomplete input field
	var availableTags = [
		"Aspen",
		"Vail",
		"Keystone",
		"Breckenridge",
		"Beaver Creek",
		"Arapahoe Basin",
		"Copper",
		"Monarch",
		"Loveland",
		"Eldora",
		"Purgatory",
		"Crested Blue",
		"Powderhorn",
		"Cooper",
		"Steamboat",
		"Sunlight",
		"Telluride",
		"Winter Park",
		"Wolf Creek",
		"Silverton",
		"Echo"

	]
	$('.tags').autocomplete({
		source: availableTags
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
})()