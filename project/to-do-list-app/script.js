let inputText = document.getElementById("input-data");
let btn = document.getElementById("btn");
let btnAll = document.getElementById("btn-dis");
let listParent = document.getElementById("list-parent");
let arrayItems = document.getElementById('o-list');
let inputValue;
let itemsArray = [];

function buildUi{
    let li = document.createElement("li");
    let spanElem = document.createElement("span");
    li.appendChild(spanElem);
    spanElem.innerText = inputValue;

    inputText.value = "";
    listParent.appendChild(li);
    inputText.focus();

    //Delete Button
    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add("fa-trash", "fa-solid");
    li.appendChild(deleteIcon);

    //Edit Icon
    let editIcon = document.createElement('i');
    editIcon.classList.add("fa-pen-to-square", "fa-solid");
    li.appendChild(editIcon);
}

function addItem() {
    if (inputText.value.length > 0) {

        //Add Item
        inputValue = inputText.value;
        itemsArray.push(inputText.zzvalue);
        console.log(itemsArray);


        setLocal();
    } else {
        alert("Enter any Data!!!")
    }
}

function deleteItem(event) {
    if (event.target.classList[0] === "fa-trash") {
        let item = event.target.parentElement;
        item.remove();
        console.log(itemsArray);
        itemsArray.pop();
        console.log(itemsArray);
    }
}

function editItem(event) {
    if (event.target.classList[0] === "fa-pen-to-square") {
        let editedValue = prompt("Enter Your New Value.");
        let spanElem = document.querySelector('span');
        spanElem.innerText = editedValue;
    }
}

function setLocal() {
    localStorage.setItem("inputData", inputValue);
}

function getLocal() {
    let localData = localStorage.getItem("inputData");
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
btn.addEventListener('click', addItem);
listParent.addEventListener('click', deleteItem);
listParent.addEventListener('click', editItem);

// //save data to local storage
// function saveData() {
//     localStorage.setItem("data", listParent.innerHTML);
// }

// //retrive data from local storage
// function showTask() {
//     listParent.innerHTML = localStorage.getItem("data");
// }
// showTask();