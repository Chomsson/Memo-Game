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

const gridDisplay = document.querySelector('#grid');

const cardsChosen = [];

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

function flipCard(){
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  console.log(cardArray[cardId]);
  console.log(cardsChosen);
  this.setAttribute('src', cardArray[cardId].image);
}