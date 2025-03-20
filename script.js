//to store variable and create lelments

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask(){
    if(inputBox.value=== ''){
        alert("You Must Write Something TO Add !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value ="";
    saveData();
}

// click function

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// to stay saved while refresh also and can be deleted once the task is completed

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// display the data when we open the browser again

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();