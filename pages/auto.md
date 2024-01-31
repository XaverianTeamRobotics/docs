---
title: Auto Auto User's Guide
---

# Using the Auto Auto (Automatic Autonomous) Creator

## Alignment
The back of the robot should be fully touching the back wall. The alignment tool on the right side of the robot should
be aligned with the inside edge of the foam tiles. 

## Loading Pixels
With the robot aligned, pixel loading depends on what you plan to achieve in the autonomous. If you just want to place a 
pixel on the spike mark, load the purple pixel in the right slot. If you want to place a pixel on the backdrop, load
the yellow pixel in the right slot. If you want to do both, load the yellow pixel in the right slot and the purple pixel
in the left slot.

## Answering Questions
At this point, you can initialize the `AutoAutoCreator` autonomous opmode, without fully starting it. You will need at least one controller connected 
as controller 1. Here is a breakdown of the questions:
 - **Team Color** - The color of your alliance
 - **Starting Position** - Whether the bot is to the left or right (in the driver's POV)
 - **Loaded Pixels** - What pixels are loaded
 - **Backdrop Pixel Placement** - Always choose left (only shows if a yellow pixel is loaded)
 - **Parking** - Where to park (on the far side, always choose `Starting Position`)