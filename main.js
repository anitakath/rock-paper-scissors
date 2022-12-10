
// get computers choice
function getComputerChoice (){
    let randomNumber = Math.floor(Math.random()*3)

    if(randomNumber === 0){
        return 'rock'
    } else if(randomNumber === 1){
        return 'paper'
    } else if(randomNumber === 2) {
        return 'scissor'
    } 
    
    
}

getComputerChoice();

// get players choice

function getUserChoice(Input){
    Input = Input.toLowerCase();
    if(Input === 'rock' || Input === 'paper' || Input === 'scissor'){
        return Input
    } else{
        console.log('error')
    }
}


//compare the choices

const playerSelection='rock';
const computerSelection = getComputerChoice();


function determineTheWinner(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        updateComputerScore();
        updateYourScore();
        return 'its a tie!';
        
        

    } else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        updateComputerScore();
        return 'you loose'
        
        
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        updateYourScore();
        return 'you win'
       
    } else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        updateYourScore();
        return 'you win'
       
        
    } else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        updateComputerScore();
        return 'you loose'
    
     
       
    } else if(playerSelection === 'rock' && computerSelection === 'scissor'){
        updateYourScore();
        return 'you win'
       
       
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        updateComputerScore();
        return 'you loose'
        
    }

   
}

// declare increment function for score tracker

let yourScore = 0;
let computerScore = 0;


function updateYourScore(){
    let you = document.getElementById('you')
    you.innerHTML = yourScore;
    yourScore += 1;
   
   
}


function updateComputerScore(){
    let computer = document.getElementById('computer')
    computer.innerHTML = computerScore;
    computerScore += 1;
    
    
}





// get the divs and playRound && display the results

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

rock.addEventListener('click', ()=>{
    function playRound () {
        const playerChoice = getUserChoice('rock');
        const computerChoice = getComputerChoice();
        console.log('you threw: ' + playerChoice);
        console.log('the computer threw: ' + computerChoice);
        console.log(determineTheWinner(playerChoice, computerChoice));

        const result = document.getElementById('result')

        result.innerHTML = 'You threw: ' + playerChoice + '. ' + 'The computer threw: ' + computerChoice + '. ' + determineTheWinner(playerChoice, computerChoice);
    }
    
    playRound();
})

paper.addEventListener('click', ()=>{
    function playRound () {
        const playerChoice = getUserChoice('paper');
        const computerChoice = getComputerChoice();
        console.log('you threw: ' + playerChoice);
        console.log('the computer threw: ' + computerChoice);
        console.log(determineTheWinner(playerChoice, computerChoice));

        
        const result = document.getElementById('result')
    
        result.innerHTML = 'you threw: ' + playerChoice + '. ' + 'The computer threw: ' + computerChoice  + '. ' + determineTheWinner(playerChoice, computerChoice);
    }
    
    playRound();
})


scissor.addEventListener('click', ()=>{
    function playRound () {
        const playerChoice = getUserChoice('scissor');
        const computerChoice = getComputerChoice();
        
        console.log('you threw: ' + playerChoice);
        console.log('the computer threw: ' + computerChoice);
        console.log(determineTheWinner(playerChoice, computerChoice)); 

       
        const result = document.getElementById('result')
        const whoWon = document.getElementById('whoWon')
    
        result.innerHTML = 'you threw: ' + playerChoice + '. ' +  'The computer threw: ' + computerChoice + '. ' + determineTheWinner(playerChoice, computerChoice);  
    

   
    }

    playRound();
    
    
})








