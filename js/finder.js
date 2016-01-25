'use strict';
var userIngredients = ['vodka','orange juice', 'whiskey']


function compareIngredients(userIngredients, drinks){
  for(var l; l < drinks.length; l++){
    drinks[l].percentMatch = 0;
  }
  for(var i; i < userIngredients.length; i++){
      for(var j; j < drinks.length; j++){
        for(var k; k < drinks[j].ingredients.length; k++){
          if(userIngredients[i].toLowerCase() === drinks[j].ingredients[k][0].toLowerCase()){
            drinks[j].match =+ 1;
          }
        }
        drinks[j].percentMatch = drinks[j].match / drinks[j].ingredients.length;
      }
  }
}

compareIngredients(userIngredients,drinks);
