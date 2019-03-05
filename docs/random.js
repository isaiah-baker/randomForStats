function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var btn = document.getElementById("btn");
var group = document.getElementById("grp");
var mean = document.getElementById("mean");
var groupings = new Array();

btn.addEventListener("click", function(){
	grouper();
});


	//grouper function
	function grouper (){
		//loop through 4 numbers and write to console
		for(var i = 0; i < 4; i++){
			groupings[i] = getRandomInt(10);	
			
		}

		console.log("Number List: " + groupings);

		//display value to user
		group.innerHTML = groupings;

		//add function add up and divides for mean
		var sum = groupings.reduce(add, 0);
		
		function add(a, b) {
		    return a + b;
		}
		mean.innerHTML = sum/groupings.length;
		console.log("Mean: " + sum/groupings.length);

		
}



	

