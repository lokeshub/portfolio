// Colors
// primary color = "#0d6efd";
// secondary color = "#adb5bd";

// Get the alert and make it hidden for now
  var alertDialogue = document.querySelector(".alert");
  alertDialogue.hidden = true;
  var refreshButton = document.querySelector(".refresh");
  refreshButton.hidden = true;


// Show message depending on turn
function toggleMessage() {
  var message = "";
  if (markValue == "X") {
    message = "Player 1 -> 'X'";
  } else {
    message = "Player 2 -> 'O'";
  }
  document.querySelector(".turn").textContent = message;
}

// Mark value X for player 1 and O for player 2
var markValue = "X";

// Alternate the markValue on each turn
function toggleMarkValue() {
  if (markValue == "X") {
    markValue = "O";
  } else {
    markValue = "X";
  }
}

// Dispaly winner
function wishCongrats() {
  // Disable all buttons
  buttons.forEach(function(button) {
    button.disabled = true;
  })

  // Show alert banner now
  alertDialogue.hidden = false;
  refreshButton.hidden = false;

  document.querySelector(".turn").hidden = true;
  document.getElementById("header").textContent = "Refresh to restart!"

  if (markValue != "O") {
    alertDialogue.textContent = "Player2 wins!!";
  } else {
    alertDialogue.textContent = "Player1 wins!!";
  }
}

// Check different conditions of winning on each turn
function checkIfAnyOneWon(id) {
  // alert("Checking id: "+id);
  // a0-a1-a2
  // b0-b1-b2
  // c0-c1-c2

  // a0-b0-c0
  // a1-b1-c1
  // a2-b2-c2

  // a0-b1-c2
  // a3-b1-c1

  var id_alphabet_num = id.split("");
  var alpha = id_alphabet_num[0];
  var number = id_alphabet_num[1];

  if (( document.getElementById('a0').textContent == "X" &&
        document.getElementById('a1').textContent == "X" &&
        document.getElementById('a2').textContent == "X") ||

      ( document.getElementById('b0').textContent == "X" &&
        document.getElementById('b1').textContent == "X" &&
        document.getElementById('b2').textContent == "X")||

      ( document.getElementById('c0').textContent == "X" &&
        document.getElementById('c1').textContent == "X" &&
        document.getElementById('c2').textContent == "X")||

      ( document.getElementById('a0').textContent == "X" &&
        document.getElementById('b0').textContent == "X" &&
        document.getElementById('c0').textContent == "X")||

      ( document.getElementById('a1').textContent == "X" &&
        document.getElementById('b1').textContent == "X" &&
        document.getElementById('c1').textContent == "X")||

      ( document.getElementById('a2').textContent == "X" &&
        document.getElementById('b2').textContent == "X" &&
        document.getElementById('c2').textContent == "X")||

      ( document.getElementById('a0').textContent == "X" &&
        document.getElementById('b1').textContent == "X" &&
        document.getElementById('c2').textContent == "X")||

      ( document.getElementById('a2').textContent == "X" &&
        document.getElementById('b1').textContent == "X" &&
        document.getElementById('c0').textContent == "X")||

        ( document.getElementById('a0').textContent == "O" &&
          document.getElementById('a1').textContent == "O" &&
          document.getElementById('a2').textContent == "O") ||

        ( document.getElementById('b0').textContent == "O" &&
          document.getElementById('b1').textContent == "O" &&
          document.getElementById('b2').textContent == "O")||

        ( document.getElementById('c0').textContent == "O" &&
          document.getElementById('c1').textContent == "O" &&
          document.getElementById('c2').textContent == "O")||

        ( document.getElementById('a0').textContent == "O" &&
          document.getElementById('b0').textContent == "O" &&
          document.getElementById('c0').textContent == "O")||

        ( document.getElementById('a1').textContent == "O" &&
          document.getElementById('b1').textContent == "O" &&
          document.getElementById('c1').textContent == "O")||

        ( document.getElementById('a2').textContent == "O" &&
          document.getElementById('b2').textContent == "O" &&
          document.getElementById('c2').textContent == "O")||

        ( document.getElementById('a0').textContent == "O" &&
          document.getElementById('b1').textContent == "O" &&
          document.getElementById('c2').textContent == "O")||

        ( document.getElementById('a2').textContent == "O" &&
          document.getElementById('b1').textContent == "O" &&
          document.getElementById('c0').textContent == "O")) {
            wishCongrats();
          }
}

// Handle the click sent by each button with the id
var reply_click = function(id) {
  var clickedButton = document.getElementById(id);

  clickedButton.style.color = "#fff";
  clickedButton.textContent = markValue;
  clickedButton.disabled = true;

  toggleMarkValue();
  toggleMessage();
  checkIfAnyOneWon(id);
  // ifNobodyCanWinThenAlertAndReset();
}

// Set color of all button to background make them blank
var buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button) {
  button.style.color = "#0d6efd";
})
