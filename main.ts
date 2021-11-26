let luz = 0
input.onSound(DetectedSound.Loud, function () {
    if (luz < 0) {
        luz = 0
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        pins.digitalWritePin(DigitalPin.P0, 2)
    }
})
basic.forever(function () {
	
})
