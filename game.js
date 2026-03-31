let fav = "GOT";
let guess = prompt("Enter Faviorte Movie : ");

while(guess != fav){
    if(guess == "quit"){
        console.log("You Quit");
        break;
    }

    console.log("Wrong Ans");
    guess = prompt("Wrong guess Please Try Again : ");
}
console.log(`Answer is : ${fav}`);