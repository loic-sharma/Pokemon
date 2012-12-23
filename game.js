window.onload = function()
{
	Game.init();
	Game.currentState('world');

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
		/*
		if(typeof map[i].name !== 'undefined')
		{
			name = map[i].name;
		}

		else
		{
			name = i;
		}

		item = new Tile(name);

		item.width  = 16;
		item.height = 16;
		item.top    = 0;
		item.left   = 0;

		if(typeof map[i].x !== 'undefined')
		{
			item.x = map[i].x * 16;
		}

		if(typeof map[i].y !== 'undefined')
		{
			item.y = map[i].y * 16;
		}

		if(typeof map[i].left !== 'undefined')
		{
			item.left = -16 * map[i].left;
		}

		if(typeof map[i].top !== 'undefined')
		{
			item.top = -16 * map[i].top;
		}

		item.top = 0;
		item.left = -17;

		if(typeof map[i].solid !== 'undefined' && map[i].solid == true)
		{
			item.solid = true;

			Game.state().solids[Game.state().solids.length] = item;
		}

		else
		{
			item.solid = false;
		}
		*/
	}

	Game.state().player = new Player;

	Game.load();
};
