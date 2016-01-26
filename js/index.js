'use strict';

var submitIngredients = document.getElementById('submitIngredients');
submitIngredients.addEventListener('submit', enterIngredientSubmit);

function enterIngredientSubmit(event) {
  console.log(event);
  event.preventDefault();
  var ingredientList = event.split(',');
  console.log(ingredientList);
}
