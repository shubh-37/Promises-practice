import { resolve } from "parcel-bundler/lib/utils/localRequire";
import "./styles.css";
// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to

function enterNumber(){
  return new Promise((resolve,reject)=>{
    const userNumber = Number(window.prompt("Enter a number between 1-6: "));
    const randomNumber = Math.floor(Math.random()*6 +1);
    
    if(isNaN(userNumber)){
      reject(new Error("Enter a valid input!"));
    }
    
    if(userNumber === randomNumber){
      resolve({
        points: 2,
        randomNumber
      })
    }else if(userNumber === randomNumber+1 || userNumber === randomNumber-1){
      resolve({
        points: 1,
        randomNumber
      })
    }else{
      resolve({
        points: 0,
        randomNumber
      })
    }
  });
}

function continuePlaying(){
  return new Promise((resolve,reject)=>{
    if(window.confirm("Do you wish to play more? ")){
      resolve(true)
    }else{
      resolve(false);
    }
  })
}

function playGame(){
  enterNumber()
  .then((result)=>{
    alert(`Random Number: ${result.randomNumber}, your score: ${result.score}`)
  
  
    continuePlaying()
    .then((result)=>{
      if(result){
        enterNumber()
      }else{
        alert("Thank you for playing! Game ends.")
      }
    });
  })
  
  .catch((error)=>{
    alert(error);
  });
}

playGame();
