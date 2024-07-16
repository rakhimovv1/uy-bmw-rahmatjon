let burger = document.querySelector('.mob svg')
let center = document.querySelector('.n-center')


burger.onclick = function () {
    center.classList.toggle('active')
    burger.classList.toggle('mob-active')
    document.body.classList.toggle('hidden')
}


let header = document.querySelector('.header')
let h1 = document.createElement('h1')
let p = document.createElement('p')


h1.innerHTML = 'bmw x5'
p.innerHTML = 'bmw eng yahshi tanlov'

header.appendChild(h1)
header.appendChild(p)


h1.onclick = function () {
    header.removeChild(h1)
}

p.onclick = function () {
    header.removeChild(p)
}


let section = document.querySelector('.section')
let h2 = document.createElement('h2')
let p2 = document.createElement('p2')

h2.innerHTML = 'bmw x6'
p2.innerHTML = 'bmw eng yahshi tanlov'

section.appendChild(h2)
section.appendChild(p2)

h2.onclick = function () {
    section.removeChild(h2)
}
p2.onclick = function () {
    section.removeChild(p2)
}

let aside = document.querySelector('.aside')
let h3 = document.createElement('h3')
let p3 = document.createElement('p3')

h3.innerHTML = 'bmw x7'
p3.innerHTML = 'bmw eng yahshi tanlov'

aside.appendChild(h3)
aside.appendChild(p3)

h3.onclick = function () {
    aside.removeChild(h3)
}
p3.onclick = function () {
    aside.removeChild(p3)
}





