const btnCalcular = document.querySelector('.btnCalcular');
const btnRefazer = document.querySelector('.btnRefazer');

btnCalcular.addEventListener('click', handleCalcClick);


function handleCalcClick (e) {
  e.preventDefault();

  inputWeight = inputWeight.value;
  inputHeight = inputHeight.value;

  console.log(inputWeight);
  console.log(inputHeight);
}