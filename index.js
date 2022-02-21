var expression = document.querySelector(".expression");
var numberOfButtons = document.querySelectorAll(".button").length;
var isChecked = document.getElementById("flexSwitchCheckDefault");
var flag;
 
document.addEventListener("keypress", function (event) {
  if (
    expression.innerHTML == "Invalid" ||
    expression.innerHTML == "ERROR" ||
    expression.innerHTML == "undefined" ||
    expression.innerHTML == "Infinity"
  ) {
    expression.innerHTML = "";
  }
  switch (event.key) {
    case "1":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "2":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "3":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "4":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "5":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "6":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "7":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "8":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "9":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "0":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case ".":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "c": {
      expression.innerHTML = expression.innerHTML.substring(
        0,
        expression.innerHTML.length - 1
      );
      makeSound();
      break;
    }
    case "a": {
      expression.innerHTML = "";
      makeSound();
      break;
    }
    case "+":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "-":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "*":
      expression.innerHTML = expression.innerHTML + "×";
      makeSound();
      break;
    case "x":
      expression.innerHTML = expression.innerHTML + "×";
      makeSound();
      break;
    case "/":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "%":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "^":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "(":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case ")":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "!":
      expression.innerHTML = expression.innerHTML + event.key;
      makeSound();
      break;
    case "Enter":
      calculate(expression);
      makeSound();
      break;
    case "=":
      calculate(expression);
      makeSound();
      break;

    default:
      expression.innerHTML = "Invalid";
      break;
  }
});

for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".button")
    [i].addEventListener("click", function () {
      flag = 0;
      var activeButton = this;
      if (
        expression.innerHTML == "ERROR" ||
        expression.innerHTML == "Invalid" ||
        expression.innerHTML == "undefined" ||
        expression.innerHTML == "Infinity"
      ) {
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
  if(isChecked.checked){
  var click = new Audio("sounds/click2.mp3");
  click.play();}
  else
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
    expression.innerHTML = "Invalid";
  else {
    var result = Number(math.evaluate(exp));
    expression.innerHTML = result;
  }
}
