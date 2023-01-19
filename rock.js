// Generates random number from 1 to 3 to generate 
// the computer's selection
function getComputerChoice() { 
    let value = Math.floor(Math.random() * 3) + 1
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
        console.log('You win this round! ' + player + ' beats ' + cmptr)
        ans = 1
    }
    else if (player == cmptr) {
        console.log('This round is a draw! Both you and the computer selected ' + player)
        ans = 3
    }
    else {
        console.log('You lose this round! ' + cmptr + ' beats ' + player)
        ans = 2
    }
    return ans
}   

// Simulates a game of RPS with a set number of rounds
function game(rounds) {

    // To count wins, losses, and draws for the player
    let playW = 0
    let compW = 0
    let draw = 0

    // get results from a series of games
    for (let i = 0; i < rounds; i++) {
        let compSelect = getComputerChoice()
        let playSelect = prompt("Input Rock, Paper, or Scissors", "Rock")

        let ans = oneRound(playSelect, compSelect)

        if (ans == 1) {
            playW = playW + 1
        }
        else if (ans == 2) {
            compW = compW + 1
        }
        else {
            draw = draw + 1
        }
    }

    // Output appropriate grammar depending on number of wins, losses, and draws
    let playerStr = playW + ' wins, '
    let compStr = compW + ' losses, and '
    let drawStr = draw + ' draws.'
    if (playW == 1) {
        playerStr = playW + ' win, '
    }
    if (compW == 1) {
        compStr = compW + ' loss, and '
    }
    if (draw == 1) {
        drawStr = draw + ' draw.'
    }

    if (playW > compW) {
        console.log('You WIN the game!! The final tally was ' + playerStr + 
        compStr + drawStr)
    }
    else if (playW < compW) {
        console.log('You LOSE the game!! The final tally was ' + playerStr + 
        compStr + drawStr)
    }
    else {
        console.log('The game is a DRAW!! The final tally was ' + playerStr + 
        compStr + drawStr)
    }
}

// Get input from user to play the game
let roundSelect = parseInt(prompt('How many rounds of Rock, Paper, Scissors would you like to play?', 
5))
game(roundSelect)