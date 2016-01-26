'use strict';

var ingredientsEntry = document.getElementById('ingredients-entry');
ingredientsEntry.addEventListener('submit', enterIngredientSubmit); //this should listen for the submit button, then grab and send the text box contents to the function.

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
