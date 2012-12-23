window.onload = function()
{
	Game.init();
	Game.setCurrentState('world');

	for(i = 0; i < map.length; i++)
	{
		if(typeof map[i].name !== 'undefined')
		{
			name = map[i].name;
		}

		else
		{
			name = i;
		}

		item = new Tile(name);

		if(typeof map[i].x !== 'undefined')
		{
			item.x = map[i].x-1;
		}

		if(typeof map[i].y !== 'undefined')
		{
			item.y = map[i].y;
		}

		if(typeof map[i].left !== 'undefined')
		{
			item.left = -16 * map[i].left;
		}

		if(typeof map[i].top !== 'undefined')
		{
			item.top = -16 * map[i].top;
		}

		if(typeof map[i].solid !== 'undefined' && map[i].solid == true)
		{
			item.solid = true;
		}

		else
		{
			item.solid = false;
		}

		item.left += (item.left / 16);
		item.top  += (item.top / 16) - 1;

		Game.state().tiles[item.x+'-'+item.y] = item.id;
	}

	Game.state().player = new Player;

	Game.load();
};
