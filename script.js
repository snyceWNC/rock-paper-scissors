function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay(){

    num = getRandomInt(1,3)
    if (num === 1){
        hand = "rock"
    }
    else if (num === 2){
        hand = "paper"
    }
    else if (num === 3){
        hand = "scissors"
    }

    return hand;
}

function roShamBo(playerSelection, ComputerSelection=computerPlay()){
    if (playerSelection.toLowerCase()=="rock"){
        if (ComputerSelection=="paper"){
            return "You lose! Paper beats Rock."
        }
        else if (ComputerSelection=="scissors"){
            return "You win! Rock beats Scissors."
        }
        else if (ComputerSelection=="rock"){
            return "It's a tie! Rock matches rock."
        }
    }
    else if (playerSelection.toLowerCase()=="paper"){
        if (ComputerSelection=="scissors"){
            return "You lose! Scissors beats paper."
        }
        else if (ComputerSelection=="rock"){
            return "You win! Paper beats rock."
        }
        else if (ComputerSelection=="paper"){
            return "It's a tie! Paper matches paper."
        }
    }
    else if (playerSelection.toLowerCase()=="scissors"){
        if (ComputerSelection=="rock"){
            return "You lose! Rock beats scissors."
        }
        else if (ComputerSelection=="paper"){
            return "You win! Scissors beat paper."
        }
        else if (ComputerSelection=="scissors"){
            return "It's a tie! Scissors match scissors."
        }
    }
}