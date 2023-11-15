radio.onReceivedNumber(function (receivedNumber) {
    num_recibido = receivedNumber
    num2 = randint(1, 6)
    basic.showNumber(num2)
    basic.pause(1000)
    if (num2 < num_recibido) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . # # # .
            . # . # .
            `)
    } else if (num2 > num_recibido) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    num = randint(1, 6)
    radio.sendNumber(num)
    basic.showNumber(num)
    basic.pause(1000)
    if (num < num2) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . # # # .
            . # . # .
            . . . . .
            `)
    } else if (num > num2) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . # . # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
let num = 0
let num2 = 0
let num_recibido = 0
radio.setGroup(1)
