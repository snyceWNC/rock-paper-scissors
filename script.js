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