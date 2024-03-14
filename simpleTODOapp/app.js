let inpText=document.querySelector("#inputText");
let adBtn=document.querySelector("#addBtn");
let toDO=document.querySelector(".todoList");


let editTODO = null;    //creating null value to use it in the editing the tasks.



                                //To ADD TODO
const addTodo= ()=>{

    let inP=inpText.value.trim();
    if(inP.length <= 0){
        alert("Please enter the task...");
        return false;                                     //if we not put the value in input box it will be return back
    }

    if(adBtn.innerText == "Edit"){
        editTODO.target.previousElementSibling.innerText = inP;
        adBtn.innerText="Add";
        inpText.value="";

    }else{

    // creating the elements list and paragraph
    let li=document.createElement("li");
    let p=document.createElement("p");
    p.innerText=inpText.value;                  //paragraph inner will be the value that is written int the input box
    li.appendChild(p);        
                       //now p will be child of the list


                    //    if the input todo work is to long it will not give access
    if(p.innerText.length >= 30){
        alert("Please Enter the only one work !! Do not write a paragraph on work.");
        // console.log(p.innerText.length); 
        inpText.value="";
        return false;
    }


    const dltBtn=document.createElement("button");
    const editBtn=document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.classList.add("btn","edt")
    li.appendChild(editBtn);
    dltBtn.innerText="Remove";
    dltBtn.classList.add("btn" , "dlt")
    li.appendChild(dltBtn);

    // task.appendChild(editBtn);

    toDO.appendChild(li);  //now list will be child of the todo list
    inpText.value="";
}
}


// MAKING THE WORK OF REMOVE AND EDIT BUTTON 
const updateTOdo = (event) =>{

    // work for delete the added task
    if(event.target.innerText == "Remove"){
        let toDelete=event.target.parentElement;
        // console.dir(event.target.parentElement);     //HERE WE CAN THE WHO WAS THE PARENT OF THE OUR ADDED TASK
        toDelete.remove();
    }


    // work to edit the added task
    if(event.target.innerText == "Edit"){
        inpText.value=event.target.previousElementSibling.innerText;
        adBtn.innerText="Edit";
        inpText.focus();
        editTODO = event;
    }

}


adBtn.addEventListener("click", addTodo);
toDO.addEventListener("click",updateTOdo);

