const cardArray = [
  {
    name: 'beer',
    image: 'images/beer icon.svg'
  },
  {
    name: 'cheeseburger',
    image: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    image: 'images/fries.png'
  },
  {
    name: 'hotdog',
    image: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    image: 'images/ice-cream.png'
  },
  {
    name: 'kapitan bomba',
    image: 'images/kapitan bomba.png'
  },
  {
    name: 'milkshake',
    image: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    image: 'images/pizza.png'
  },
  {
    name: 'beer',
    image: 'images/beer icon.svg'
  },
  {
    name: 'cheeseburger',
    image: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    image: 'images/fries.png'
  },
  {
    name: 'hotdog',
    image: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    image: 'images/ice-cream.png'
  },
  {
    name: 'kapitan bomba',
    image: 'images/kapitan bomba.png'
  },
  {
    name: 'milkshake',
    image: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    image: 'images/pizza.png'
  }
];

cardArray.sort(()=> 0.5 - Math.random());

const cards = document.querySelectorAll('#grid img');
const gridDisplay = document.querySelector('#grid');
const result = document.getElementById('result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createGrid(){
  for (let i = 0; i<cardArray.length;i++){
    const card = document.createElement('img');
    card.setAttribute('src','images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}

createGrid();

function checkMatch(){
  const cards = document.querySelectorAll('#grid img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if(cardsChosen.length === 3){
    alert('too fast!!');
    cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
    cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
    cards[cardsChosenIds[2]].setAttribute('src', 'images/blank.png');
  }
  else if(optionOneId === optionTwoId){
    alert('you have clicked the same image');
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
  }
  else if(cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId){
    alert('Pair found');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  }
  else{
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
  }
  result.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if(cardsWon.length === (cardArray.length/2)){
    result.textContent = 'GZ!!'
  }
}

function flipCard(){
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].image);  
  if(cardsChosen.length === 2){
    setTimeout(checkMatch,500);
  };
  


  console.log(cardArray[cardId]);
  console.log(cardsChosen);
}