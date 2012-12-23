window.onload = function()
{
	Game.init();
	Game.currentState('world');

	// Inject all of the map's tiles to the game engine.
	for(var y = 0; y < map.length; y++)
	{
		for(var x = 0; x < map[y].length; x++)
		{
			item = new Tile(x + '_' + y);

			item.x    = x * 16 - x * 2 - 2;
			item.y    = y * 16 - y * 2 - 1;
			item.top  = 0;
			item.left = 0;

			if(typeof map[y][x].l !== 'undefined')
			{
				item.left -= map[y][x].l * 17 - 1;
			}

			if(typeof map[y][x].t !== 'undefined')
			{
				item.top -= map[y][x].t * 16 + map[y][x].t;
			}

			if(typeof map[y][x].s !== 'undefined')
			{
				item.solid = true;

				Game.state().solids[Game.state().solids.length] = item;
			}
		}
	}

	Game.state().player = new Player;

	Game.load();
};

/**
 * Change the character.
 *
 * @param  int   id
 * @return void
 */
function updateCharacter(id)
{
	if(typeof id === 'undefined')
	{
		id = $('character').value;
	}

	Game.state().player.character = $('character').value;
}
