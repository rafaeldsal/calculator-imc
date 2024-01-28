const btnCalcular = document.querySelector('.btnCalcular');
const btnRefazer = document.querySelector('.btnRefazer');
const resultTextP = document.querySelector('.result-text');
const resultTableIMC = document.querySelector('.result-table');

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

  if ((isNaN(weight) || isNaN(height))) {
    alert("Por favor, insira valores válidos para peso e altura.");
    inputHeight.value = '';
    inputWeight.value = '';
  } else {
    let imc = calcularIMC(weight, height);
    let classification = getClassification(imc);
    tdWeight.innerText = inputWeight.value;
    tdHeight.innerText = inputHeight.value;
    tdIMC.innerText = imc;
    tdWeightResult.innerText = classification;
    toggleButton();
    toggleScreenResultIMC();
  }
}

function toggleButton() {
  btnCalcular.classList.toggle('hide');
  btnRefazer.classList.toggle('hide');
}

function toggleScreenResultIMC() {
  resultTextP.classList.toggle('hide');
  resultTableIMC.classList.toggle('hide');
}

function calcularIMC(weight, height) {
  let imc = weight / (height * height);
  return parseFloat(imc.toFixed(2));
}

function getClassification(imc) {
  if (imc < 17) return 'Muito abaixo do peso';
  if (imc <= 18.49) return 'Abaixo do peso';
  if (imc <= 24.99) return 'Saudável';
  if (imc <= 29.99) return 'Sobrepeso';
  if (imc <= 34.99) return 'Obesidade grau I';
  if (imc <= 39.99) return 'Obesidade grau II (severa)';
  return 'Obesidade grau III (mórbida)';
}