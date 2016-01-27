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
}


function enterCocktailSubmit(event) {
  event.preventDefault();

  var ingredient = document.getElementsByClassName('cocktailIngredient'); //these lines pull data from a class of DOM entries, then push the data to the defined arrays.
  var amount = document.getElementsByClassName('ingredientAmount');
  var ingredientArray = [];
  var amountArray = [];
  Array.prototype.forEach.call(ingredient, function(e) { ingredientArray.push(e.value) });
  Array.prototype.forEach.call(amount, function(e) { amountArray.push(e.value)});

  event.target.cocktailIngredient.value = null;
  event.target.ingredientAmount.value = null;
  for (var i = 0; i < ingredientArray.length; i++) {
    //push ingredientArray value [i] to the recipe object here.
    //push amountArray value [i]  to te recipe object here.
  }
}
