'use strict';

var userIngredients = ['orange juice','vodka','whiskey'];


function compareIngredients(ingredients,drinks){
  for(var l; l < drinks.length; l++){
    drinks[l].percentMatch = 0;
  }
  var sort = [];
  for(var i = 0; i < drinks.length; i++){
    var count = 0;
      for(var j = 0; j < ingredients.length; j++){
        for(var k = 0; k < drinks[i].ingredients.length; k++){
          if(ingredients[j].toLowerCase() === drinks[i].ingredients[k][0].toLowerCase()){
            drinks[i].match += 1;
            drinks[i].ingMatch.push(drinks[i].ingredients[k][0]);
            count += 1;
          } else if(k > j && drinks[i].ingMismatch.indexOf(drinks[i].ingredients[k][0]) === -1){
            drinks[i].ingMismatch.push(drinks[i].ingredients[k][0]);
            count += 1;
          }
        }
        drinks[i].percentMatch = drinks[i].match / drinks[i].ingredients.length;
      }
  }
}
compareIngredients(userIngredients, drinkArray);

var sortedResults = sortByMatch(drinkArray);

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
  for (var i =0; i < sortedResults.length; i++){
    var resultArticle = document.createElement('article');
    resultArticle.setAttribute('id', 'result' + i);
    drinkDisplay.appendChild(resultArticle);
    var drinkItems = document.getElementById('result'+i);
    var imageEl = document.createElement('img');
    console.log(test);
    var headingEl = document.createElement('h4');
    headingEl.setAttribute('id','images'+i);
    var matchEl = document.createElement('p');
    var mismatchEl = document.createElement('p');
    matchEl.setAttribute('id', 'match');
    mismatchEl.setAttribute('id', 'mismatch');
    matchEl.textContent = drinks[sortedResults[i][0]].ingMatch;
    mismatchEl.textContent = drinks[sortedResults[i][0]].ingMismatch;
    imageEl.src='img/'+ drinks[sortedResults[i][0]].imageProperty;
    headingEl.textContent = drinks[sortedResults[i][0]].drinkName;
    drinkItems.appendChild(headingEl);
    var test = document.getElementById('images'+i);
    test.appendChild(imageEl);
    drinkItems.appendChild(matchEl);
    drinkItems.appendChild(mismatchEl);
  }
}
displayResults(sortedResults,drinkArray);


// ingMatch
// ingMismatch
