
function getComputerChoice() { 
    let value = Math.floor(Math.random() *3 ) + 1
    let ans = ''
    if (value == 1)
        ans = 'ROCK'
    else if (value == 2)
        ans = 'PAPER'
    else 
        ans = 'SCISSORS'
    
    return ans
}

// Plays a single round of rock paper scissors, 
// with player and computer inputs 
function oneRound(playerSelection, computerSelection) {
    const player = playerSelection.toUpperCase()
    const cmptr =  computerSelection.toUpperCase()

    // returns 1 if player wins, 2 if computer wins, 3 if draw
    let ans = 0
    if ((player == 'ROCK' && cmptr == 'SCISSORS') ||
     (player == 'PAPER' && cmptr == 'ROCK') || 
     (player == 'SCISSORS' && cmptr == 'PAPER')) {
        console.log('You Win! ' + player + ' beats ' + cmptr)
        ans = 1
    }
    else if (player == cmptr) {
        console.log('Draw! Both you and the computer selected ' + player)
        ans = 3
    }
    else {
        console.log('You lose! ' + cmptr + ' beats ' + player)
        ans = 2
    }
    return ans
}   
