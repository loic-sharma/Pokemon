Pokemon
=======

A Pokemon game written purely in JavaScript by Loic Sharma.

## Playing the Game

Download the game, and open the `game.html` file with your browser.

## Notes

A few things to keep in mind:

  * The PrototypeJS framework was used so that classes could be inherited.
  * Tiles are rendered only once to improve performance.
  * The tile system is really buggy. Tiles are not always well displayed.
  * There is not event handling for item collisions.
    * However, the player class prevents the player from moving to solid tiles.
    * Some sort of event handler will need to be created to change states.
  * Game states were implemented to allow switching from the world to menus easily, but there are no menus yet.