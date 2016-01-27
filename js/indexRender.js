var layout = {
  div: document.createElement('div'),
  content: document.createElement('div'),
}
function getSubstitutes(ingredientID){
  var subArray = [];
  ingredientID.substitutes.forEach(function(sub, iNum){
    ingArray.forEach(function(ingCabinet, indexNum){
      if (sub.toLowerCase() === ingCabinet.ingName.toLowerCase()){
        subArray.push(ingCabinet);
      }
    })
  })
  return subArray;
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
function putRandomImg(target){
  var img = document.createElement('img');
  img.setAttribute('src', 'http://cdn1.bostonmagazine.com/wp-content/uploads/2012/02/liquor.jpg');
  img.className = 'contentImg';
  target.appendChild(img);
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
//   var addButton = document.createElement('img');
//   addButton.className = 'delButton';
//   addButton.setAttribute('src', 'img/addIcon.png');
//   delCont.appendChild(addButton);
//
//   var substitute = document.createElement('p');
//   substitute.className = 'subText';
//   substitute.textContent = 'Substitutes:';
//   delCont.appendChild(substitute);
//
//   var subArray = getSubstitutes(ingredientID);
//   console.log(subArray);
//   subArray.forEach(function(ingredient){
//     printSubstitute(delCont, ingredient);
//   })
// }
// function printSubstitute(target, ingredient){
//   var subImg = document.createElement('img');
//   subImg.setAttribute('src', ingredient.image);
//   subImg.className = 'subImg';
//   target.appendChild(subImg);
}


renderIndex();

renderIng(ingArray[0]);
renderIng(ingArray[1]);
renderIng(ingArray[2]);
