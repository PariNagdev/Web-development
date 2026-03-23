const form = document.getElementById("taskform");
const title = document.getElementById("title");
const TaskList = document.querySelector(".postList");
const error =document.getElementById("error");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (title.value.trim() == ""){
        error.textContent =" Task title is required ";
        return;
    }
    error.textContent = "";
    const li = document.createElement("li")
    li.classList.add("PostItem")
    li.innerHTML = `
    <article class = "postCard">
    <h4 class ="postTitle" > ${title.value} </h4>
    <div class ="postMetaRow">
       <span class ="postBadge"> TODO </span>
         <time class ="postDate" > Mar 26 </time>
                </div>
                <button class ="btn deleteBtn" > Delete </button>
            </article>`;
            TaskList.appendChild(li);
            title.value ="";
});

TaskList.addEventListener("click", function(e){
    if(e.target.classList.contains("deleteBtn")){
        e.target.closest("li").remove();
    }
});

logoutBtn.addEventListener("click", function(e){
    document.querySelector(".postList").innerHTML ="";
    alert("Logged out and Tasks cleared!")
});
