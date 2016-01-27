var layout = {
  div: document.createElement('div'),
  content: document.createElement('div'),
}
function renderFinder(){
  layout.div.className = 'bodyDiv';
  layout.content.className = 'contentDiv';
  document.body.appendChild(layout.div);
  layout.div.appendChild(layout.content);
}
function makeCell(){
  var cell = document.createElement('div');
  cell.className = 'drinkDiv';
  layout.content.appendChild(cell);
  return cell;
}
function divCell(target){
  var divide = document.createElement('div');
  divide.className = 'innerDiv';
  target.appendChild(divide);
  return divide;
}
function renderDrink(drinkObj){
  var img = document.createElement('img');
  img.setAttribute('src', drinkObj.imageProperty);
  img.className = 'ingIcon';
  var cell = makeCell();
  var idCont = divCell(cell);
  var title = document.createElement('p');
  title.textContent = drinkObj.drinkName;
  title.className = 'ingTitle';
  idCont.appendChild(img);
  idCont.appendChild(title);

  var haveIng = divCell(cell);
  var haveText = document.createElement('p');
  haveText.className = 'ingTitle'
  haveText.textContent = 'Matching Ingredients:';
  haveIng.appendChild(haveText);
  var missIng = divCell(cell);
  var missText = document.createElement('p');
  missText.className = 'ingTitle'
  missText.textContent = 'Missing Ingredients:'
  missIng.appendChild(missText);

  var missMatch = getMissMatch(drinkObj);
  var miss = document.createElement('p');
  var match = document.createElement('p');
  miss.textContent = missMatch.missing.toString();
  match.textContent = missMatch.matching.toString();
  miss.className = 'missingText';
  match.className = 'matchingText';
  missIng.appendChild(miss);
  haveIng.appendChild(match);

  var delCont = divCell(cell);
  var delButton = document.createElement('img');
  delButton.className = 'delButton';
  delButton.setAttribute('src', 'img/delIcon.png');
  delButton.addEventListener('click', function(){
    layout.content.removeChild(cell);
    // delDrink(drinkObj.drinkName);
  })
  delCont.appendChild(delButton);


  imgListener(img, drinkObj, cell);
}
function imgListener(img, drinkObj, cell){
  var imgOpen = false;
  var descCell;
  var descTitle;
  img.addEventListener('click', function(){
    if (!imgOpen){
      imgOpen = true;
      descCell = divCell(cell);
      descCell.className = 'descCell';
      descTitle = document.createElement('p');
      descTitle.textContent = 'Recipe Description:'
      descTitle.className = 'ingTitle';
      descCell.appendChild(descTitle);

      var description = document.createElement('p');
      description.textContent = drinkObj.drinkRecipe;
      description.className = 'descText';
      descCell.appendChild(description);
    } else {
      cell.removeChild(descCell);
      imgOpen = false;
    }
  })
}
function refreshDrinks(array){
  if(layout.div.childNodes[0]){layout.div.removeChild(layout.content);}
  layout.content = document.createElement('div');
  renderFinder();
  array.forEach(function(drinkID){
    renderDrink(drinkID);
  })
}
function getMissMatch(drinkObj){
  var ingmatch = {matching: [], missing: []};
  drinkObj.ingredients.forEach(function(ingArr){
    var match = false
    ingArray.forEach(function(ingObj){
      if (ingArr[0].toLowerCase() === ingObj.ingName.toLowerCase()){match = true;}
    })
    if (match){
      ingmatch.matching.push(ingArr[0]);
    } else {
      ingmatch.missing.push(ingArr[0]);
    }
  })
  return ingmatch
}

refreshDrinks(drinkArray);
