'use strict';

var ingredientsEntry = document.getElementById('ingredients-entry');
ingredientsEntry.addEventListener('submit', enterIngredientSubmit);
var cocktailEntry = document.getElementById('cocktail-entry');
cocktailEntry.addEventListener('submit', enterCocktailSubmit);

function enterIngredientSubmit(event) {  //am I properly passing information thorugh here?
  var ingredientsAvailable = event.target.ingredientList.value.split(', '); //this should take the text box entry and split it at each comma into individual strings.
  event.target.ingredientList.value = null;
  for (var i = 0; i < ingredientsAvailable.length; i++) {
    var newIngredient = new ingredient(ingredientsAvailable[i]);
    ingArray.push(newIngredient);
  }
  updateIngredients();
  refreshIndex();
}


function enterCocktailSubmit(event) {
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
  var drinkIngredientArray = [];
  for (var i = 0; i < ingredientArray.length; i++) {
    drinkIngredientArray.push([]);
    drinkIngredientArray[i][0] = ingredientArray[i];
    drinkIngredientArray[i][1] = amountArray[i];
  }
  var newDrink = new drinkRecipe (name.value, drinkIngredientArray, glassware.value, 'img/' + glassware.value + '.jpg', categoryValue, liquor.value, instructions.value);
  if (!ingredientArray[0]) {
    return alert('Please enter ingredients');
  }
  if (!categoryValue[0]) {
    return alert('We need a category. At least choose other.')
  }
  drinkArray.push(newDrink);
  updateDrinks();
  var fieldReset = document.getElementById('cocktail-entry');
  fieldReset.reset();
}
refreshIndex();
