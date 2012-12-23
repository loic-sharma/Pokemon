var State = Class.create({

	container: null,

	name: null,

	tiles: {},
	items: [],
	solids: [],
	player: null,

	initialize: function(name)
	{
		this.name = name;
		this.tiles = {};
		this.items = [];

		Game.container.innerHTML += '<div id="state-' + name + '"></div>';

		this.resetContainer();
	},

	resetContainer: function()
	{
		this.container = document.getElementById('state-' + this.name);
	}
});