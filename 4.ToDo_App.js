let todo = [];

let choice = prompt("Please enter your request");

console.log("choice is " + choice);

while(true){
    if(choice == "quit" || choice == "Quit"){
        console.log("Quitting App");
        break;
    }

    if(choice == "list"){
        console.log("--------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("--------------------");
    }
    else if(choice == "add"){
        let task = prompt("Please Enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(choice == "delete"){
        let idx = prompt("Please enter the task index to be deleted");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("Wrong Request.");
    }
    choice = prompt("Please enter your request");
}