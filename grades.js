let gradeFromFirstEval;
let gradeFromSecondEval;
let finalResult;

function gradeAverage(firstGrade, secondGrade) {
  let result = Math.floor((firstGrade + secondGrade) / 2);
  console.log(result);
  return result;
}

function aprovedOrNot(finalResult) {
  if (finalResult >= 7) {
    alert("Aprovado");
  } else {
    alert("Reprovado");
  }
}

function getGradesFromUser() {
  gradeFromFirstEval = Number(prompt("Insira a primeira nota: "));
  gradeFromSecondEval = Number(prompt("Insira a segunda nota: "));
}

getGradesFromUser();

finalResult = gradeAverage(gradeFromFirstEval, gradeFromSecondEval);

aprovedOrNot(finalResult);
