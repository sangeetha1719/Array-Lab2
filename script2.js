// Task 2:
//addItem function,item as parameter and adds it to shopping array if not already in the list//
let shoppingList = [];
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let searchInput = document.getElementById("searchInput");
let srchItemButton = document.getElementById("SearchBtn");
let display_List = document.getElementById("display");

function addItem(item) {
  //let item = document.getElementById("itemInput").value;
  // Check if the item is  in the shopping list (case-sensitive)
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
    console.log(shoppingList);
    displayList();
  } else {
    alert("This item is already in your shopping list!");
  }
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

function filterItems(searchTerm) {
  // Convert search term to lowercase for case-insensitive comparison
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  // Filter the shopping list for items that contain the search term
  return shoppingList.filter((item) =>
    item.toLowerCase().includes(lowerCaseSearchTerm)
  );
}

//Adds an event listener to the search button
srchItemButton.addEventListener("click", function () {
  let searchitem = searchInput.value;
  //check if the input text is empty
  if (searchitem === "") {
    alert("Please enter a item to search");
    return;
  }
  let results = filterItems(searchitem);
  display_List.innerHTML = "";
  if (results.length === 0) {
    display_List.innerHTML = "<li>No matching items found.</li>";
  } else {
    results.forEach((item) => {
      display_List.innerHTML += `<li>${results}</li>`;
    });
  }
});

function displayList() {
  display_List.innerHTML = ""; //clear output field
  for (i = 0; i < shoppingList.length; i++) {
    display_List.innerHTML += `<li>${shoppingList[i]}</li>`;
  }
}
