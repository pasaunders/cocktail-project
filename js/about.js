var counter = 0;
var scoreBut = document.getElementById('scoreButton');
var score = document.getElementById('score');
 
var result1 = document.getElementById('res1');
var result1a = document.getElementById('res1a');
var answer1 = document.getElementById('ans1');

result1.addEventListener('click', function() {
    ans1.textContent = 'Wrong, next question!';
});
result1a.addEventListener('click', function() {
  ans1.textContent = "You're correct!"
    counter += 1;
});

var result2 = document.getElementById('res2');
var result2a = document.getElementById('res2a');
var answer2 = document.getElementById('ans2');

result2.addEventListener('click', function() {
    ans2.textContent = 'Wrong answer, next question!'
});
result2a.addEventListener('click', function() {
  ans2.textContent = "You're right. Food can delay alcohol absorption, but wont prevent it from getting into the bloodstream.";'Wrong answer, next question!'
    counter += 1;
});

var result3 = document.getElementById('res3');
var result3a = document.getElementById('res3a');
var answer3 = document.getElementById('ans3');

result3.addEventListener('click', function() {
    ans3.textContent = 'Correct, body weight differences impact the rate alcohol is metabolized.';
    counter += 1;
});
result3a.addEventListener('click', function() {
  ans3.textContent = 'Wrong, next question!';
});

var result4 = document.getElementById('res4');
var result4a = document.getElementById('res4a');
var answer4 = document.getElementById('ans4');

result4.addEventListener('click', function() {
    ans4.textContent = 'Wrong!';
});
result4a.addEventListener('click', function() {
  ans4.textContent = "You're correct!";
    counter += 1;
});

var result5 = document.getElementById('res5');
var result5a = document.getElementById('res5a');
var answer5 = document.getElementById('ans5');

result5.addEventListener('click', function() {
    ans5.textContent = 'Wrong!';
    counter += 1;
});
result5a.addEventListener('click', function() {
  ans5.textContent = "You're correct!";
});

scoreBut.addEventListener('click', function() {
  score.textContent = 'You got ' + counter + ' out of 5 right'
});

