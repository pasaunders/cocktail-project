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
  console.log(drinkObj.imageProperty);
  img.setAttribute('src', drinkObj.imageProperty);
  img.className = 'ingIcon';
  var cell = makeCell();
  var idCont = divCell(cell);
  var title = document.createElement('p');
  title.textContent = drinkObj.drinkName;
  title.className = 'ingTitle';
  idCont.appendChild(img);
  idCont.appendChild(title);

  var delCont = divCell(cell);
  var delButton = document.createElement('img');
  delButton.className = 'delButton';
  delButton.setAttribute('src', 'img/delIcon.png');
  delButton.addEventListener('click', function(){
    layout.content.removeChild(cell);
    // delDrink(drinkObj.drinkName);
  })
  delCont.appendChild(delButton);

  var haveIng = divCell(cell);
  var haveText = document.createElement('p');
  haveText.className = 'ingTitle'
  haveText.textContent = 'Matched Ingredients:';
  haveIng.appendChild(haveText);
  var missIng = divCell(cell);
  var missText = document.createElement('p');
  missText.className = 'ingTitle'
  missText.textContent = 'Missing Ingredients:'
  missIng.appendChild(missText);

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
      descCell.className = descCell;
      descTitle = document.createElement('p');
      descTitle.textContent = 'Recipe Description:'
      descTitle.className = 'ingTitle';
      descCell.appendChild(descTitle);

      var description = document.createElement('p');
      description.textContent = drinkObj.drinkRecipe;
      descCell.appendChild(description);
    } else {
      cell.removeChild(descCell);
      cell.removeChild(descTitle);
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

refreshDrinks(drinkArray);
