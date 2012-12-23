var Player = Class.create(Item, {

	/**
	 * The character model.
	 *
	 * @var int
	 */
	character: 0,

	/**
	 * The current direction of the character model.
	 *
	 * @var int
	 */
	direction: 0,

	/**
	 * The current step id of the character model.
	 *
	 * @var int
	 */
	_step: 0,

	/**
	 * The character model's width in pixels.
	 *
	 * @var int
	 */
	width: 18,

	/**
	 * THe character model's height in pixels.
	 *
	 * @var int
	 */
	height: 22,

	/**
	 * Register the player item.
	 *
	 * @param  function  $super
	 * @return void
	 */
	initialize: function($super)
	{
		$super('player');
	},

	/**
	 * Make the character move his/her legs.
	 *
	 * @return int
	 */
	step: function()
	{
		step = this._step;

		this._step++;

		// We don't want the character to step every frame,
		// so we'll skip some frames.
		if(this._step > 40)
		{
			this._step = 0;
		}

		return 4 * Math.round(step / 20);
	},

	/**
	 * Move the character up on the screen.
	 *
	 * @param  function  $super
	 * @param  int       speed
	 * @return void
	 */
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

	/**
	 * Move the character down on the screen.
	 *
	 * @param  function  $super
	 * @param  int       speed
	 * @return void
	 */
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

	/**
	 * Move the character left on the screen.
	 *
	 * @param  function  $super
	 * @param  int       speed
	 * @return void
	 */
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

	/**
	 * Move the character right on the screen.
	 *
	 * @param  function  $super
	 * @param  int       speed
	 * @return void
	 */
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

	/**
	 * Update the character on the screen.
	 *
	 * @return void
	 */
	update: function()
	{
		speed = 1;

		// If the shift key is down, double the character's
		// speed.
		if(Key.isDown(Key.SHIFT))
		{
			speed *= 2;
		}

		// Register the movement keys.
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

	/**
	 * Generate the HTML for the player.
	 *
	 * @return string
	 */
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