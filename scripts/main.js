//Sum and Average//
var sum = 0; //sets the initial value of sum to a number
		
for(var i = 0; i < items.length; i++){  // creates loop through the array for the length of the array
		var sum = sum + (items[i].price); //get the price of each item and adds them together
	  	//console.log(sum); //prints sum to the console for checking.
};

var avg = sum/items.length; //takes total of all items and divides by number of items to get average.
console.log("The average price is $" + avg.toFixed(2)); //prints average to the console with only two decimal places.


//Prices between 14 and 18//
var price = 0; //sets the initial value of price to a number
		
for(var i = 0; i < items.length; i++){  // creates loop through the array for the length of the array
		var price = (items[i].price); //get the price of each item and adds them together
	  	if((price < 14.00)||(price > 18.00)){
	  		console.log("it works");//console.log(sum); //prints sum to the console for checking.
		}
		else {
			console.log("The price is $" + price);
  	}
}

//var iList = price; //takes total of all items and divides by number of items to get average.





//Find GBP code; print name and price//
	

//Find items made of wood//







