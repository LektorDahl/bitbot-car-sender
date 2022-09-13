input.onButtonPressed(Button.A, function () {
    radio.sendString("Venstre")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Frem")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Stopp")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Høyre")
})
radio.setGroup(1)
