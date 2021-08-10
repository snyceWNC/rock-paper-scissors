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
            cnt=1
            win=0
        }
        else if (ComputerSelection=="scissors"){
            win=1
            cnt=1
        }
        else if (ComputerSelection=="rock"){
            win=0
            cnt=0
        }
    }
    else if (playerSelection.toLowerCase()=="paper"){
        if (ComputerSelection=="scissors"){
            cnt=1
            win=0
        }
        else if (ComputerSelection=="rock"){
            win=1
            count=1
        }
        else if (ComputerSelection=="paper"){
            win=0
            count=0
        }
    }
    else if (playerSelection.toLowerCase()=="scissors"){
        if (ComputerSelection=="rock"){
            cnt=1
            win=0
        }
        else if (ComputerSelection=="paper"){
            win=1
            cnt=1
        }
        else if (ComputerSelection=="scissors"){
            win=0
            cnt=0
        }
    }
    else {
        alert("Incorrect input: try \"Rock\", \"Paper\", or \"Scisssors\".")
        cnt=0
        win=0
    }
    return [cnt, win];
}

function game(){
    fnl_cnt=0
    fnl_win=0
    while(fnl_cnt<5){
        const player_input = prompt("Rock, Paper, or Scissors?");
        cnt_win_array = roShamBo(player_input);
        fnl_cnt+=cnt_win_array[0]
        fnl_win+=cnt_win_array[1]
    }
    if (fnl_win > 3) {
        return `You won! ${fnl_win} out of 5 won.`
    }
    else {
        return `You lost! ${fnl_win} out of 5 won.`
    }
}