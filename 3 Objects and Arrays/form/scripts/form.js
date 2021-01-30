// JavaScript source code
function showTool(tempid){

    switch (tempid) {
        case "newTask":
            document.getElementById("taskTool").style="visibility:initial";
            break;
        case "taskDesc":
            document.getElementById("descTool").style = "visibility:initial";
            break;
        case "taskDate":
            document.getElementById("dateTool").style = "visibility:initial";
            break;
        case "taskTime":
            document.getElementById("timeTool").style = "visibility:initial";
            break;
    }
}

function hideTool(tempid) {
    switch (tempid) {
        case "newTask":
            document.getElementById("taskTool").style = "visibility:hidden";
            break;
        case "taskDesc":
            document.getElementById("descTool").style = "visibility:hidden";
            break;
        case "taskDate":
            document.getElementById("dateTool").style = "visibility:hidden";
            break;
        case "taskTime":
            document.getElementById("timeTool").style = "visibility:hidden";
            break;
    }
}

function mySubmitFunction() {
    event.preventDefault();
}

function formVal() {
    document.getElementById("errorMsg").innerHTML = "";
    let testTask = document.getElementById("newTask").value;
    let testval1 = document.getElementById("taskDate").value;
    let testval2 = document.getElementById("taskTime").value;
    let a = testTask.includes("<");
    let b = testTask.includes(">");

    if (a || b) {
        document.getElementById("errorMsg").innerHTML = "New Task cannot have HTML characters!";
    } else if (testTask == "" || testval1 == '' || testval2 == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill in where indicated!";
    } else {
        addLi(testTask);
    }
}

function addLi(entry) {
    let a = document.createElement("li");
    a.appendChild(document.createTextNode(entry));
    document.getElementById("myNewTaskList").appendChild(a);
}