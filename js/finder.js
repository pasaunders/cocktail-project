'use strict';
function compareIngredients(ingredients,drinks){
  for(var l=0; l < drinks.length; l++){
    drinks[l].percentMatch = 0;
    drinks[l].match = 0;
  }
  for(var i = 0; i < drinks.length; i++){
      for(var j = 0; j < ingredients.length; j++){
        for(var k = 0; k < drinks[i].ingredients.length; k++){
          if(ingredients[j].ingName.toLowerCase() === drinks[i].ingredients[k][0].toLowerCase()){
            drinks[i].match += 1;
          }
        }
        drinks[i].percentMatch = drinks[i].match / drinks[i].ingredients.length;
      }
  }
  return drinks;
}

function sortByMatch(drinks,amount){
  var drinkSort = [];
  var sortedDrinkArray = [];
  console.log(amount)
  if((amount > 0 || amount =='random') && amount <=drinks.length){
    if(amount === 1){
      console.log('random');
        var drinkSelect = Math.floor(Math.random() * drinkArray.length);
        drinkSort.push([drinkSelect,drinks[drinkSelect].percentMatch]);
        drinkSort.sort(function(a,b){return b[1]-a[1]});
      } else {
        for(var i = 0; i < amount; i++){
          drinkSort.push([i,drinks[i].percentMatch]);
        }
        drinkSort.sort(function(a,b){return b[1]-a[1]});
      }
  } else{
    for(var i = 0; i < drinks.length; i++){
      drinkSort.push([i,drinks[i].percentMatch]);
    }
    drinkSort.sort(function(a,b){return b[1]-a[1]});
  }
  for(var i=0; i < drinkSort.length; i++){
    sortedDrinkArray.push(drinks[drinkSort[i][0]]);
  }
  return sortedDrinkArray;
}

function screenedDrinks(drinks,liquor,category){
  var drinksScreened = [];
  if(liquor !== 'default' && category !=='default'){
    for(var i = 0; i < drinks.length; i++){
      var countTwoMatch = 0;
      var countOneMatch = 0;
      for(var j = 0; j < drinks[i].category.length; j++){
        console.log(drinks[i].baseLiquior, drinks[i].category[j], i, j, count)
        if (drinks[i].baseLiquior.toLowerCase() === liquor.toLowerCase() && drinks[i].category[j].toLowerCase() === category.toLowerCase() && countTwoMatch === 0){
            drinksScreened.push(drinks[i]);}
            count += 1;
          }
      }
  } else if (liquor !== 'default'){
    for(var i = 0; i < drinks.length; i++){
      if (drinks[i].baseLiquior.toLowerCase() === liquor.toLowerCase()){
        drinksScreened.push(drinks[i]);}
    }
  } else if (category !== 'default'){
  for(var i = 0; i < drinks.length; i++){
    var count = 0;
    for(var j = 0; j < drinks[i].category.length; j++){
      if(drinks[i].category[j].toLowerCase() === category.toLowerCase() && countOneMatch === 0){
      drinksScreened.push(drinks[i]);
      count += 1;}
      }
    }
  }
  return drinksScreened;
}

function clearDrinks(){
  if(layout.div.childNodes[0]){layout.div.removeChild(layout.content);}
}

function byIngredient(){
  compareIngredients(ingArray, drinkArray);
  sortRes = sortByMatch(drinkArray,amount);
  refreshDrinks(sortRes);
}

function randomDrink(){
  var drinkSelect = Math.floor(Math.random() * drinkArray.length);
  compareIngredients(ingArray, drinkArray);
  sortRes = sortByMatch(drinkArray,1);
  refreshDrinks(sortRes);
}

function screener(){
  var screenBy = screenerSelect.value;
  var categorizeBy = categorySelect.value;
  var drinksScreened = screenedDrinks(drinkArray,screenBy,categorizeBy);
  drinksScreened = compareIngredients(ingArray, drinksScreened);
  sortRes = sortByMatch(drinksScreened,amount);
  refreshDrinks(sortRes);
}

function pullLocalStorage(){
  var ingData = localStorage.getItem('ingData');
  if (ingData) {
    ingArray = JSON.parse(ingData);
  } else {
    console.log('Local storage empty!! Initializing!');
    localStorage.setItem('ingData', JSON.stringify(ingArray));
  }
}

var amount = 'all';
function displayAmount(){
  amount = parseInt(resultAmount.value);
}

loadDrinks();
pullLocalStorage();

var sortRes = [];
var drinkByIngredients = document.getElementById('drinkByIng');
drinkByIngredients.addEventListener('click', byIngredient);
var clearEmOut = document.getElementById('clear');
clearEmOut.addEventListener('click', clearDrinks);
var randomTrigger = document.getElementById('random');
randomTrigger.addEventListener('click', randomDrink);
var screenerSelect = document.getElementById('selector');
screenerSelect.addEventListener('change', screener);
var categorySelect = document.getElementById('category');
categorySelect.addEventListener('change', screener);
var displayQuantity = document.getElementById('resultAmount');
displayQuantity.addEventListener('change', displayAmount);
