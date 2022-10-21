input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("hola")
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        # . . # .
        . . . . .
        # . . # .
        . # # . .
        `)
})
radio.setGroup(1)
