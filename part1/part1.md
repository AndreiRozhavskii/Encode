Part 1: JavaScript

Question: What will the following JavaScript code output to the console?
const array = [12, 10, 22, 5, 25];
for(var i = 0; i < array.length; i++){
	setTimeout(function(){
		console.log("The element in position " + i + " is: " + array[i]); }, 5000);
}

Answer: The output of this code will be "undefined" 5 times. This happens because, 5 seconds after the loop starts, each setTimeout function tries to access the element at index i. By that time, the value of i has already reached 5 and there is no element at index 5, since array indices range from 0 to 4.

For example we can fix it if we use immediately invoked function:

const array = [12, 10, 22, 5, 25];
for (var i = 0; i < array.length; i++) {
  (function(i) {
    setTimeout(function() {
      console.log("The element in position " + i + " is: " + array[i]);
    }, 5000);
  })(i);
}
