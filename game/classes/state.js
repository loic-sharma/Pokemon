var State = Class.create({

	/**
	 * The HTML container for the state.
	 *
	 * @var object
	 */
	container: null,

	/**
	 * The name of the state.
	 *
	 * @var string
	 */
	name: null,

	/**
	 * The state's tiles.
	 *
	 * @var object
	 */
	tiles: {},

	/**
	 * The state's items.
	 *
	 * @var array
	 */
	items: [],
	
	/**
	 * The state's solid items.
	 *
	 * @var array
	 */
	solids: [],

	/**
	 * The state's player.
	 *
	 * @var Player
	 */
	player: null,

	/**
	 * Inject the state into the game container and retrieve the
	 * state's cotainer.
	 *
	 * @param  string  name
	 * @return void
	 */
	initialize: function(name)
	{
		this.name = name;
		this.tiles = {};
		this.items = [];

		Game.container.innerHTML += '<div id="state-' + name + '"></div>';

		this.resetContainer();
	},

	/**
	 * Retrieve the state's container.
	 *
	 * @return void
	 */
	resetContainer: function()
	{
		this.container = document.getElementById('state-' + this.name);
	}
});