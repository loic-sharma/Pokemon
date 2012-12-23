var Tile = Class.create(Item, {

	/**
	 * Can the player walk through this tile?
	 *
	 * @var bool
	 */
	solid: false,

	/**
	 * The tile's width in pixels.
	 *
	 * @var int
	 */
	width: 17,

	/**
	 * The tile's height in pixels.
	 *
	 * @var int
	 */
	height: 16,

	/**
	 * The tile's x position.
	 *
	 * @var int
	 */
	left: 0,

	/**
	 * The tile's y position.
	 *
	 * @var int
	 */
	top: 0,

	/**
	 * Has the tile already been displayed?
	 *
	 * @var bool
	 */
	displayed: false,

	/**
	 * Get the tile's container.
	 *
	 * @param  function  $super
	 * @return void
	 */
	resetContainer: function($super)
	{
		if( ! this.displayed)
		{
			return $super();
		}
	},

	/**
	 * Update the tile.
	 *
	 * @return void
	 */
	update: function()
	{
		if( ! this.displayed)
		{
			this.displayed = true;
			this.container.innerHTML = this.getOutput();
		}
	},

	/**
	 * Get the tile's HTML.
	 *
	 * @return string
	 */
	getOutput: function()
	{
		var output = '';

		output += '<img src="assets/transparent.gif" ';
		output += 'style="width:'+this.width+'px; height:'+this.height+'px; background:url(assets/sprites/tiles.png) ' + this.left + ' ' + this.top + ';';
		output += 'position:fixed; left: ' + this.x + 'px; top:' + this.y + 'px;">';

		return output;
	},
});