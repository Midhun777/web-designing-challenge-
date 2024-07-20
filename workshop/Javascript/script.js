// let cars = ["Audi", "BMW", "Benz", "Supra", "Maruthi", "Jeep"];
// let carsParent = document.getElementById("cars-list");
// cars.push("Alto");

// for (let vechicle of cars) {
//     let li = document.createElement("li");
//     li.innerText = vechicle;
//     carsParent.appendChild(li);
// }

let inputText = document.getElementById("input-data");
let btn = document.getElementById("btn");
let listParent = document.getElementById("list-parent");
let itemsArray = [];

function addItem() {
    if (inputText.value.length > 0) {

        ///Add Item
        let inputValue = inputText.value;
        itemsArray.push(inputText.value);
        console.log(itemsArray);
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


    } else {
        alert("Enter any Data!!!")
    }
}

function deleteItem(event) {
    // console.log(event.target.classList[0]);
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
        let item = event.target.parentElement;
        let spanElem = document.querySelector('span');
        spanElem.innerText = editedValue;
    }
}

function displayAll() {
    for (let itemsAll of itemsArray) {
        let li = document.createElement("li");
        li.innerText = itemsAll;
        arrayItems.appendChild(li);
    }
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

btn.addEventListener('click', addItem);
listParent.addEventListener('click', deleteItem)
listParent.addEventListener('click', editItem)