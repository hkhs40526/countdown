input.onButtonPressed(Button.A, function () {
    let index = 0
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    basic.showNumber(3 - index)
    basic.showNumber(2 - index)
    basic.showNumber(1 - index)
    music.playTone(784, music.beat(BeatFraction.Whole))
    basic.showString("GO!!")
})
