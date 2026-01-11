
const inputtask = document.getElementById("input-task");
const tasklist = document.getElementById("task-list");
const btn = document.querySelector(".btn");

function addtask(){
    let tastvalue = inputtask.value;
    if (!tastvalue){
        alert("you must enter a value");
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        
        li.innerHTML=tastvalue;
        tasklist.appendChild(li);
        span.innerHTML="&times;";
        li.appendChild(span)
    }
    inputtask.value=("");
    save()

}
btn.addEventListener("click" , addtask);
tasklist.addEventListener("click" , function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
    }
    save()
});
inputtask.addEventListener("keyup" , function(e){
    if(e.key ==="Enter"){
        addtask();
    }
})
function save(){
    localStorage.setItem("list" , tasklist.innerHTML);
};
function getsave(){
    tasklist.innerHTML=localStorage.getItem("list");
};
getsave();