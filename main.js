
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

let you = document.getElementById('you')
let computer = document.getElementById('computer')
let computerScore = 0;
let yourScore = 0;








function compareChoices(playerSelection, computerSelection){


    if(playerSelection === computerSelection){
    
       computer.textContent = ++computerScore;

       you.textContent = ++yourScore;

        return 'its a tie!';
        
    
    } else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        
        computer.textContent = ++computerScore;

        return 'you loose'
        
        
        
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){

        you.textContent = ++yourScore;
      

        return 'you win'
        
       
    } else if(playerSelection === 'scissor' && computerSelection === 'paper'){
      
        you.textContent = ++yourScore;
       
        return 'you win'
        
       
        
    } else if(playerSelection === 'scissor' && computerSelection === 'rock'){
     
        computer.textContent = ++computerScore;
      
        return 'you loose'
     
       
    } else if(playerSelection === 'rock' && computerSelection === 'scissor'){
      
        you.textContent = ++yourScore;
      
        return 'you win'
        
       
       
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
      
        computer.textContent = ++computerScore;
      
        return 'you loose'
         
    }

    

   
}






// get the divs and playRound && display the results

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winnersMessage = compareChoices(playerChoice, computerChoice);

    const result = document.getElementById('result');
    result.innerHTML = 'You threw: ' + playerChoice + '. The computer threw: ' + computerChoice + '. ' + winnersMessage;
}


rock.addEventListener('click', ()=>{
    playRound("rock");

})

paper.addEventListener('click', ()=>{
   playRound("paper");
})


scissor.addEventListener('click', ()=>{
    playRound("scissor");
    
    
})








