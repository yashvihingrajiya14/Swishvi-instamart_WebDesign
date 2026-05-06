const input = document.getElementById('search_bar');
const placeholders = [
    "Search for 'Apples'",
    "Search for 'Bananas'",
    "Search for 'Carrots'",
    "Search for 'Detergent'",
    "Search for 'flour'",
    "Search for 'milk'"
];
let index = 0;

function changePlaceholder() {
    input.setAttribute('placeholder', placeholders[index]);
    index = (index + 1) % placeholders.length;
}

setInterval(changePlaceholder, 2000); // Change placeholder every 2 seconds

let inputSearch=document.getElementById("search_bar").value.trim();
localStorage.setItem(inputSearch);
let searchItem=localStorage.getItem("inputSearch");

function clickToSearch(){
    let inputSearch=document.getElementById("search_bar").value.trim();
    localStorage.setItem("inputSearch",inputSearch);
    let searchItem=localStorage.getItem("inputSearch");

    if (searchItem.toLowerCase() === "breakfast"){
        window.open("Breakfast&more.html","_self");
    }
    if (searchItem.toLowerCase() === "dairy" || searchItem.toLowerCase() === "bread"){
        window.open("Dairy_bread&more.html","_self");
    }
    if (searchItem.toLowerCase() === "snacks" || searchItem.toLowerCase() === "noodle") {
        window.open("Snacks&InstantFood.html","_self");
    }
    if (searchItem.toLowerCase() === "home" || searchItem.toLowerCase() === "kitchen"){
        window.open("Home&KitchenItems.html","_self");
    }
}