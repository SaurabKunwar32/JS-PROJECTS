let todo=[];

let req = prompt("Please enter the request");

while(true){

    if(req == "quit"){
        console.log("quitting app");
        break;
    }


    if(req == "add"){
        let task = prompt("Please enter the task that you want to add");
        todo.push(task);
        console.log("task added");
    }

    else if(req == "list"){
        console.log("-----------------")
        for(i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-----------------")
    }


    else if(req == "delete"){
        let idx= prompt("Please enter the index that you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }

    else {
        console.log("Wrong request");
    }
    
    req = prompt("Please enter the request");
}