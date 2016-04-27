//Sum and Average//
var sum = 0; //sets the initial value of sum to a number
		
for(var i = 0; i < items.length; i++){  // creates loop through the array for the length of the array
		var sum = sum + (items[i].price); //get the price of each item and adds them together
	  	//console.log(sum); //prints sum to the console for checking.
};

var avg = sum/items.length; //takes total of all items and divides by number of items to get average.
console.log("The average price is $" + avg.toFixed(2)); //prints average to the console with only two decimal places.

//console.log(items[0].price);


//Prices between 14 and 18//
var list = [];
for(var i = 0; i < items.length; i++){
	if(items[i].price >= 14.00 && items[i].price <= 18.00){
		 list.push(items[i].title);
	};		
};


 console.log(list);
	

//Find GBP code; print name and price//
	

for(var i = 0; i < items.length; i++){
	if(items[i].currency_code === 'GBP'){
		 console.log(items[i].title, items[i].price);
	};		
};


//Find items made of wood//



for(var i = 0; i < items.length; i++){
	 if(items[i].materials.indexOf('wood') > -1){
	 	 console.log(items[i].title);
	 }	
};

//Items with 8 or more materials

for(var i = 0; i < items.length; i++){
	if(items[i].materials.length > 7){
		console.log(items[i].title, items[i].materials);
	}
};

//How many made by sellers
var who = 0
for(var i = 0; i < items.length; i++){
	if(items[i].who_made === 'i_did'){
		who++;
	}
};
console.log(who + ' were made by the seller');

console.log('I love collections!')





