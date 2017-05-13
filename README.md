# diagon-icons
This is a test idea for generating a random, colorful, pixelated icon from an
arbitrary string. It seeds a custom random number generator from the string's hash
code, then uses that RNG to color a 6x5 pixel grid.

**See it in action [here](https://shamblesides.github.io/diagon-icons/).**

The original idea was to come up with some kind of icons which could replace
the current random 3-color user icons on [RPNow.net](https://github.com/rpnow/rpnow2).
Ultimately, I decided that I don't like these enough to replace the current system.

The algorithm for icon generation is loosely based on Aaron Topance's
[OpenPGP keyart generator](https://github.com/atoponce/keyart).
The "Drunken Bishop" algorithm is described in more detail
[here](https://pthree.org/2013/05/30/openssh-keys-and-the-drunken-bishop/).
