var Player = Class.create(Item, {

	character: 0,
	direction: 0,
	_step: 0,

	width: 18,
	height: 22,

	initialize: function($super)
	{
		$super('player');
	},

	step: function()
	{
		step = this._step;

		this._step++;

		if(this._step > 40)
		{
			this._step = 0;
		}

		return 4 * Math.round(step / 20);
	},

	moveUp: function($super, speed)
	{
		var newPosition = {
			"x":      this.x,
			"y":      this.y - speed,
			"width":  this.width,
			"height": this.height,
		};

		for(var solid = 0; solid < Game.state().solids.length; solid++)
		{
			if(Game.state().solids[solid].hit(newPosition))
			{	
				return;
			}
		}

		$super(speed);
		
		this.direction = 2 + this.step();
	},

	moveDown: function($super, speed)
	{
		var newPosition = {
			"x":      this.x,
			"y":      this.y + speed,
			"width":  this.width,
			"height": this.height,
		};

		for(var solid = 0; solid < Game.state().solids.length; solid++)
		{
			if(Game.state().solids[solid].hit(newPosition))
			{	
				return;
			}
		}

		$super(speed);

		this.direction = 0 + this.step();
	},

	moveLeft: function($super, speed)
	{
		var newPosition = {
			"x":      this.x - speed,
			"y":      this.y,
			"width":  this.width,
			"height": this.height,
		};

		for(var solid = 0; solid < Game.state().solids.length; solid++)
		{
			if(Game.state().solids[solid].hit(newPosition))
			{	
				return;
			}
		}

		$super(speed);

		this.direction = 1 + this.step();
	},

	moveRight: function($super, speed)
	{
		var newPosition = {
			"x":      this.x + speed,
			"y":      this.y,
			"width":  this.width,
			"height": this.height,
		};

		for(var solid = 0; solid < Game.state().solids.length; solid++)
		{
			if(Game.state().solids[solid].hit(newPosition))
			{	
				return;
			}
		}

		$super(speed);

		this.direction = 3 + this.step();
	},

	update: function()
	{
		speed = 1;

		if(Key.wasReleased(Key.DOWN))
		{
			this.state = 0;
		}

		else if(Key.wasReleased(Key.UP))
		{
			this.state = 2;
		}

		else if(Key.wasReleased(Key.LEFT))
		{
			this.state = 1;
		}

		else if(Key.wasReleased(Key.RIGHT))
		{
			this.state = 3;
		}

		if(Key.isDown(Key.SHIFT))
		{
			speed *= 2;
		}

		if(Key.isDown(Key.UP)) 
		{
			this.moveUp(speed);
		}

		else if(Key.isDown(Key.DOWN)) 
		{
			this.moveDown(speed);
		}

		else if(Key.isDown(Key.LEFT)) 
		{
			this.moveLeft(speed);
		}

		else if(Key.isDown(Key.RIGHT))
		{
			this.moveRight(speed);
		}

		this.container.innerHTML = this.getOutput();
	},

	getOutput: function()
	{
		while(this.direction > 11)
		{
			this.direction -= 12;
		}

		var startX = -(this.character % 3) * 360/3;
		var startY = -(Math.floor(this.character / 3)) * 810/9;

		startX -= (this.direction % 4) * 349/12;
		startY -= Math.floor(this.direction / 4) * 798/27;

		var output = '';

		output += '<img src="assets/transparent.gif" ';
		output += 'style="width:' + this.width + 'px; height:' + this.height + 'px; background:url(assets/sprites/characters.png) ' + startX + ' ' + startY + ';';
		output += 'position:fixed; left: ' + this.x + 'px; top:' + this.y + 'px;">';

		return output;
	},
});