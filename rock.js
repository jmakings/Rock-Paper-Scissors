
function getComputerChoice() { 
    let value = Math.floor(Math.random() *3 ) + 1
    let ans = ''
    if (value == 1)
        ans = 'Rock'
    else if (value == 2)
        ans = 'Paper'
    else 
        ans = 'Scissors'
    
    return ans
}

