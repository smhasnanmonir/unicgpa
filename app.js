let input_result = document.getElementById("inputt");
let result_box = document.getElementById("display-result");

function appendResult(cg) {
  let cgDiv = document.getElementById("cgpa-div");
  let entry = document.createElement("p");
  let resultValue = input_result.value;

  entry.classList.add(
    "text-center",
    "text-white",
    "mt-7",
    "p-3",
    "bg-orange-600",
    "rounded",
    "font-bold"
  );
  entry.innerHTML = `Your number is ${resultValue}, ${cg}`;
  cgDiv.prepend(entry);
}

let click_event = document
  .querySelector(".btn")
  .addEventListener("click", function () {
    if (input_result.value > 101) {
      appendResult("Please insert a valid number");
    } else if (input_result.value >= 90) {
      appendResult("You got CGPA 4.00");
    } else if (input_result.value >= 86 && input_result.value <= 89) {
      appendResult("You got CGPA 3.67");
    } else if (input_result.value >= 82 && input_result.value <= 85) {
      appendResult("You got CGPA 3.33");
    } else if (input_result.value >= 78 && input_result.value <= 81) {
      appendResult("You got CGPA 3.00");
    } else if (input_result.value >= 74 && input_result.value <= 77) {
      appendResult("You got CGPA 2.67");
    } else if (input_result.value >= 70 && input_result.value <= 73) {
      appendResult("You got CGPA 2.33");
    } else if (input_result.value >= 66 && input_result.value <= 69) {
      appendResult("You got CGPA 2.00");
    } else if (input_result.value >= 62 && input_result.value <= 65) {
      appendResult("You got CGPA 1.67");
    } else if (input_result.value >= 58 && input_result.value <= 61) {
      appendResult("You got CGPA 1.33");
    } else if (input_result.value >= 55 && input_result.value <= 57) {
      appendResult("You got CGPA 1.00");
    } else {
      appendResult("You have Failed");
    }
  });
