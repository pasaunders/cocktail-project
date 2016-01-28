function drinkRecipe(drinkName, ingredients, glass, image, category, liquor, recipe){
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
	this.drinkRecipe = recipe;
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

function loadDrinks(){ // Adds all drinks stored in the database to the current instance.
	base.on("value", function(snapshot) {
  	console.log('Setting the user\'s drinks to the database drink contents!');
		var tempObj = snapshot.val();
		drinkArray = [];
		for (var cloudDrink in tempObj.drinks){
			drinkArray.push(tempObj.drinks[cloudDrink]);
		}
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
				if (drink.drinkName === tempObj.drinks[cloudDrink].drinkName){
					match = true;
					if (drink.imageProperty !== tempObj.drinks[cloudDrink].imageProperty){
						var modRef = drinksDir.child(cloudDrink);
						modRef.update({imageProperty: drink.imageProperty});
						console.log('User changed the image for ' + drink.drinkName);
					};
					// if (drink.drinkRecipe !== tempObj.drinks[cloudDrink].drinkRecipe){
					// 	var modRef = drinksDir.child(cloudDrink);
					// 	modRef.update({drinkRecipe: drink.drinkRecipe});
					// 	console.log('User changed the recipe for ' + drink.drinkName);
					// };
					// if (drink.ingredients !== tempObj.drinks[cloudDrink].ingredients){
					// 	var modRef = drinksDir.child(cloudDrink);
					// 	modRef.update({ingredients: drink.ingredients});
					// 	console.log('User changed the ingredients for ' + drink.drinkName);
					// };
				} // If there's a match, set match = true
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
		console.log(tempArray);
		console.log('Getting ingredient info from local storage..')
		ingArray = tempArray;
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
			if (drinkID.toLowerCase() === tempObj.drinks[cloudDrink].drinkName.toLowerCase()){
				console.log('Deleting ' + drinkID + ' from the firebase..')
				delete tempObj.drinks[cloudDrink];
				base.set(tempObj);
			}
		}
	})
	drinkArray.forEach(function(drink, indexNum){
		if (drinkID.toLowerCase() === drink.drinkName.toLowerCase()){
			console.log('Deleting ' + drinkID + ' from the drinks array..')
			drinkArray.splice(indexNum, 1);
			console.log(drinkArray);
		}
	})
};

function delIngredient(ingID){ // Removes ingredient with a string matching ingName from the user's local data.
	ingArray.forEach(function(ingredient, indexNum){
		if (ingID.toLowerCase() === ingredient.ingName.toLowerCase()){
			ingArray.splice(indexNum, 1);
			console.log('Deleting ' + ingID + ' from local storage..')
		}
		localStorage.setItem('ingData', JSON.stringify(ingArray));
	})
};

// drinksDir.set(drinkArray);
loadDrinks();
// updateDrinks();
loadIngredients();
// updateIngredients();

// delDrink('screwdRiver');
// delIngredient('wHIskey');
