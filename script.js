const button = document.querySelector('#button');
const container = document.querySelector('.container');
const colorList = ['red', 'blue', 'green', 'yellow', 'black', 'brown', 'pink','violet'];

button.addEventListener('click', ()=>{
   let index = parseInt(Math.random()*colorList.length);
   container.style.backgroundColor = colorList[index];
});