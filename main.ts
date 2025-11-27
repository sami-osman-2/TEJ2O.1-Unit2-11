/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sami Osman
 * Created on: Nov 2025
 * This program generates 2 random numbers and compares them on shake.
*/

let num1 = Math.randomRange(0, 99)
let num2 = Math.randomRange(0, 99)

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showNumber(num1)
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(num2)
})

input.onGesture(Gesture.Shake, function () {
    if (num1 < num2) {
        basic.showString("1<2")
    } else {
        basic.showString("1>2")
    }
})
