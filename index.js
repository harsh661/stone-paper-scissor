const choices = ['stone', 'paper', 'scissors'];

results = document.getElementById('result')

function rock(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('computerChoice').innerText = computerChoice
    if (computerChoice == 'scissors'){
        results.innerText = 'You Won!'
    } else if(computerChoice == 'paper'){
        results.innerText = 'You Lost!'
    } else{
        results.innerText = 'It\'s a tie'
    }
}
function pap(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('computerChoice').innerText = computerChoice
    if (computerChoice == 'stone'){
        results.innerText = 'You Won!'
    } else if(computerChoice == 'scissors'){
        results.innerText = 'You Lost!'
    } else{
        results.innerText = 'It\'s a tie'
    }
}
function sci(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('computerChoice').innerText = computerChoice
    if (computerChoice == 'paper'){
        results.innerText = 'You Won!'
    } else if(computerChoice == 'stone'){
        results.innerText = 'You Lost!'
    } else{
        results.innerText = 'It\'s a tie'
    }
}





