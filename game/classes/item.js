var Item = Class.create({

	id: 0,
	name: null,
	x: 0,
	y: 0,

	container: null,

	initialize: function(name)
	{
		this.id = Game.items.length;
		this.name = name;

		Game.addItem(this.id, this);

		console.log('Registered: ' + name);
		console.log(Game.items[this.id]);

		this.show();
	},

	resetContainer: function()
	{
		this.container = document.getElementById(this.name);
	},

	show: function()
	{
		if( ! this.container)
		{
			Game.container.innerHTML += '<div id="'+this.name+'"></div>';
		}
	},

	hide: function()
	{
		if(this.container)
		{
			this.container.parentNode.removeChild(this.container);

			this.container = null;
		}
	},

	hit: function(item)
	{
		console.log(this);
		console.log(item);

		if(item.x >= this.x && item.x <= (this.x + this.width))
		{
			if(item.y >= this.y && item.y <= this.y + this.height)
			{
				return true;
			}
		}

		return false;
	},

	moveUp: function(pixels)
	{
		pixels = typeof pixels !== 'undefined' ? pixels : 1;

		this.y -= pixels;

		if(this.y < 0)
		{
			this.y = 0;
		}
	},

	moveDown: function(pixels)
	{
		pixels = typeof pixels !== 'undefined' ? pixels : 1;

		this.y += pixels;

		if(this.y > 500)
		{
			this.y = 500;
		}
	},

	moveLeft: function(pixels)
	{
		pixels = typeof pixels !== 'undefined' ? pixels : 1;

		this.x -= pixels;

		if(this.x < 0)
		{
			this.x = 0;
		}
	},

	moveRight: function(pixels)
	{
		pixels = typeof pixels !== 'undefined' ? pixels : 1;

		this.x += pixels;

		if(this.x > 500)
		{
			this.x = 500;
		}
	},

	update: function()
	{
		this.container.innerHTML = this.getOutput();
	},

	getOutput:  function()
	{
		var output = '';

		output += '<p>Id: ' + this.id + '</p>';
		output += '<p>X:' + this.x + '</p>';
		output += '<p>Y:' + this.y + '</p>';

		return output;
	},
});