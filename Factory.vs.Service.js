var spinner = ....

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

//Revealing Module Pattern
function getSpinner(){
	var counter = 0;

	function increment(){
		return ++counter;
	}

	function decrement(){
		return --counter;
	}

	return {
		up : increment,
		down : decrement
	}
}

//Constructor Function
function Spinner(){
	var counter = 0;

	this.up = function(){
		return ++counter;
	};

	this.down = function(){
		return --counter;
	};
}

var spinner = new Spinner();

var spinner = {};
Spinner.call(spinner);

















