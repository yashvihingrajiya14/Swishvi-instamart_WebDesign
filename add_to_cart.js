function addToOtherPage(button) {
    let userData = localStorage.getItem("registeredUser");

    if (!userData) {
        alert("You must register first before adding items to the cart!");
        window.open("registration_page_swiggy.html","_blank"); // Redirect to registration
        return;
    }

    let cell = button.parentElement; //here the parent element will be the <td> tag
    let cellId = cell.getAttribute("id"); // Unique ID for the item
    let cellContent = cell.innerHTML.replace(button.outerHTML, "").trim(); // Remove button

    

    // Retrieve existing cart or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item already exists in cart
    let existingItemIndex = cart.findIndex(item => item.id === cellId);

    if (existingItemIndex === -1) {
        // Add item with default quantity 1
        cart.push({ id: cellId, content: cellContent, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    
    // Redirect to the order placement page
    window.open("order_place_page.html","_blank"); 
}
