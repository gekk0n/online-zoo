const BURGER =  document.querySelector('.burger-icon')
const PAGE = document.querySelector('.page')
const COVER = document.querySelector('.cover')


// ******** BURGER ******** //

BURGER.addEventListener('click', openBurgerMenu)
function openBurgerMenu () {
  BURGER.classList.toggle('open');
  PAGE.classList.toggle('open-burger-menu')
  COVER.classList.toggle('open-cover')
  document.querySelector('body').classList.toggle('lock')
  document.querySelector('html').classList.toggle('lock')
  
}

COVER.addEventListener('click', closeBurgerMenu)
function closeBurgerMenu () {
  PAGE.classList.remove('open-burger-menu')
  COVER.classList.remove('open-cover')
  BURGER.classList.remove('open');
  document.querySelector('body').classList.remove('lock')
  document.querySelector('html').classList.remove('lock')
  if (document.querySelector('.popup-card-container')){
    document.querySelector('.popup-card-container').remove()
    }
}


// ******** COUNTER ******** //

const RADIO = document.querySelectorAll('.progress-bar-radio')
const ANOTHER = document.querySelector('#form')
ANOTHER.value = 100
checkRadio ()

RADIO.forEach(radio => radio.addEventListener('click', fillAmount))
function fillAmount () {
  ANOTHER.value = this.id
}
ANOTHER.addEventListener('input', checkRadio)
function checkRadio () {
  let arr = []
  for (let i = 0; i<RADIO.length; i++) {
  arr.push(RADIO[i].id.toString())
  }
  if (arr.includes(ANOTHER.value)) {
    document.getElementById(`${ANOTHER.value}`).checked = true;
  }
  else {
    for (let i = 0; i<RADIO.length; i++) {
      RADIO[i].checked = false
      }
  }
  if (ANOTHER.value.length > 4) {
    this.value = this.value.substr(0, 4)
  }
}