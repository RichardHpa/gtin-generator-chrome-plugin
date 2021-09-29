document.addEventListener('DOMContentLoaded', documentEvents, false)

function documentEvents() {
	document
		.getElementById('generateGtinButton')
		.addEventListener('click', function () {
			const input = document.getElementById('gtinType')
			const gtin = makeGtinNumber(parseInt(input.value))
			document.getElementById('resultContainer').style.display = 'block'
			var gtinInput = document.getElementById('gtinResult')
			gtinInput.value = gtin
			/* Select the text field */
			gtinInput.select()
			gtinInput.setSelectionRange(0, 99999) /* For mobile devices */

			/* Copy the text inside the text field */
			navigator.clipboard.writeText(gtinInput.value)
			console.log('Copied GTIN: ' + gtinInput.value)
		})

	// you can add listeners for other objects ( like other buttons ) here
}

function makeNumber() {
	return Math.floor(Math.random() * 10)
}

function makeGtinNumber(type, prefill = '') {
	var fullNr = '' // treat as String
	switch (type) {
		case 8:
			fullNr = '0000000000' + prefill.substring(0, type - 1) // 10 fill digits
			break
		case 12:
			fullNr = '000000' + prefill.substring(0, type - 1) // 6 fill digits
			break
		case 13:
			fullNr = '00000' + prefill.substring(0, type - 1) // 5 fill digits
			break
		case 14:
			fullNr = '0000' + prefill.substring(0, type - 1) // 4 fill digits
			break
		case 18:
			fullNr = prefill.substring(0, type - 1) // no fill digits
			break
		default:
			// default to GTIN-13 (=EAN)
			fullNr = '00000' // 5 fill digits, no prefill possfible here...
			type = 13
	}
	// Add random numbers untill 17 chars
	while (fullNr.length < 17) {
		fullNr = fullNr + makeNumber().toString()
	}
	// Calculate checksum
	digits = fullNr.split('')
	sum3 =
		3 *
		(Number(digits[0]) +
			Number(digits[2]) +
			Number(digits[4]) +
			Number(digits[6]) +
			Number(digits[8]) +
			Number(digits[10]) +
			Number(digits[12]) +
			Number(digits[14]) +
			Number(digits[16]))
	sum1 =
		Number(digits[1]) +
		Number(digits[3]) +
		Number(digits[5]) +
		Number(digits[7]) +
		Number(digits[9]) +
		Number(digits[11]) +
		Number(digits[13]) +
		Number(digits[15])
	checksum = 10 - ((Number(sum3) + Number(sum1)) % 10)
	if (checksum == 10) {
		checksum = 0
	}
	fullNr = fullNr + checksum.toString()
	//output only relevant part of string
	return fullNr.substring(18 - type)
}
