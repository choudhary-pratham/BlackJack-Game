let cards = [];
let flag;
let flag_start;
let hasStarted = false;
let message = "";
let messageEl = document.querySelector(".message-el");
let cardsEl = document.querySelector(".cards-el");
let sumEl = document.querySelector(".sum-el");
let chipEl = document.querySelector(".chips");
let player = {
    name : "player1",
    chips : 145
};

function generte_card()
{
    let randomNum =  Math.floor(Math.random()*13+1);
    return (randomNum >= 11 ? 10 : randomNum === 1 ? 11 : randomNum);
}
function startGame(){
    if(hasStarted === false)
    {
        let firstCard = generte_card();
        let secondCard = generte_card();
        cards = [firstCard,secondCard];
        flag = true;
        flag_start = false;
        hasStarted = true;
        chipEl.textContent = player.name + ": " + "$" + player.chips;
        renderGame();
    }
    else{
        alert("Game already started!");
    }
}

function renderGame(){
    flag_start = true;
    let sum = 0;
    for(let i = 0;i<cards.length;i++)
    {
        sum += cards[i];
    }
    let string = "";
    for(let i=0;i<cards.length;i++)
    {
        string += cards[i] + " " ;
    }
    cardsEl.textContent = "Card: " + string;
    sumEl.textContent = "Sum: " + sum;
    if(sum < 21)
    {
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21)
    {
        message = "You've got a Blackjack!";
        messageEl.style.color = "green";
        flag = false;
        player.chips = player.chips*1000;
        chipEl.textContent = player.name + ": " + "$" + player.chips;
    }
    else{
        message = "You are out of the game!";
        flag = false;
        messageEl.style.color = "red";
        player.chips = player.chips/1000;
        chipEl.textContent = player.name + ": " + "$" + player.chips;
    }
    messageEl.textContent = message;
}
function newCard(){
    if(flag === true && flag_start === true)
    {
        let thirdCard = generte_card();
        cards.push(thirdCard);
        renderGame();
    }
    else if(flag === false)
    {
        alert("Game Over !! please reset your game and start again");
    }
    else
    {
        alert("Please click on start game before chosing a new card");
    }
    
}
function clearAll(){
    messageEl.textContent = "Want to play a round?";
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    while(cards.length != 2)
    {
        cards.pop();
    }
    flag = true;
    flag_start = false;
    hasStarted = false;
    messageEl.style.color = "black";
    chipEl.textContent = " ";
}