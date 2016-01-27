'use strict';
var userIngredients = ['Orange juice','Vodka','Whiskey'];
var sortRes = [];

function compareIngredients(ingredients,drinks){
  for(var l=0; l < drinks.length; l++){
    drinks[l].percentMatch = 0;
    drinks[l].ingMatch = [];
    drinks[l].ingMismatch = [];
    drinks[l].match = 0;
  }

  var sort = [];
  for(var i = 0; i < drinks.length; i++){
      for(var j = 0; j < ingredients.length; j++){
        for(var k = 0; k < drinks[i].ingredients.length; k++){
          if(ingredients[j].toLowerCase() === drinks[i].ingredients[k][0].toLowerCase()){
            drinks[i].match += 1;
            drinks[i].ingMatch.push(drinks[i].ingredients[k][0]);
          } else if(k > j && drinks[i].ingMismatch.indexOf(drinks[i].ingredients[k][0]) === -1){
            drinks[i].ingMismatch.push(drinks[i].ingredients[k][0]);
          }
        }
        drinks[i].percentMatch = drinks[i].match / drinks[i].ingredients.length;
      }
      if(drinks[i].ingMatch.indexOf(drinks[i].ingredients[0][0]) === -1){
        drinks[i].ingMismatch.push(drinks[i].ingredients[0][0]);
      }
  }
  return drinks;
}

function sortByMatch(drinks,amount){
  var drinkSort = [];
  if(amount){
    for(var i = 0; i < amount; i++){
      var drinkSelect = Math.floor(Math.random() * drinkArray.length);
      drinkSort.push([drinkSelect,drinks[i].percentMatch]);
    }
    drinkSort.sort(function(a,b){return b[1]-a[1]});
  } else{
    for(var i = 0; i < drinks.length; i++){
      drinkSort.push([i,drinks[i].percentMatch]);
    }
    drinkSort.sort(function(a,b){return b[1]-a[1]});
  }
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
    var headingEl = document.createElement('h4');
    headingEl.setAttribute('id','images'+i);
    var matchEl = document.createElement('p');
    var mismatchEl = document.createElement('p');
    matchEl.setAttribute('id', 'match');
    mismatchEl.setAttribute('id', 'mismatch');
    matchEl.textContent = drinks[sortedResults[i][0]].ingMatch.join(', ');
    mismatchEl.textContent = drinks[sortedResults[i][0]].ingMismatch.join(', ');
    imageEl.src='img/'+ drinks[sortedResults[i][0]].imageProperty;
    headingEl.textContent = drinks[sortedResults[i][0]].drinkName;
    drinkItems.appendChild(headingEl);
    var test = document.getElementById('images'+i);
    test.appendChild(imageEl);
    drinkItems.appendChild(matchEl);
    drinkItems.appendChild(mismatchEl);
  }
}

function expandRecipe (sortedResults){
  var recipe = [];
  for(var i = 0; i < sortedResults.length; i++){
    recipe.push(document.getElementById('result'+i));
    recipe[i].addEventListener('click', handleRecipe)
  }
}
function handleRecipe(){
  var num = this.id.match(/\d+/);
  if(document.getElementById('recipe'+num) && this.childElementCount >=4){
    var removeEl = this;
    removeEl.removeChild(removeEl.lastChild);
  }
  else{
    var divEl = document.createElement('div');
    divEl.setAttribute('id','recipe'+num);
    divEl.className += 'recipe';
    this.appendChild(divEl);
    displayRecipe(num)
  }
}

function displayRecipe(num){
  var recipeEl = document.getElementById('recipe'+num)
  var h4El = document.createElement('h4');
  h4El.textContent = drinkArray[sortRes[num][0]].drinkName;
  recipeEl.appendChild(h4El);
  var ulEl = document.createElement('ul');
  for(var i = 0; i < drinkArray[sortRes[num][0]].ingredients.length; i++){
    var liEl = document.createElement('li')
    liEl.textContent = drinkArray[sortRes[num][0]].ingredients[i][0] + ': ' + drinkArray[sortRes[num][0]].ingredients[i][1];
    ulEl.appendChild(liEl);
  }
  recipeEl.appendChild(ulEl);
}

function screenedDrinks(drinks,category){
  var drinksScreened = [];
  for(var i = 0; i < drinks.length; i++){
    if(drinks[i].baseLiquior.toLowerCase() === category.toLowerCase()){
      drinksScreened.push(drinks[i])
    }
  }
  return drinksScreened;
}

function clearDrinks(){
  var clearEl = document.getElementById('drinkResults')
  while(clearEl.firstChild){
    clearEl.removeChild(clearEl.firstChild);
  }
}

function byIngredient(){
  clearDrinks();
  compareIngredients(userIngredients, drinkArray);
  sortRes = sortByMatch(drinkArray);
  displayResults(sortRes,drinkArray);
  expandRecipe(sortRes);
}
function randomDrink(){
  var drinkSelect = Math.floor(Math.random() * drinkArray.length);
  clearDrinks();
  compareIngredients(userIngredients, drinkArray);
  sortRes = sortByMatch(drinkArray,1);
  displayResults(sortRes,drinkArray);
  expandRecipe(sortRes);
}

function screener(){
  clearDrinks();
  var screenBy = screenerSelect.value;
  var drinksScreened = screenedDrinks(drinkArray,screenBy);
  drinksScreened = compareIngredients(userIngredients, drinksScreened);
  sortRes = sortByMatch(drinksScreened);
  displayResults(sortRes,drinksScreened);
  expandRecipe(sortRes);
}



var drinkByIngredients = document.getElementById('drinkByIng');
drinkByIngredients.addEventListener('click', byIngredient);
var clearEmOut = document.getElementById('clear');
clearEmOut.addEventListener('click', clearDrinks);
var randomTrigger = document.getElementById('random');
randomTrigger.addEventListener('click', randomDrink);
var screenerSelect = document.getElementById('selector');
screenerSelect.addEventListener('change', screener);
