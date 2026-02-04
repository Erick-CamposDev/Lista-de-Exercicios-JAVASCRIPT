const grades = [1.8, 7.2, 8.5, 3.3, 4.5, 9.7, 5.7];

function showGradeStatus(arr) {
  for (let i = 0; i < arr.length; i++) {
    let grade = arr[i];

    if (grade >= 0 && grade <= 4.9) {
      console.log("CONCEITO: D");
    } else if (grade >= 5 && grade <= 6.9) {
      console.log("CONCEITO: C");
    } else if (grade >= 7 && grade <= 8.9) {
      console.log("CONCEITO: B");
    } else if (grade >= 9) {
      console.log("CONCEITO: A");
    }
  }
}

showGradeStatus(grades);
