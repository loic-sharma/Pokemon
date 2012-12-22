var State = Class.create({

	container: null,

	name: null,

	tiles: [],
	items: [],
	player: null,

	initialize: function(name)
	{
		this.name = name;

		Game.container.innerHTML += '<div id="state-' + name + '"></div>';

		this.resetContainer();
	},

	resetContainer: function()
	{
		this.container = document.getElementById('state-' + this.name);
	}
});