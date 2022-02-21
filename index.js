var expression = document.querySelector(".expression");
var numberOfButtons = document.querySelectorAll(".button").length;
var flag;

for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".button")
    [i].addEventListener("click", function () {
      flag = 0;
      var activeButton = this;
      if (expression.innerHTML == "ERROR") {
        expression.innerHTML = "";
      }

      if (this.innerHTML == "=") {
        flag = 1;
        calculate(expression);
      }
      if (this.innerHTML == "AC") {
        expression.innerHTML = "";
        flag = 1;
      }
      if (this.innerHTML == "C") {
        expression.innerHTML = expression.innerHTML.substring(
          0,
          expression.innerHTML.length - 1
        );
        flag = 1;
      }

      if (flag == 0)
        expression.innerHTML = expression.innerHTML + this.innerHTML;

      makeSound();
      activeButton.classList.add("pressed");
      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 100);
    });
}

function makeSound() {
  var click = new Audio("sounds/click.mp3");
  click.play();
  return;
}

function calculate(expression) {
  let exp = expression.innerHTML;
  exp = exp.replace("×", "*");
  exp = exp.replace("π", "pi");
  let last = exp[exp.length - 1];
  if (
    last == "+" ||
    last == "-" ||
    last == "*" ||
    last == "/" ||
    last == "%" ||
    last == "^"
  )
    expression.innerHTML = "ERROR";
  else expression.innerHTML = math.evaluate(exp);
}
