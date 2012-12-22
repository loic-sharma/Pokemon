var Game = {

	loaded: false,
	container: null,
	settings: null,
	player: null,
	items: null,
	tiles: null,

	init: function()
	{
		window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
		window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

		this.container = document.getElementById('game');
		this.items = new Array();
		this.tiles = new Array();
	},

	load: function()
	{
		if( ! this.loaded)
		{
			this.loaded = true;

			this.resetContainers();

			window.setInterval(this.loop);
		}
	},

	resetContainers: function()
	{
		if(this.loaded)
		{
			for(i = 0; i < this.items.length; i++)
			{
				this.items[i].resetContainer();
			}
		}
	},

	addItem: function(key, item)
	{
		this.items[key] = item;

		this.resetContainers();
	},

	loop: function()
	{
		for(i = 0; i < Game.items.length; i++)
		{
			Game.items[i].update();
		}
	},
};