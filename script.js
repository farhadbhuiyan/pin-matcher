

/*=================================================================
Access pin generate button and submit button
==================================================================*/

const pinGenerateBtn = document.getElementById("pinGenerateBtn");
pinGenerateBtn.addEventListener("click", pinGenerator);

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", pinMatcher);

/*=================================================================
Access all number pad buttons and their value 
==================================================================*/

const buttons = document.getElementsByClassName("button");

for (var i = 0; i < buttons.length; i++) {
  var buttton = buttons[i];
  buttton.addEventListener("click", function (event) {
    const buttonValue = this.innerText;

    if (buttonValue !== "<" && buttonValue !== "C") {
      document.getElementById("display-number").value += buttonValue;
    } else if (buttonValue == "C") {
      clearAllButton();
    } else if (buttonValue == "<") {
      clearSingleButton();
    }
    alertControl()
  })
}

/*=================================================================
 function for generate a 4 digit pin
==================================================================*/

function pinGenerator() {
  var randomNumber = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("displayPin").value = randomNumber;
  document.getElementById("display-number").value = "";
  document.getElementById("try-left").innerText = 3;
  alertControl();
}

/*=================================================================
      function for check whether a pin is matched or not 
      and also check empty field
==================================================================*/

function pinMatcher() {

  const pinNumber = document.getElementById("displayPin").value;
  const displayNumber = document.getElementById("display-number").value;

  if ((pinNumber == displayNumber) && (pinNumber !== "" && displayNumber !== "")) {

    document.getElementById("success").style.display = "block";

  } else if (pinNumber == "" || displayNumber == "") {

    document.getElementById("empty").style.display = "block"; //check empty input field

  } else {
    document.getElementById("failed").style.display = "block";
    tryLeft();

  }
}

/*=================================================================
 function for clear display 
==================================================================*/

function clearAllButton() {
  document.getElementById("display-number").value = "";
  alertControl();
}

/*=================================================================
 function for clear single element form the last index
==================================================================*/

function clearSingleButton() {
  document.getElementById("display-number").value = document.getElementById("display-number").value.slice(0, -1);
  alertControl();
}

/*=================================================================
 function for control alert 
==================================================================*/

function alertControl() {
  document.getElementById("success").style.display = "none";
  document.getElementById("failed").style.display = "none";
  document.getElementById("empty").style.display = "none";
}

/*=================================================================
 functuion for calculate remaining try
==================================================================*/

function tryLeft() {
  document.getElementById("action-left").style.display = "block";
  const tryCount = document.getElementById("try-left").innerText;
  const tryCountNumber = parseFloat(tryCount);
  const decraseTry = tryCountNumber - 1;
  document.getElementById("try-left").innerText = decraseTry;

  if (decraseTry == 0) {
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("submit-btn").style.backgroundColor = "#f55145";
  }
}