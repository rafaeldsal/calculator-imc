const btnCalcular = document.querySelector('.btnCalcular');
const btnRefazer = document.querySelector('.btnRefazer');

let inputWeight = document.querySelector('.weight');
let inputHeight = document.querySelector('.height');

btnCalcular.addEventListener('click', handleCalcClick);


function handleCalcClick (e) {
  e.preventDefault();

  console.log("Você está indo bem")
}