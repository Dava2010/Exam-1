var num1 = parseFloat(prompt("1-raqamni kiriting:"));
var operator = prompt("Tanlang: 1)+, 2)-, 3)*, 4)/");
var num2 = parseFloat(prompt("2-raqamni kiriting:"));


if (isNaN(num1) || isNaN(num2)) {
    alert("Iltimos to'g'ri son kiriting.");
} else if (!['1', '2', '3', '4'].includes(operator)) {
    alert("Iltimos to'g'ri tanlang (1, 2, 3 yoki 4).");
} else {



  var container = document.createElement("div");
  container.style.backgroundColor = "#fff";
  container.style.borderRadius = "15px";
  container.style.padding = "25px";
  container.style.textAlign = "center";
  container.style.width = "350px";
  container.style.height = "400px";
  document.body.appendChild(container);


  var title = document.createElement("h1");
  title.innerText = "Вычисление ваших данных:";
  container.style.borderRadius = "10px";
  title.style.fontSize = "20px";
  title.style.color = "black";
  title.style.background = "aquamarine";
  container.appendChild(title);


  var inputContainer = document.createElement("div");
  inputContainer.style.marginBottom = "20px";
  container.appendChild(inputContainer);


  var num1Input = document.createElement("input");
  num1Input.value = num1;
  num1Input.disabled = true;
  num1Input.style.width = "100%";
  num1Input.style.padding = "10px";
  num1Input.style.marginBottom = "10px";
  num1Input.style.border = "2px solid black";
  num1Input.style.borderRadius = "5px";
  num1Input.style.fontSize = "16px";
  inputContainer.appendChild(num1Input);

  // Выпадающий список для оператора
  var operatorSelect = document.createElement("select");
  operatorSelect.disabled = true; // Оператор только для отображения
  operatorSelect.innerHTML = `
        <option value="1" ${operator == "1" ? "selected" : ""}>+</option>
        <option value="2" ${operator == "2" ? "selected" : ""}>-</option>
        <option value="3" ${operator == "3" ? "selected" : ""}>*</option>
        <option value="4" ${operator == "4" ? "selected" : ""}>/</option>
    `;
  operatorSelect.style.width = "100%";
  operatorSelect.style.padding = "12px";
  operatorSelect.style.marginBottom = "10px";
  operatorSelect.style.border = "2px solid black";
  operatorSelect.style.borderRadius = "5px";
  operatorSelect.style.fontSize = "15px";
  inputContainer.appendChild(operatorSelect);

  // Ввод для второго числа
  var num2Input = document.createElement("input");
  num2Input.value = num2;
  num2Input.disabled = true; // Число только для отображения
  num2Input.style.width = "100%";
  num2Input.style.padding = "10px";
  num2Input.style.marginBottom = "10px";
  num2Input.style.border = "2px solid black";
  num2Input.style.borderRadius = "5px";
  num2Input.style.fontSize = "15px";
  inputContainer.appendChild(num2Input);

  // Создаем кнопку для вычисления
  var button = document.createElement("button");
  button.innerText = "Tekshirish";
  button.style.width = "100%";
  button.style.padding = "12px";
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.style.fontSize = "18px";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.transition = "background-color 0.3s";
  container.appendChild(button);

  // Элемент для отображения результата
  var resultText = document.createElement("h3");
  resultText.innerText = "Результат: ";
  var result = document.createElement("span");
  resultText.appendChild(result);
  result.style.fontWeight = "bold";
  result.style.color = "#007bff";
  container.appendChild(resultText);

  // Обработчик кнопки "Вычислить"
  button.addEventListener("click", function () {
    var resultValue;

    // Выполнение выбранной операции
    if (operator === "1") {
      resultValue = num1 + num2;
    } else if (operator === "2") {
      resultValue = num1 - num2;
    } else if (operator === "3") {
      resultValue = num1 * num2;
    } else if (operator === "4") {
      if (num2 === 0) {
        alert("0 ga bo'lsa bo'lmaydi.");
        return;
      }
      resultValue = num1 / num2;
    }

    // Отображаем результат
    result.innerText = resultValue;
  });
}