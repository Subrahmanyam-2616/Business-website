
// Basic JavaScript to handle "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".product .btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });
});
