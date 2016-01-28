'use strict';

var ingredientsEntry = document.getElementById('ingredients-entry');
ingredientsEntry.addEventListener('submit', enterIngredientSubmit);
var cocktailEntry = document.getElementById('cocktail-entry');
cocktailEntry.addEventListener('submit', enterCocktailSubmit);

function enterIngredientSubmit(event) {  //am I properly passing information thorugh here?
  console.log(event.target.ingredientList.value);
  event.preventDefault();
  var ingredientsAvailable = event.target.ingredientList.value.split(', '); //this should take the text box entry and split it at each comma into individual strings.
  event.target.ingredientList.value = null;
  console.log(ingredientsAvailable);
  for (var i = 0; i < ingredientsAvailable.length; i++) {
    var newIngredient = new ingredient(ingredientsAvailable[i]);
    console.log(ingArray);
    ingArray.push(newIngredient);
  }
  updateIngredients();
  refreshIndex();
}


function enterCocktailSubmit(event) {
  console.log(event);
  event.preventDefault();
  var name = document.getElementById('cocktail-name');
  var ingredient = document.getElementsByClassName('cocktailIngredient');
  var amount = document.getElementsByClassName('ingredientAmount');
  var category = document.getElementsByClassName('category');
  var glassware = document.getElementById('glassware');
  var liquor = document.getElementById('base-liquor');
  var instructions = document.getElementById('cocktailInstructions');
  var categoryValue = [];
  for (var i = 0; i < category.length; i++) {
    if (category[i].checked) {
      categoryValue.push(category[i].value);
    }
  }
  console.log('categories chosen: ' + categoryValue);
  var ingredientArray = [];
  var amountArray = [];
  Array.prototype.forEach.call(ingredient, function(e) {
    if (e.value) {
      ingredientArray.push(e.value)
    }
  });
  Array.prototype.forEach.call(amount, function(e) {
    if (e.value) {
      amountArray.push(e.value)
    }
  });
  console.log(ingredientArray);
  console.log(amountArray);
  var drinkIngredientArray = [];
  for (var i = 0; i < ingredientArray.length; i++) {
    drinkIngredientArray.push([]);
    drinkIngredientArray[i][0] = ingredientArray[i];
    drinkIngredientArray[i][1] = amountArray[i];
  }
  console.log(drinkIngredientArray);
  var newDrink = new drinkRecipe (name.value, drinkIngredientArray, glassware.value, 'img/' + glassware.value + '.jpg', categoryValue, liquor.value, instructions.value);
  console.log(ingredientArray[1]);
  if (ingredientArray[1] === false) {
    console.log('no ingredients');
    return alert('Please enter ingredients');
  }
  drinkArray.push(newDrink);
  updateDrinks();
  var fieldReset = document.getElementById('cocktail-entry');
  fieldReset.reset();
}
refreshIndex();
