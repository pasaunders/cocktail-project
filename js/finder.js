'use strict';

var userIngredients = ['orange juice','vodka','whiskey'];


function compareIngredients(ingredients,drinks){
  for(var l; l < drinks.length; l++){
    drinks[l].percentMatch = 0;
  }
  var sort = [];
  for(var i = 0; i < drinks.length; i++){
      for(var j = 0; j < ingredients.length; j++){
        for(var k = 0; k < drinks[i].ingredients.length; k++){
          if(ingredients[j].toLowerCase() === drinks[i].ingredients[k][0].toLowerCase()){
            drinks[i].match += 1;
          }
        }
        drinks[i].percentMatch = drinks[i].match / drinks[i].ingredients.length;
      }
  }
}
compareIngredients(userIngredients, drinks);

var sortedResults = sortByMatch(drinks);

function sortByMatch(drinks){
  var drinkSort = [];
  for(var i = 0; i < drinks.length; i++){
    drinkSort.push([i,drinks[i].percentMatch]);
  }
  drinkSort.sort(function(a,b){return b[1]-a[1]});
  return drinkSort;
}

function displayResults(sortedResults,drinks){
  var drinkDisplay = document.getElementById('drinkResults');
  console.log(drinkDisplay);
  var resultArticle = document.createElement('article');
  for (var i =0; i < sortedResults.length; i++){
    resultArticle.setAttribute("id", 'result' + i);
    drinkDisplay.appendChild(resultArticle);
    var drinkItems = document.getElementById('result'+i);
    var imageEl = document.createElement('img');
    var headingEl = document.createElement('h4');
    imageEl.src='img/'+ drinks[sortedResults[i][0]].imageProperty;
    headingEl.textContent = drinks[sortedResults[i][0]].name;
    drinkItems.appendChild(headingEl);
    drinkItems.appendChild(imageEl);
  }
}
displayResults(sortedResults,drinks);


// ingMatch
// ingMismatch
