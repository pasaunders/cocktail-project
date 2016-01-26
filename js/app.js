function drinkRecipe(drinkName, ingredients, glass, image, category, liquor){
	this.drinkName = drinkName;
	this.ingredients = ingredients;
	this.glassType = glass;
	this.imageProperty = image;
	this.category = category;
  this.baseLiquior = liquor;
  this.match = 0;
	this.percentMatch = 0;
	this.ingMatch = [];
	this.ingMismatch = [];
}
function ingredient(ingName, image, substitutes){
	this.ingName = ingName;
	this.image = image;
	this.substitutes = substitutes;
}

var base = new Firebase("https://glaring-heat-8547.firebaseio.com"); // Link to the firebase!
var drinksDir = base.child("drinks");
var drinkArray = [];
var ingArray = [];

var drinkArray = [  // This array holds objects for every drink ever entered into the database!
    new drinkRecipe('Screwdriver',[['Vodka','1.5 oz'],['Orange juice','6 oz']],'high ball','highball.jpg','cold','vodka'),
    new drinkRecipe('Margarita',[['Tequila','1.5 oz'],['Triple sec','1.5 oz'],['Lime juice','1-1.25 oz'],['Salt','on the rim of the glass']],'margarita','margarita.jpg','cold','tequila'),
    new drinkRecipe('Irish Coffee',[['Whiskey','1.5 oz'],['Coffee','1 cup'],['Brown sugar','1 tablespoon']],'Irish Coffee','irish.jpg','warm','whiskey'),
    new drinkRecipe('Mimosa',[['champagne','1/3 cup'],['orange juice','1/3 cup'],['triple sec','1 tablespoon (optional)']],'flute','flute.jpg','cold','champagne')
  ];
var ingArray = [ // This array holds objects for every ingredient the user has in their
		new ingredient('vodka', 'img/vodka.jpg', ''),
		new ingredient('rum', 'img/rum.jpg', ''),
		new ingredient('whiskey', 'img/whiskey.jpg', '')
];

function loadDrinks(){ // Adds all drinks stored in the database to the current instance.
	base.on("value", function(snapshot) {
  	console.log('Setting the user\'s drinks to the database drink contents!');
		var tempObj = snapshot.val();
		drinkArray = [tempObj.drinks];
	}, function (errorObject) {
  console.log("The firebase read failed: " + errorObject.code);
	});
};
function updateDrinks(){ // For all drink obects, if drinkName is not present in the database, add it.
	console.log('Updating the drinks database!')
	base.once("value", function(snapshot){
		var tempObj = snapshot.val(); // Puts data from the firebase into an object
		var match = false; // Haven't found a match for the drink yet, so this is false
		drinkArray.forEach(function(drink){ // For each of the user's drinks
			for (var cloudDrink in tempObj.drinks){ // For each drink in the firebase
				if (drink.drinkName === tempObj.drinks[cloudDrink].drinkName){match = true;} // If there's a match, set match = true
			}
			if (match){ // if maych is true, it matched one of the drinks in the database
				console.log(drink.drinkName + ' is already in the database!') // and so already exists
			} else { // otherwise, this must be a new drink
				console.log('User submitted a new drink: ' + drink.drinkName + ', adding it to the database.');
				drinksDir.push(drink); // so add it to the database
			}
			match = false; // reset match before returning to the drinkArray forEach
		})
	})
};
function loadIngredients(){ // Adds all ingredients stored in local-data to the current instance.
	var tempArray = JSON.parse(localStorage.getItem('ingData'));
	if (tempArray){
		console.log('Getting ingredient info from local storage..')
		var ingArray = tempArray;
	} else {
		console.log('No local ingredient data found!');
	}
};
function updateIngredients(){ // For all ingredients, if ingredient is not present in local storage, add it.
	console.log('Updating local ingredient data..')
	localStorage.setItem('ingData', JSON.stringify(ingArray));
};
function delDrink(drinkID){ // Removes drink with a drinkName string matching the drinkName argument.
	var tempArray = drinkArray
	base.once("value", function(snapshot){
		var tempObj = snapshot.val();
		for (var cloudDrink in tempObj.drinks){
			if (drinkID === tempObj.drinks[cloudDrink].drinkName){
				console.log('Deleting ' + drinkID + ' from the firebase..')
				delete tempObj.drinks[cloudDrink];
				base.set(tempObj);
			}
		}
	})
	drinkArray.forEach(function(drink, indexNum){
		if (drinkID === drink.drinkName){
			console.log('Deleting ' + drinkID + ' from the drinks array..')
			drinkArray.splice(indexNum, 1);
			console.log(drinkArray);
		}
	})
};

function delIngredient(ingID){ // Removes ingredient with a string matching ingName from the user's local data.
	ingArray.forEach(function(ingredient, indexNum){
		if (ingID === ingredient.ingName){
			ingArray.splice(indexNum, 1);
			console.log('Deleting ' + ingID + ' from local storage..')
		}
		localStorage.setItem('ingData', JSON.stringify(ingArray));
	})
};

// drinksDir.set(drinkArray);
// loadDrinks();
// updateDrinks();
// loadIngredients();
// updateIngredients();

// delDrink('Screwdriver');
// delIngredient('whiskey');
