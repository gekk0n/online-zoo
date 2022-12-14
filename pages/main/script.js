const BURGER =  document.querySelector('.burger-icon')
const PAGE = document.querySelector('.page')
const COVER = document.querySelector('.cover')
const SLIDER = document.querySelector('.slider')
const TESTIMONIALS_BLOCK = document.querySelector('.testimonials')
const TESTIMONIALS_SLIDER = document.querySelector('.testimonials-slider')
const NAV = document.querySelector('.navigation')


let petsObj = [
  {
    "type": "Alligators",
    "img": "../../assets/images/card_alligator.jpg",
    "location": "Native to Southeastern U. S.",
    "food": "../../assets/icons/meet-fish_icon.svg"
  },
  {
    "type": "cheetahs",
    "img": "../../assets/images/card_cheetah.jpg",
    "location": "Native to Africa",
    "food": "../../assets/icons/meet-fish_icon.svg"
  },
  {
    "type": "Eagles",
    "img": "../../assets/images/card_eagle.jpg",
    "location": "Native to South America",
    "food": "../../assets/icons/meet-fish_icon.svg"
  },
  {
    "type": "giant Pandas",
    "img": "../../assets/images/card_panda.jpg",
    "location": "Native to Southwest China",
    "food": "../../assets/icons/banana-bamboo_icon.svg"
  },
  {
    "type": "Gorillas",
    "img": "../../assets/images/card_gorilla.jpg",
    "location": "Native to Congo",
    "food": "../../assets/icons/banana-bamboo_icon.svg"
  },
  
  {
    "type": "Penguins",
    "img": "../../assets/images/card_penguin.jpg",
    "location": "Native to Antarctica",
    "food": "../../assets/icons/meet-fish_icon.svg"
  },
  {
    "type": "Two-toed Sloth",
    "img": "../../assets/images/card_sloth.jpg",
    "location": "Mesoamerica, South America",
    "food": "../../assets/icons/banana-bamboo_icon.svg"
  }
]


// ************ BURGER ************ //

BURGER.addEventListener('click', openBurgerMenu)
function openBurgerMenu () {
  BURGER.classList.toggle('open');
  NAV.classList.toggle('open');
  const POPUP = document.querySelector('.popup-card-container')
  if (POPUP) {
    POPUP.remove()
    toggleCover ()
  }
  toggleCover ()
}

// ************ COVER ************ //

function toggleCover () {
  if (!document.querySelector('.open-cover')){
    COVER.classList.add('open-cover')
    document.querySelector('html').classList.add('lock')
  }
  else {
    COVER.classList.remove('open-cover')
    document.querySelector('html').classList.remove('lock')
  }
  
}

COVER.addEventListener('click', closeBurgerMenu)
function closeBurgerMenu () {
  toggleCover ()
  PAGE.classList.remove('open-burger-menu')
  BURGER.classList.remove('open');
  NAV.classList.remove('open');
  if (document.querySelector('.popup-card-container')){
    document.querySelector('.popup-card-container').remove()
    }
}


// ************ CREATE CARDS ************ //

const cardSet = document.querySelectorAll('.card-set')

cardSet.forEach(cardSet => createCard(cardSet))
function createCard (cardSet) {
    for (let i = 0; i < 6; i++) {
    const petCard = document.createElement('div')
    petCard.className = ('card')
    cardSet.appendChild(petCard)
    }
}

let rndArr = []
function getRandom() {
    while(rndArr.length < 7){
        let number = Math.floor(Math.random() * 7)
        if(rndArr.indexOf(number) === -1) rndArr.push(number)
    }
}
getRandom()

const centerPetCards = document.querySelectorAll('#card-set-center .card')
let leftPetCards = document.querySelectorAll('#card-set-left .card')
let rightPetCards = document.querySelectorAll('#card-set-right .card')

let cardObject
centerPetCards.forEach((card, i) => fillCenterCards(card, i))
function fillCenterCards (card, i) {
    cardObject = petsObj[rndArr[i]]

    const cardBottom = document.createElement('div')
    cardBottom.className = ('card-bottom')
    card.prepend(cardBottom)

    const cardDescription = document.createElement('div')
    cardDescription.className = ('card-description')
    cardBottom.prepend(cardDescription)

    const petLocaiton = document.createElement('div')
    petLocaiton.className = ('pet-location')
    cardDescription.prepend(petLocaiton)
    petLocaiton.innerHTML = `${cardObject.location}`

    const petType = document.createElement('div')
    petType.className = ('pet-name')
    cardDescription.prepend(petType)
    petType.innerHTML = `${cardObject.type}`

    const petFood = document.createElement('img')
    petFood.className = ('food-icon')
    cardBottom.prepend(petFood)
    petFood.src = `${cardObject.food}`

    const petImageContainer = document.createElement('div')
    petImageContainer.className = ('pet-image')
    card.prepend(petImageContainer)
    petImageContainer.innerHTML = ''

    const petImage = document.createElement('img')
    petImageContainer.prepend(petImage)
    petImage.src = cardObject.img
    
    card.dataset.id = rndArr[i]
}

