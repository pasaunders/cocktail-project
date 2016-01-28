var button = document.getElementById('trivButton');
var result1 = document.getElementById('res1');
var result2 = document.getElementById('res2');
var result3 = document.getElementById('res3');
var result4 = document.getElementById('res4');
var result5 = document.getElementById('res5');
var counter = 0;

button.addEventListener('click', function() { 
prompt('Cocktail Triva! These will be Truth or False questions!');
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
});

function questionOne(){
  var answer1 = prompt('Question #1: A person cannot die from alcohol poisoning in one sitting, it takes months of heavy drinking for it to kill them.');
  if(answer1.toUpperCase() === 'F' || answer1.toUpperCase() === 'FALSE') {
    res1.textContent = "You're correct!";
    counter += 1;
  } else if (answer1.toUpperCase() === 'T' || answer1.toUpperCase()=== 'TRUE') {
    res1.textContent = 'Wrong, next question!';
  } else {
    res1.textContent = 'Wrong, out of scope!';
  }
}

function questionTwo(){
  var answer2 = prompt('Question #2: Some foods can absorb alcohol.');
  if(answer2.toUpperCase() === 'F' || answer2.toUpperCase() === 'FALSE') {
    res2.textContent = "You're right. Food can delay alcohol absorption, but wont prevent it from getting into the bloodstream";
    counter += 1;
  } else if (answer2.toUpperCase() === 'T' || answer2.toUpperCase() === 'TRUE') {
    res2.textContent = 'Wrong answer, next question!';
  } else {
    res2.textContent = 'Wrong, out of scope!';
  }
}

function questionThree(){
  var answer3 = prompt('Question #3: Alcohol affects men and women differently.');
  if(answer3.toUpperCase() === 'T' || answer3.toUpperCase() === 'TRUE') {
    res3.textContent = 'Correct, body weight differences impact the rate alcohol is metabolized.';
    counter += 1;
  } else if (answer3.toUpperCase() === 'F' || answer3.toUpperCase() === 'FALSE') {
    res3.textContent = 'Wrong, next question!';
  } else {
    res3.textContent = 'Wrong, out of scope!';
  }
}

function questionFour(){
  var answer4 = prompt('Question #4: The Manhattan cocktail contains vodka.');
  if(answer4.toUpperCase() === 'F' || answer4.toUpperCase() === 'FALSE') {
    res4.textContent = "You're correct!";
    counter += 1;
  } else if (answer4.toUpperCase() === 'T' || answer4.toUpperCase() === 'TRUE') {
    res4.textContent = 'Wrong!';
  } else {
    res4.textContent = 'Wrong, out of scope!';
  }
}

function questionFive(){
  var answer5 = prompt('Question #5: A Bloody Mary cocktail contains both Worcestershire Sauce and Tomato Sauce.');
  if(answer5.toUpperCase() === 'F' || answer5.toUpperCase() === 'FALSE') {
    res5.textContent = "You're correct!";
    counter += 1;
  } else if (answer5.toUpperCase() === 'T' || answer5.toUpperCase() === 'TRUE') {
    res5.textContent ='Wrong!';
  } else {
    res5.textContent ='Wrong, out of scope!';
  }
}

