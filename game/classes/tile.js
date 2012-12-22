var Tile = Class.create(Item, {

	solid: false,
	width: 16,
	height: 16,
	left: 0,
	top: 0,

	initialize: function($super, name)
	{
		$super(name);
	},

	update: function()
	{
		this.container.innerHTML = this.getOutput();

		//if(this.solid && this.hit(Game.player))
		//{
		//	console.log('Contact');
		//}
	},

	getOutput: function()
	{
		var output = '';

		output += '<img src="assets/transparent.gif" ';
		output += 'style="width:16px; height:16px; background:url(assets/sprites/tiles.png) ' + this.left + ' ' + this.top + ';';
		output += 'position:fixed; left: ' + this.x + 'px; top:' + this.y + 'px;">';

		return output;
	},
});