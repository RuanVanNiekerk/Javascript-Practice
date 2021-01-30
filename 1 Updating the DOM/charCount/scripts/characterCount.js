// JavaScript source code
let maxNum = document.getElementById("txtInput").maxLength;
document.getElementById("txtInput").addEventListener("keyup", updateCount);

function updateCount() {
    let remNum = maxNum - document.getElementById("txtInput").value.length;
    document.getElementById("notice").innerHTML = "Characters left: " + remNum;
}