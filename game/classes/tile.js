var Tile = Class.create(Item, {

	solid: false,
	width: 17,
	height: 16,
	left: 0,
	top: 0,
	displayed: false,

	initialize: function($super, name)
	{
		$super(name);
	},

	resetContainer: function($super)
	{
		if( ! this.displayed)
		{
			return $super();
		}
	},

	update: function()
	{
		if( ! this.displayed)
		{
			this.displayed = true;
			this.container.innerHTML = this.getOutput();
		}
	},

	getOutput: function()
	{
		var output = '';

		output += '<img src="assets/transparent.gif" ';
		output += 'style="width:'+this.width+'px; height:'+this.height+'px; background:url(assets/sprites/tiles.png) ' + this.left + ' ' + this.top + ';';
		output += 'position:fixed; left: ' + this.x + 'px; top:' + this.y + 'px;">';

		return output;
	},
});