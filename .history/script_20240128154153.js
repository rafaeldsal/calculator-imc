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

  if (isNaN(weight) || isNaN(height)) {
    alert("Valores informados para peso e/ou altura não são números válidos.")
    inputHeight.value = '';
    inputWeight.value = '';
  } else {
    toggleButton();
    toggleScreenResultIMC();
    let imc = calcularIMC(weight, height);
    let classification = getClassification(imc);
    console.log(imc);
    consol.log(classification);
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
  if (imc < 17) {
    return 'Muito abaixo do peso';
  } else if (imc >= 17 && imc <= 18.49) {
    return 'Abaixo do peso';
  } else if (imc >= 18.50 && imc <= 24.99) {
    return 'Saudável';
  } else if (imc >= 25 && imc <= 29.99) {
    return 'Sobrepeso';
  } else if (imc >= 30 && imc <= 34.99) {
    return 'Obesidade grau I';
  } else if (imc >= 35 && imc <= 39.99) {
    return 'Obesidade grau II (severa)';
  } else if (imc >= 40) {
    return 'Obesidade grau III (mórbida)';
  }
}