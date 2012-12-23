var Key = {
	_pressed: {},
	_released: {},

	SHIFT: 16,
	CTRL: 17,
	ESC: 27,
	SPACE: 32,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	ONE: 49,
	TWO: 50,
	THREE: 51,
	FOUR: 52,
	FIVE: 53,
	SIX: 54,
	SEVEN: 55,
	EIGHT: 56,
	NINE: 57,
	A: 65,
	B: 66,
	C: 67,
	D: 68,
	E: 69,
	F: 70,
	G: 71,
	H: 72,
	I: 73,
	J: 74,
	K: 75,
	L: 76,
	M: 77,
	N: 78,
	O: 79,
	P: 80,
	Q: 81,
	R: 82,
	S: 83,
	T: 84,
	U: 85,
	V: 86,
	W: 87,
	X: 88,
	Y: 89,
	Z: 90,
	SEMICOLON: 186,
	EQUALS: 187,
	COMMA: 188,
	DASH: 189,
	PERIOD: 190,
	SLASH: 191,
	TILDE: 192,
	LEFTHARDBRACKET: 219,
	BACKSLASH: 220,
	RIGHTHARDBRACKET: 221,
	APOSTROPHE: 222,

	/**
	 * Verify if a key is pressed down.
	 *
	 * @param  int   keyCode
	 * @return bool
	 */
	isDown: function(keyCode)
	{
		delete this._released[keyCode];

		return this._pressed[keyCode];
	},

	/**
	 * Verify if a key was released.
	 *
	 * @param  int   keyCode
	 * @return bool
	 */
	wasReleased: function(keyCode)
	{
		return this._released[keyCode];
	},

	/**
	 * Register that a key was pressed.
	 *
	 * @param  int   keyCode
	 * @return void
	 */
	onKeydown: function(event)
	{
		delete this._released[event.keyCode];

		this._pressed[event.keyCode] = true;
	},

	/**
	 * Register that a key was released.
	 *
	 * @param  int   keyCode
	 * @return void
	 */
	onKeyup: function(event)
	{
		this._released[event.keyCode] = true;

		delete this._pressed[event.keyCode];
	}

};