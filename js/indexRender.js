var layout = {
  div: document.createElement('div'),
  content: document.createElement('div'),
}
function renderIndex(){
  layout.div.className = 'bodyDiv';
  layout.content.className = 'contentDiv';
  document.body.appendChild(layout.div);
  layout.div.appendChild(layout.content);
}
function makeCell(){
  var cell = document.createElement('div');
  cell.className = 'ingredientDiv';
  layout.content.appendChild(cell);
  return cell;
}
function divCell(target){
  var divide = document.createElement('div');
  divide.className = 'innerDiv';
  target.appendChild(divide);
  return divide;
}
function renderIng(ingredientID){
  var img = document.createElement('img');
  img.setAttribute('src', ingredientID.image);
  img.className = 'ingIcon';

  var cell = makeCell();
  var idCont = divCell(cell);
  var title = document.createElement('p');
  title.textContent = ingredientID.ingName;
  title.className = 'ingTitle';
  idCont.appendChild(img);
  idCont.appendChild(title);

  var delCont = divCell(cell);
  var delButton = document.createElement('img');
  delButton.className = 'delButton';
  delButton.setAttribute('src', 'img/delIcon.png');

  delButton.addEventListener('click', function(){
    layout.content.removeChild(cell);
    delIngredient(ingredientID.ingName);
  })

  delCont.appendChild(delButton);

  imgListener(img, ingredientID, cell);
}
function imgListener(img, ingredientID, cell){
  var imgOpen = false;
  var igmEl;
  var subEl;
  img.addEventListener('click', function(){
    if (!imgOpen){
      imgOpen = true;
      imgEl = document.createElement('input');
      imgEl.type = 'text';
      imgEl.value = 'Enter ' + ingredientID.ingName + ' image location.';
      cell.appendChild(imgEl);
      subEl = document.createElement('input')
      subEl.setAttribute('type', 'submit');
      subEl.setAttribute('value', 'Submit');
      subEl.addEventListener('click', function(){
        ingredientID.image = imgEl.value
        imgEl.value = '';
        updateIngredients();
        refreshIndex();
      })
      cell.appendChild(subEl);
    } else {
      cell.removeChild(subEl);
      cell.removeChild(imgEl);
      imgOpen = false;
    }
  })
}

function refreshIndex(){
  if(layout.div.childNodes[0]){layout.div.removeChild(layout.content);}
  layout.content = document.createElement('div');
  renderIndex();
  ingArray.forEach(function(ingID){
    renderIng(ingID);
  })
}

refreshIndex();
