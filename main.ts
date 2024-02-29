input.onGesture(Gesture.LogoDown, function () {
    basic.clearScreen()
    amserydd = randint(1, 3)
})
let amserydd = 0
amserydd = 0
basic.forever(function () {
    if (amserydd == 1) {
        basic.showIcon(IconNames.Ghost)
    } else if (amserydd == 2) {
        basic.showIcon(IconNames.TShirt)
    } else if (amserydd == 3) {
        basic.showIcon(IconNames.Duck)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
