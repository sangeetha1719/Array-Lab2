// Create an empty array called shoppingList.
// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// Write a function called removeLastItem that removes the last item from the shoppingList array.
// Write a function called displayList that logs all items in the shoppingList array to the console.

// Task 1 and Task 3
let shoppingList = [];
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let display_List = document.getElementById("display");

//addItem function,item as parameter and adds it to shopping array//
function addItem(item) {
  //let item = document.getElementById("itemInput").value;
  shoppingList.push(item);
  console.log(shoppingList);
  displayList();
}

//Adds an event listener to the button
addItemButton.addEventListener("click", function () {
  let item = itemInput.value;
  //check if the input text is empty
  if (item === "") {
    alert("Please enter a item!");
    return;
  }
  addItem(item);
  itemInput.value = ""; //clears input field
});

//Remove an li from the ul
function removeLastItem(item) {
  shoppingList.pop(item);
  console.log(shoppingList);
  displayList();
}

removeItemButton.addEventListener("click", function () {
  let item = itemInput.value;
  removeLastItem(item);
});

function displayList() {
  display_List.innerHTML = ""; //clear output field
  for (i = 0; i < shoppingList.length; i++) {
    display_List.innerHTML += `<li>${shoppingList[i]}</li>`;
  }
}
