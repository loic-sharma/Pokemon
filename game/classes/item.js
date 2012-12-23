var Item = Class.create({

	state: null,

	/**
	 * The item's state id.
	 *
	 * @var int
	 */
	id: 0,

	/**
	 * The item's name.
	 *
	 * @var string
	 */
	name: null,
	
	/**
	 * The item's x position
	 *
	 * @var int
	 */
	x: 0,

	/**
	 * The item's y position
	 *
	 * @var int
	 */
	y: 0,

	/**
	 * The item's HTML container.
	 *
	 * @param object
	 */
	container: null,

	/**
	 * Add the item to the current game state and display it.
	 *
	 * @param  name  string
	 * @return void
	 */
	initialize: function(name)
	{
		this.state = Game.currentStateName;

		this.id = Game.state().items.length;
		this.name = name;

		Game.addItem(this.id, this);

		this.show();
	},

	/**
	 * Fetch the item's HTML container.
	 *
	 * @return void
	 */
	resetContainer: function()
	{
		elements = document.getElementsByClassName('item-' + this.name);

		for(var element = 0; element < elements.length; element++)
		{
			if(elements[element].parentNode.id == 'state-' + this.state)
			{
				this.container = elements[element];

				return;
			}

			else
			{
				console.log(elements[element].parentNode);
			}
		}
	},

	/**
	 * Display the item.
	 *
	 * @return void
	 */
	show: function()
	{
		if( ! this.container)
		{
			Game.state().container.innerHTML += '<div class="item-'+this.name+'"></div>';
		}

		else
		{
			this.container.style.visibility = 'visible';
		}
	},

	/**
	 * Hide the item.
	 *
	 * @return void
	 */
	hide: function()
	{
		if(this.container)
		{
			this.container.style.visibility = 'hidden';
		}
	},

	/**
	 * Remove the current object from the state.
	 *
	 * @return void
	 */
	remove: function()
	{
		if(this.container)
		{
			this.container.parentNode.removeChild(this.container);

			this.container = null;
		}
	},

	/**
	 * Checks if the current item hits another item.
	 *
	 * @param  Item  item
	 * @return bool
	 */
	hit: function(item)
	{
		w = 0.5 * (this.width + item.width);
		h = 0.5 * (this.height + item.height);
		dx = (this.x + (this.width / 2)) - (item.x + (item.width / 2));
		dy = (this.y + (this.height / 2)) - (item.y + (item.height / 2));

		return (Math.abs(dx) < w && Math.abs(dy) < h);
	},

	/**
	 * Move the object up.
	 *
	 * @param  int   pixels
	 * @return void
	 */
	moveUp: function(pixels)
	{
		pixels = typeof pixels !== 'undefined' ? pixels : 1;

		this.y -= pixels;

		if(this.y < 0)
		{
			this.y = 0;
		}
	},

	/**
	 * Move the object down.
	 *
	 * @param  int   pixels
	 * @return void
	 */
	moveDown: function(pixels)
	{
		pixels = typeof pixels !== 'undefined' ? pixels : 1;

		this.y += pixels;

		if(this.y > 250)
		{
			this.y = 250;
		}
	},

	/**
	 * Move the object left.
	 *
	 * @param  int   pixels
	 * @return void
	 */
	moveLeft: function(pixels)
	{
		pixels = typeof pixels !== 'undefined' ? pixels : 1;

		this.x -= pixels;

		if(this.x < 0)
		{
			this.x = 0;
		}
	},

	/**
	 * Move the object right.
	 *
	 * @param  int   pixels
	 * @return void
	 */
	moveRight: function(pixels)
	{
		pixels = typeof pixels !== 'undefined' ? pixels : 1;

		this.x += pixels;

		if(this.x > 500)
		{
			this.x = 500;
		}
	},

	/**
	 * Update the HTML of the item.
	 *
	 * @return void
	 */
	update: function()
	{
		this.container.innerHTML = this.getOutput();
	},

	/**
	 * Fetch the new HTML of the item.
	 *
	 * @return string
	 */
	getOutput:  function()
	{
		var output = '';

		output += '<p>Id: ' + this.id + '</p>';
		output += '<p>X:' + this.x + '</p>';
		output += '<p>Y:' + this.y + '</p>';

		return output;
	},
});