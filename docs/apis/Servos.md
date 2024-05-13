---
title: Servos
---

# Servos

Servos are stored in the `Devices` class.

There are three:
 - `Devices.servo0`
 - `Devices.servo1`
 - `Devices.servo2`
 - `Devices.servo3`
 - `Devices.servo4`
 - `Devices.servo5`
 - `Devices.servo6`
 - `Devices.servo7`

:::note
New servos are constantly being added, and there may be more servos available than listed above.
:::

## Usage

Servos either operate in **continuous** mode or **servo** mode. Servo mode is when you provide a position and the servo
rotates to that position. Continuous mode is when you provide a speed for the servo to rotate and it rotates continuously at
that speed.

To switch modes, use a servo programmer.

### Servo Mode

Servos have a `setPosition(double position)` method that accepts values between 0 and 100. A value of 0 corresponds to -135 degrees 
and a value of 100 corresponds to 135 degrees.
  
They also have a `getPosition()` method that returns the intended position (not the actual position).

### Continuous Mode

The same `setPosition(double position)` method used in the servo mode can be used in continuous mode. A value of 0 is 
full speed counter-clockwise, a value of 50 is stopoed, and a value of 100 is full speed clockwise.

## Programming Servos
The **REV Robotics SRS Servo Programmer** can be used to store servo positions on the servo. This would allow you to 
reassign the min and max positions of the servo without having to change the code. The programmer has 4 buttons and a switch.

:::tip
The servo programmer is not required to use servos. It is just a tool to make programming servos easier.
:::

The switch at the top is used to program whether you want the servo in **continuous** mode or **servo** mode.

By pressing the **LEFT** button, you can set a left bound for the servo. This is the position that the servo will go to when the
value in the code is 0.

By pressing the **RIGHT** button, you can set a right bound for the servo. This is the position that the servo will go to when the
value in the code is 100.

By pressing the **PROGRAM** button fro the servo, you can program the values to the servo.

By pressing the **TEST** button, you can test the servo. This will move the servo between the bounds. By double pressing the **TEST** button, 
you can set the servo to manual testing mode. You can then press the buttons to see the servo move to that position. Press the button again to
exit testing mode.

:::caution
The left bound cannot be to the right of the center position and the right bound cannot be to the left of the center position.
There is a 20 degree deadzone in the center of the servo where no bound can be set.

If you press either the **LEFT** or **RIGHT** button and the light turns solid, the bound is valid. If the light blinks, the bound is invalid.
:::