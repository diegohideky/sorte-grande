let num = document.getElementById('num')
let min = document.getElementById('min')
let max = document.getElementById('max')
let btn = document.getElementById('btn')
let res = document.getElementById('res')
let out = []

let init = _ => {
  num.value = 1
  min.value = 1
  max.value = 10
};

let randomNumber = _ => {
  let random = Math.floor(Math.random() * max.value) + parseInt(min.value)

  while (out.indexOf(random) > -1) {
    random = Math.floor(Math.random() * max.value) + parseInt(min.value)
  }

  return random
}

let shuffleNumbers = _ => {
  let numbers = ""
  let n

  for (let i = 0; i < parseInt(num.value); i++) {
    n = randomNumber()
    numbers += i === 0 ? n : " - " + n
    out.push(n)
  }

  res.innerHTML = numbers
  out = [];
};

window.addEventListener('DOMContentLoaded', _ => {
  init();

  btn.addEventListener('click', _ => {
    shuffleNumbers()
  })
})
