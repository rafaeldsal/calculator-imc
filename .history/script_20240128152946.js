const btnCalcular = document.querySelector('.btnCalcular');
const btnRefazer = document.querySelector('.btnRefazer');

btnCalcular.addEventListener('click', handleCalcClick);


function handleCalcClick(e) {
  e.preventDefault();

  const inputWeight = document.querySelector('#weight');
  const inputHeight = document.querySelector('#height');

  let tdWeight = document.querySelector('.weight');
  let tdHeight = document.querySelector('.height');
  let tdIMC = document.querySelector('.imc');
  let tdWeightResult = document.querySelector('.weightResult');

  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);

  if (isNaN(weight) || isNaN(height)) {
    alert("Valores informados para peso e/ou altura não são números válidos.")
    inputHeight.value = '';
    inputWeight.value = '';
  } else {
    toggleButton();
    let imc = calcularIMC(weight, height);
    console.log(imc);
  }
}

function toggleButton() {
  btnCalcular.classList.toggle('hide');
  btnRefazer.classList.toggle('hide');
}

function calcularIMC (weight, height) {
  let imc = weight / (height * height);
  return parseFloat(imc.toFixed(2));
}