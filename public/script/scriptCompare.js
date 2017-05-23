$(document).ready(function() {

		$('.group, .group2').hide()
		// $('#option1, #option24').show();
		$("#selectMe").change(function() {
			// Perform field1-specific logic
			$('.group').hide()
			$('#' + $(this).val()).show()
			// alert($(this).val())

			if ($(this).val() == 'option1') {
				$('#box').load('arapahoebasin.html #main')
			}
			if ($(this).val() == 'option2') {
				$('#box').load('aspen.html #main')
			}
			if ($(this).val() == 'option3') {
				$('#box').load('beavercreek.html #main')
			}
			if ($(this).val() == 'option4') {
				$('#box').load('breckenridge.html #main')
			}
			if ($(this).val() == 'option5') {
				$('#box').load('cooper.html #main')
			}
			if ($(this).val() == 'option6') {
				$('#box').load('copper.html #main')
			}
			if ($(this).val() == 'option7') {
				$('#box').load('crestedbutte.html #main')
			}
			if ($(this).val() == 'option8') {
				$('#box').load('echo.html #main')
			}
			if ($(this).val() == 'option9') {
				$('#box').load('eldora.html #main')
			}
			if ($(this).val() == 'option11') {
				$('#box').load('keystone.html #main')
			}
			if ($(this).val() == 'option12') {
				$('#box').load('loveland.html #main')
			}
			if ($(this).val() == 'option13') {
				$('#box').load('monarch.html #main')
			}
			if ($(this).val() == 'option14') {
				$('#box').load('powderhorn.html #main')
			}
			if ($(this).val() == 'option15') {
				$('#box').load('purgatory.html #main')
			}
			if ($(this).val() == 'option16') {
				$('#box').load('silverton.html #main')
			}
			if ($(this).val() == 'option18') {
				$('#box').load('steamboat.html #main')
			}
			if ($(this).val() == 'option19') {
				$('#box').load('sunlight.html #main')
			}
			if ($(this).val() == 'option20') {
				$('#box').load('telluride.html #main')
			}
			if ($(this).val() == 'option21') {
				$('#box').load('vail.html #main')
			}
			if ($(this).val() == 'option22') {
				$('#box').load('winterpark.html #main')
			}
			if ($(this).val() == 'option23') {
				$('#box').load('wolfcreek.html #main')
			} else {
				$('#box').empty();
			}
		});

		$("#selectMe2").change(function() {
			// Perform field1-specific logic
			$('.group2').hide()
			$('#' + $(this).val()).show()
			// alert($(this).val());

			if ($(this).val() == 'option24') {
				$('#box2').load('arapahoebasin.html #main')
			}
			if ($(this).val() == 'option25') {
				$('#box2').load('aspen.html #main')
			}
			if ($(this).val() == 'option26') {
				$('#box2').load('beavercreek.html #main')
			}
			if ($(this).val() == 'option27') {
				$('#box2').load('breckenridge.html #main')
			}
			if ($(this).val() == 'option28') {
				$('#box2').load('cooper.html #main')
			}
			if ($(this).val() == 'option29') {
				$('#box2').load('copper.html #main')
			}
			if ($(this).val() == 'option30') {
				$('#box2').load('crestedbutte.html #main')
			}
			if ($(this).val() == 'option31') {
				$('#box2').load('echo.html #main')
			}
			if ($(this).val() == 'option32') {
				$('#box2').load('eldora.html #main')
			}
			if ($(this).val() == 'option34') {
				$('#box2').load('keystone.html #main')
			}
			if ($(this).val() == 'option35') {
				$('#box2').load('loveland.html #main')
			}
			if ($(this).val() == 'option36') {
				$('#box2').load('monarch.html #main')
			}
			if ($(this).val() == 'option37') {
				$('#box2').load('powderhorn.html #main')
			}
			if ($(this).val() == 'option38') {
				$('#box2').load('purgatory.html #main')
			}
			if ($(this).val() == 'option39') {
				$('#box2').load('silverton.html #main')
			}
			if ($(this).val() == 'option41') {
				$('#box2').load('steamboat.html #main')
			}
			if ($(this).val() == 'option42') {
				$('#box2').load('sunlight.html #main')
			}
			if ($(this).val() == 'option43') {
				$('#box2').load('telluride.html #main')
			}
			if ($(this).val() == 'option44') {
				$('#box2').load('vail.html #main')
			}
			if ($(this).val() == 'option45') {
				$('#box2').load('winterpark.html #main')
			}
			if ($(this).val() == 'option46') {
				$('#box2').load('wolfcreek.html #main')
			} else {
				$('#box2').empty()
			}
		})
})

$(function() {
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
	'Crested Blue',
	'crested blue',
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
			// load new page as aspen.html 
				window.location = userInput.replace(/\s/g, '').toLowerCase() + '.html' // remove spaces in string
				console.log(userInput)
				return false
			} else {
			// alert('type a resort name')
			}
		}
})
})

if ($(window).width() < 580) {
	alert('Rotate your device to portrait')
} else {

}
