let input_result = document.getElementById("inputt");
let result_box = document.getElementById("display-result");

let colorRed = function () {
  result_box.style.backgroundColor = "red";
  result_box.style.color = "white";
};

let colorGreen = function () {
  result_box.style.backgroundColor = "green";
  result_box.style.color = "white";
};

let colorOrange = function () {
  result_box.style.backgroundColor = "orange";
  result_box.style.color = "black";
};

let click_event = document
  .querySelector(".btn")
  .addEventListener("click", function () {
    if (input_result.value > 101) {
      result_box.innerHTML = "Please insert a valid number";
      colorRed();
    } else if (input_result.value >= 90) {
      result_box.innerHTML = "You got CGPA 4.00";
      colorGreen();
    } else if (input_result.value >= 86 && input_result.value <= 89) {
      result_box.innerHTML = "You got CGPA 3.67";
      colorGreen();
    } else if (input_result.value >= 82 && input_result.value <= 85) {
      result_box.innerHTML = "You got CGPA 3.33";
      colorOrange();
    } else if (input_result.value >= 78 && input_result.value <= 81) {
      result_box.innerHTML = "You got CGPA 3.00";
      colorOrange();
    } else if (input_result.value >= 74 && input_result.value <= 77) {
      result_box.innerHTML = "You got CGPA 2.67";
      colorOrange();
    } else if (input_result.value >= 70 && input_result.value <= 73) {
      result_box.innerHTML = "You got CGPA 2.33";
      colorOrange();
    } else if (input_result.value >= 66 && input_result.value <= 69) {
      result_box.innerHTML = "You got CGPA 2.00";
      colorOrange();
    } else if (input_result.value >= 62 && input_result.value <= 65) {
      result_box.innerHTML = "You got CGPA 1.67";
      colorOrange();
    } else if (input_result.value >= 58 && input_result.value <= 61) {
      result_box.innerHTML = "You got CGPA 1.33";
      colorOrange();
    } else if (input_result.value >= 55 && input_result.value <= 57) {
      result_box.innerHTML = "You got CGPA 1.00";
      colorOrange();
    } else {
      result_box.innerHTML = "You have Failed";
      colorRed();
    }
  });
