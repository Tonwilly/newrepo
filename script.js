function addToCart(productName) {
  alert(`${productName} has been added to your cart!`);
}
document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");

    const products = [
        { name: "Headphones", price: "$99" },
        { name: "Speakers", price: "$149" },
        { name: "Microphone", price: "$79" },
    ];

    products.forEach(product => {
        const item = document.createElement("div");
        item.innerHTML = `<h2>${product.name}</h2><p>Price: ${product.price}</p>`;
        item.style.border = "1px solid #C8C8C9";
        item.style.padding = "10px";
        item.style.margin = "10px";
        item.style.width = "150px";
        productList.appendChild(item);
    });
});
