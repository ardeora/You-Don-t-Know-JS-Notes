(function init() {	
	function C() {
		console.log("OOPS!");
	}

	function E(f) {
		console.log("E");
		f();
	}

	function A() {
		console.log("A");
		B();
	};

	function G() {
		console.log("G");
		H();

		function H() {
			console.log("H");
			I();
		};
	}

	var D = d;

	function d() {
		console.log("D");
		E(F);
	}

	function I() {
		console.log("I");
		J();
	}

	function B() {
		console.log("B");
		C();
	};

	var F = function() {
		console.log("F");
		G();
	};

	var rest = "KLMNOPQRSTUVWXYZ".split("");
	var obj = {};
	for (var i=0; i<rest.length; i++) {
		(function(i){
			obj[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					obj[rest[i+1]]();
				}
			};
		})(i);
	}

	var J = function() {
		console.log("J");
		obj.K();
	};

	function C() {
		console.log("C");
		D();
	};

	A();
})();
