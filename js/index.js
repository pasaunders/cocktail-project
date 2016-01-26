'use strict';

var ingredientsEntry = document.getElementById('ingredients-entry');
ingredientsEntry.addEventListener('submit', enterIngredientSubmit); //this should listen for the submit button, then grab and send the text box contents to the function.

function enterIngredientSubmit(event) {  //am I properly passing information thorugh here?
  console.log(event);
  event.preventDefault();
  var ingredientsAvailable = ingredientList.split(','); //this should take the text box entry and split it at each comma into individual strings.
  console.log(ingredientsAvailable);
}
