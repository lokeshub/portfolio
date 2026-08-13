
const rocksPath = "./images/rocks.png";
const paperPath = "./images/documents.png";
const scissorsPath = "./images/scissor.png";

const allPaths = [rocksPath, paperPath, scissorsPath];

function setPlayerImage(clickedButton) {
    
    var existingImage = document.querySelector('#player-selection');
    existingImage.style.visibility = 'visible';

    switch (clickedButton) {
        case "fist-id":
            existingImage.src = rocksPath; // Update the source
            return rocksPath;
            break;
                
        case "paper-id":
            existingImage.src = paperPath; // Update the source
            return paperPath;
            break;                
        
        case "scissors-id":
            existingImage.src = scissorsPath; // Update the source
            return scissorsPath;
            break;     
    }
}

function setRandomComputerImage() {
    var index = Math.floor(Math.random() * 3);
    
    computerImagePath = allPaths[index];

    var existingImage = document.querySelector('#computer-selection');
    existingImage.style.visibility = 'visible';
    existingImage.src = computerImagePath;

    return computerImagePath;

}

function displayScore(playerSelection, computerSelection) {
    var message = "You ";

    if (playerSelection == computerSelection) {
        message = "No one wins!! 🙃";
    } else if ( (playerSelection == rocksPath && computerSelection == scissorsPath) ||
                (playerSelection == paperPath && computerSelection == rocksPath) ||
                (playerSelection == scissorsPath && computerSelection == paperPath)) {
        message = "You Won!! 👍";
     } else {
        message = "You Lost!! 😪"
     }



    var headerMesage = document.querySelector(".header");
    headerMesage.textContent = message;
}

selectButtons = document.querySelectorAll(".select-btn");

// Main

for (var i=0; i < selectButtons.length; i++) {
    var selectedButton = selectButtons[i];

    selectedButton.addEventListener("click", function() {
        var whichButton = this.id;
        var playerSelection = setPlayerImage(whichButton);
        var computerSelection = setRandomComputerImage();
        displayScore(playerSelection, computerSelection);

        // button animation
        buttonAnimation(whichButton);
    })
}

function buttonAnimation(theButton) {
    var activeButton = document.querySelector("#" + theButton);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}
