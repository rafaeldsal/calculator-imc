const btnCalcular = document.querySelector('.btnCalcular');
const btnRefazer = document.querySelector('.btnRefazer');

btnCalcular.addEventListener('click', handleCalcClick);


function handleCalcClick(e) {
  e.preventDefault();

  const inputWeight = document.querySelector('#weight');
  const inputHeight = document.querySelector('#height');

  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);

  if (isNaN(weight) || isNaN(height)) {
    alert("Valores informados para peso e/ou altura não são números válidos.")
    inputHeight.value = '';
    inputWeight.value = '';
  } else {
    toogleScreen();
    let calcIMC = 2 * 2;
  }
}

function toogleScreen() {
  btnCalcular.classList.toogle('hide');
  btnRefazer.classList.toogle('hide');
}