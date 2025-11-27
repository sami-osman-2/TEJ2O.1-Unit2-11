"""
Copyright (c) 2025 MTHS All rights reserved
Created by: Sami Osman
Created on: Nov 2025
This program generates 2 random numbers and compares them on shake.
"""
from microbit import *
import random

# generate two random numbers from 0 to 99
num1 = random.randint(0, 99)
num2 = random.randint(0, 99)

display.show(Image.HAPPY)

while True:
    if button_a.was_pressed():
        display.show(str(num1))
    elif button_b.was_pressed():
        display.show(str(num2))
    elif accelerometer.was_gesture("shake"):
        if num1 < num2:
            display.scroll("1<2")
        else:
            display.scroll("1>2")
