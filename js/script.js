var saveBtn = document.getElementById("save-btn");
var passList = document.getElementById("pass-list");

saveBtn.addEventListener("click", updateList());

function updateList(){
    var passInput = document.getElementById("pass-input");
    console.log(passInput.value);
    passList.innerHTML += "<li>" + passInput.value + "</li>"
    passInput.value = "";
}


