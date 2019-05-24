"use strict";

var userCount = 0;
var compCount = 0;

function userClick(n) {
    const compChoice = Math.floor(Math.random() * 3);

    if (n === compChoice) {  //Tie
        if( n === 0){
            document.getElementById('user-selected').innerText = 'Rock';
            document.getElementById('comp-selected').innerText = 'Rock';
        } else if(n === 1){
            document.getElementById('user-selected').innerText = 'Paper';
            document.getElementById('comp-selected').innerText = 'Paper';
        } else{
            document.getElementById('user-selected').innerText = 'Scissor';
            document.getElementById('comp-selected').innerText = 'Scissor';
        }
        console.log('Tie');
    } else if (n === 0 && compChoice === 1) {  //Rock and Paper  Comp Wins
        console.log('User : Rock ----> Comp: Paper : Comp Wins');
        compCount++;
        document.getElementById('user-selected').innerText = 'Rock';
        document.getElementById('comp-selected').innerText = 'Paper';
        updateCounts(compCount, false);

    } else if (n === 1 && compChoice === 2) { //Paper and Scissor Comp Wins
        console.log('User : Paper ----> Comp: Scissor : Comp Wins');
        compCount++;
        document.getElementById('user-selected').innerText = 'Paper';
        document.getElementById('comp-selected').innerText = 'Scissor';
        updateCounts(compCount, false);

    } else if (n === 2 && compChoice === 0) { //Scissor and Rock Comp Wins
        console.log('User : Scissor ----> Comp: Rock : Comp Wins');
        compCount++;
        document.getElementById('user-selected').innerText = 'Scissor';
        document.getElementById('comp-selected').innerText = 'Rock';
        updateCounts(compCount, false);
    } else if (n === 1 && compChoice === 0) {  //Paper and Rock  User Wins
        console.log('User: Paper -----> Comp: Rock : User Wins');
        userCount++;
        document.getElementById('user-selected').innerText = 'Paper';
        document.getElementById('comp-selected').innerText = 'Rock';
        updateCounts(userCount, true);
    } else if (n === 2 && compChoice === 1) { //Scissor and Paper User Wins
        console.log('User: Scissor ------> Comp: Paper: User Wins');
        userCount++;
        document.getElementById('user-selected').innerText = 'Scissor';
        document.getElementById('comp-selected').innerText = 'Paper';
        updateCounts(userCount, true);
    } else if (n === 0 && compChoice === 2) { //Rock and Scissor User Wins
        console.log('User: Rock -------> Comp: Scissor: User Wins');
        userCount++;
        document.getElementById('user-selected').innerText = 'Rock';
        document.getElementById('comp-selected').innerText = 'Scissor';
        updateCounts(userCount, true);
    }
}


function updateCounts(n, win) {
    if (win) {
        document.getElementById('user-count').innerText = n.toString();
        document.getElementById('name').innerText = 'User Wins';
    } else {
        document.getElementById('comp-count').innerText = n.toString();
        document.getElementById('name').innerText = 'Computer Wins';
    }
}
