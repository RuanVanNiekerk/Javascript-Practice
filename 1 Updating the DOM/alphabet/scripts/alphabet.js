// JavaScript source code
document.getElementById("submit").addEventListener("click", shuffel);

function shuffel() {
    event.preventDefault();
    let x = document.getElementById("input").value;
    let y = x.split('').sort().join('');
    document.getElementById("result").innerHTML = y; 
}