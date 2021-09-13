This is my example of the Wetransfer Progress spinner using exclusively vanilla javascript and no external libraries.

This component uses an svg and three nested functions to
increase the length of the circular line until it becomes a full circle to then invert and decrease until its empty again.
The Speed of the circle can be easily edited, as can the size, colour and radius of the svg.

The code has a runtime of ~2ms.

Further adaptation for this progress spinner can be to have the bar length (stroke-dasharray) increase in accordance with the progress percentage.
