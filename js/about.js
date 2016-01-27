var button = document.getElementById('trivButton');
var result1 = document.getElementById('res1');
var result2 = document.getElementById('res2');
var counter = 0;

button.addEventListener('click', function() { 
prompt('Cocktail Triva! These will be Truth or False questions!');
questionOne();
questionTwo();
questionThree();
});

function questionOne(){
  var answer1 = prompt('Question #1: A person cannot die from alcohol poisoning in one sitting, it takes months of heavy drinking for it to kill them.');
  if(answer1.toUpperCase() === 'F' || answer1.toUpperCase() === 'FALSE') {
    res1.textContent = "You're correct!";
    counter += 1;
  } else if (answer1.toUpperCase() === 'T' || answer1.toUpperCase()=== 'TRUE') {
    prompt('Wrong, next question!');
  } else {
    prompt('Wrong, out of scope!');
  }
}

function questionTwo(){
  var answer2 = prompt('Some foods can absorb alcohol.');
  if(answer2.toUpperCase() === 'F' || answer2.toUpperCase() === 'FALSE') {
    prompt('');
    counter += 1;
  } else if (answer2.toUpperCase() === 'T' || answer2.toUpperCase() === 'TRUE') {
    prompt('');
  } else {
    prompt('Wrong, out of scope!');
  }
}

function questionThree(){
  var answer3 = prompt('Alchol affects men and women differently.');
  if(answer3.toUpperCase() === 'T' || answer3.toUpperCase() === 'TRUE') {
    prompt('');
    counter += 1;
  } else if (answer3.toUpperCase() === 'F' || answer3.toUpperCase() === 'FALSE') {
    prompt('');
  } else {
    prompt('Wrong, out of scope');
  }
}


