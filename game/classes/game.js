var Game = {

	/**
	 * Has the game loop been started?
	 *
	 * @var bool
	 */
	loaded: false,

	/**
	 * The game's HTML container.
	 *
	 * @var object
	 */
	container: null,

	/**
	 * The game's settings.
	 *
	 * @todo remove?
	 */
	settings: null,

	/**
	 * The game's states.
	 *
	 * @var object
	 */
	states: {},

	/**
	 * The current state's name.
	 *
	 * @var string
	 */
	currentStateName: null,

	/**
	 * The current state object.
	 *
	 * @var State
	 */
	//state: null,

	/**
	 * Register the event listeners and prepare the game container.
	 *
	 * @return void
	 */
	init: function()
	{
		window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
		window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

		this.container = document.getElementById('game');
	},

	/**
	 * Load the game and initiate the game loop.
	 *
	 * @return void
	 */
	load: function()
	{
		if( ! this.loaded)
		{
			this.loaded = true;

			this.resetContainers();

			window.setInterval(this.loop);
		}
	},

	/**
	 * Set the current state and hide the previous state.
	 *
	 * @param  string  state
	 * @return State
	 */
	setCurrentState: function(state)
	{
		// If a state's name was inputted, we need to change the current
		// state. 
		if(typeof state !== 'undefined')
		{
			// Hide the current state if it exists.
			if(this.currentStateName)
			{
				this.state().container.style.visibility = 'hidden';
			}

			this.currentStateName = state;
		}

		else
		{
			state = this.currentStateName;
		}

		// If the state does not exist, we will need to create it.
		if(typeof this.states[state] === 'undefined')
		{
			// Add the state to the game.
			this.states[state] = new State(state);

			this.resetContainers();
		}

		else
		{
			this.states[state].container.style.visibility = 'visible';
		}

		return this.states[state];
	},

	state: function(name)
	{
		if(typeof name === 'undefined')
		{
			name = this.currentStateName;
		}

		if(typeof this.states[name] === 'undefined')
		{
			console.log('Creating new state.');

			this.states[name] = new State(name);

			this.resetContainers();
		}

		return this.states[name];
	},

	/**
	 * Reset the containers of the game, states, and items.
	 *
	 * @return void
	 */
	resetContainers: function()
	{
		// The game won't have any containers if it isn't loaded.
		if(this.loaded)
		{
			this.container = document.getElementById('game');

			for(var state in this.states)
			{
				this.states[state].container = document.getElementById('state-' + state);

				for(var item = 0; item < this.states[state].items.length; item++)
				{
					this.states[state].items[item].resetContainer();
				}
			}
		}
	},

	/**
	 * Add an item to the current state.
	 *
	 * @param  string  key
	 * @param  Item    item
	 * @return void
	 */
	addItem: function(key, item)
	{
		this.state().items[key] = item;

		this.resetContainers();
	},

	/**
	 * Update each of the items of the current state.
	 *
	 * @return void
	 */
	loop: function()
	{
		for(i = 0; i < Game.state().items.length; i++)
		{
			Game.state().items[i].update();
		}
	},
};