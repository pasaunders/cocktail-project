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
  console.log(drinkObj.imageProperty);
  if (!drinkObj.imageProperty){img.setAttribute('src', 'img/missingDrink.jpg');}
  img.className = 'ingIcon';
  var cell = makeCell();
  var idCont = divCell(cell);
  var title = document.createElement('p');
  title.textContent = drinkObj.drinkName;
  title.className = 'ingTitle';
  idCont.appendChild(img);
  idCont.appendChild(title);

  var mismatchCell = divCell(cell)
  mismatchCell.className = 'mismatch';

  var haveIng = divCell(mismatchCell);
  haveIng.className = 'misCell';
  var haveText = document.createElement('p');
  haveText.className = 'ingTitle'
  haveText.textContent = 'Matching Ingredients:';
  haveIng.appendChild(haveText);
  var missIng = divCell(mismatchCell);
  missIng.className = 'misCell';
  var missText = document.createElement('p');
  missText.className = 'ingTitle'
  missText.textContent = 'Missing Ingredients:'
  missIng.appendChild(missText);

  var missMatch = getMissMatch(drinkObj);
  var miss = document.createElement('p');
  var match = document.createElement('p');
  miss.textContent = missMatch.missing.join(', ');
  match.textContent = missMatch.matching.join(', ');
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
  var bufferCell;
  img.addEventListener('click', function(){
    if (!imgOpen){
      imgOpen = true;

      bufferCell = divCell(cell);
      bufferCell.className = 'buffer';

      var ingCell = divCell(bufferCell); // Render Ingredients
      ingCell.className = 'ingCell';
      var ingTitle = document.createElement('p');
      ingTitle.textContent = 'Ingredients:'
      ingTitle.className = 'ingTitle';
      ingCell.appendChild(ingTitle);
      var ingList = document.createElement('ul');
      ingList.className = 'descText';
      ingCell.appendChild(ingList);
      fillIngList(ingList, drinkObj); // Fill ingredient list

      var descCell = divCell(bufferCell); // Render Description
      descCell.className = 'descCell';
      var descTitle = document.createElement('p');
      descTitle.textContent = 'Recipe Description:'
      descTitle.className = 'ingTitle';
      descCell.appendChild(descTitle);
      var description = document.createElement('p');
      description.textContent = drinkObj.drinkRecipe;
      description.className = 'descText';
      descCell.appendChild(description);

      imgEl = document.createElement('input'); // Render image input box
      imgEl.type = 'text';
      imgEl.value = 'Enter new ' + drinkObj.drinkName + ' image location.';
      descCell.appendChild(imgEl);
      subEl = document.createElement('input')
      subEl.setAttribute('type', 'submit');
      subEl.setAttribute('value', 'Submit');
      subEl.addEventListener('click', function(){
        drinkObj.imageProperty = imgEl.value
        imgEl.value = '';
        updateDrinks();
        refreshDrinks(drinkArray);
      })
      descCell.appendChild(subEl);

    } else {
      cell.removeChild(bufferCell);
      imgOpen = false;
    }
  })
}
function fillIngList(target, objRef){
  objRef.ingredients.forEach(function(ingArrRef){
    var listEntry = document.createElement('li');
    listEntry.textContent = ingArrRef[0] + ', ' + ingArrRef[1];
    target.appendChild(listEntry);
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

// refreshDrinks(drinkArray);
