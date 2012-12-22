var Player = Class.create(Item, {

	character: 0,
	state: 0,
	_step: 0,

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
		$super(speed);
		
		this.state = 2 + this.step();
	},

	moveDown: function($super, speed)
	{
		$super(speed);

		this.state = 0 + this.step();
	},

	moveLeft: function($super, speed)
	{
		$super(speed);

		this.state = 1 + this.step();
	},

	moveRight: function($super, speed)
	{
		$super(speed);

		this.state = 3 + this.step();
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
			speed = 2;
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
		while(this.state > 11)
		{
			this.state -= 12;
		}

		var startX = -(this.character % 3) * 349/3;
		var startY = -(Math.floor(this.character / 3)) * 798/9;

		startX -= (this.state % 4) * 349/12;
		startY -= Math.floor(this.state / 4) * 798/27;

		var output = '';

		output += '<img src="assets/transparent.gif" ';
		output += 'style="width:28px; height:29px; background:url(assets/sprites/characters.png) ' + startX + ' ' + startY + ';';
		output += 'position:fixed; left: ' + this.x + 'px; top:' + this.y + 'px;">';

		return output;
	},
});