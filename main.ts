input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
})
input.onGesture(Gesture.TiltRight, function () {
    turtle.turnRight()
})
input.onGesture(Gesture.TiltLeft, function () {
    turtle.turnLeft()
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    turtle.back(1)
})
turtle.home()
basic.forever(function () {
	
})
