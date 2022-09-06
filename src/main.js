let dropdown1 = document.getElementById('dropdown1');
let dropdown2 = document.getElementById('dropdown2');
let arrowDown = document.getElementById('arrow1')
let arrow = document.getElementById('arrow')
let arrowDown1 = document.getElementById('arrow3')
let arrow1 = document.getElementById('arrow4')
function drop1(){dropdown1.classList.toggle('hidden')
arrow.classList.toggle('hidden')
arrowDown.classList.toggle('hidden')
}
function drop2(){
arrow1.classList.toggle('hidden')
arrowDown1.classList.toggle('hidden')
dropdown2.classList.toggle('hidden')
}