leftPetCards.forEach((card, i) => fillHiddenCards(card, i))
rightPetCards.forEach((card, i) => fillHiddenCards(card, i))

function fillHiddenCards (card, i) {
    cardObject = petsObj[rndArr[i+1]]

    const cardBottom = document.createElement('div')
    cardBottom.className = ('card-bottom')
    card.prepend(cardBottom)

    const cardDescription = document.createElement('div')
    cardDescription.className = ('card-description')
    cardBottom.prepend(cardDescription)

    const petLocaiton = document.createElement('div')
    petLocaiton.className = ('pet-location')
    cardDescription.prepend(petLocaiton)
    petLocaiton.innerHTML = `${cardObject.location}`

    const petType = document.createElement('div')
    petType.className = ('pet-name')
    cardDescription.prepend(petType)
    petType.innerHTML = `${cardObject.type}`

    const petFood = document.createElement('img')
    petFood.className = ('food-icon')
    cardBottom.prepend(petFood)
    petFood.src = `${cardObject.food}`

    const petImageContainer = document.createElement('div')
    petImageContainer.className = ('pet-image')
    card.prepend(petImageContainer)
    petImageContainer.innerHTML = ''

    const petImage = document.createElement('img')
    petImageContainer.prepend(petImage)
    petImage.src = cardObject.img
    
    card.dataset.id = rndArr[i+1]
}


// ************ PETS SLIDER ************ //

const SLIDER_BTN = document.querySelectorAll('.slider-nav-button')

SLIDER_BTN.forEach(btn => btn.addEventListener('click', () => {
    if (btn.dataset.direction === 'right') {
        SLIDER.classList.add('pet-move-right')
    }
    else {
        SLIDER.classList.add('pet-move-left')
    }
    
}) )
SLIDER.addEventListener('animationend', (event) => {
    SLIDER.classList.remove('pet-move-right')
    SLIDER.classList.remove('pet-move-left')
    for (let i = 0; i < 3; i++){
        rndArr.shift()
        getRandom()
    }
    // console.log(rndArr);
    if(event.animationName === 'move-left-1600' || event.animationName === 'move-left-1000' || event.animationName === 'move-left-640'){
        document.querySelector("#card-set-center").innerHTML = document.querySelector("#card-set-left").innerHTML
        leftPetCards.forEach( (el) => el.innerHTML = '')
        leftPetCards.forEach((card, i) => fillHiddenCards(card, i))
    }
    else {
        document.querySelector("#card-set-center").innerHTML = document.querySelector("#card-set-right").innerHTML
        rightPetCards.forEach( (el) => el.innerHTML = '')
        rightPetCards.forEach((card, i) => fillHiddenCards(card, i))
    }
    
})

// ****************** TESTIMONIALS SLIDER ****************** //

const SCROLL = document.querySelector('input[type="range"]');
SCROLL.addEventListener('input', moveSlider)

function moveSlider () {
  console.log(SCROLL.value)
  let width = document.querySelector('.testimonials-card').offsetWidth + 29
  TESTIMONIALS_SLIDER.style.left = (`-${Number(SCROLL.value) * width}px`)
}


// ************************* SHOW POPUP ********************* //

let testimonialsCard = document.querySelectorAll('.testimonials-card')
testimonialsCard.forEach(card => card.addEventListener('click', showPopup))


function createPopup (event) {
  if(testimonialsCard) {
    const popupContainer = document.createElement('div')
    popupContainer.className = 'popup-card-container'
    TESTIMONIALS_BLOCK.prepend(popupContainer)
    
    const popupCard = document.createElement('div')
    popupCard.className = 'popup-card'
    popupCard.innerHTML = event.currentTarget.innerHTML
    popupContainer.prepend(popupCard)

    const popupCloseButton = document.createElement('div')
    popupCloseButton.className = 'popup-close-button'
    popupContainer.prepend(popupCloseButton)
    if (popupCloseButton) {
        popupCloseButton.addEventListener('click', () => {
            toggleCover()
            document.querySelector('.popup-card-container').remove()
        })
    }
}
}

function showPopup (event) {
  if (document.body.offsetWidth <= 970) {
    createPopup (event)
    toggleCover ()
  }
}