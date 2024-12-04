// 从 localStorage 加载购物车
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const taxElement = document.getElementById("tax");
const finalTotalElement = document.getElementById("final-total");

// 渲染购物车内容
let totalPrice = 0;
cart.forEach(({ name, price, quantity }) => {
    const li = document.createElement("li");
    li.textContent = `${name} (x${quantity}) - $${(price * quantity).toFixed(2)}`;
    cartItemsContainer.appendChild(li);
    totalPrice += price * quantity;
});

// 计算税费和总价
const tax = totalPrice * 0.1; // 10% 税费
const finalTotal = totalPrice + tax;

totalPriceElement.textContent = totalPrice.toFixed(2);
taxElement.textContent = tax.toFixed(2);
finalTotalElement.textContent = finalTotal.toFixed(2);

// 下单功能
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    alert("Order placed successfully!");
    localStorage.removeItem("cart"); // 清空购物车
    window.location.href = "menu.html"; // 返回菜单
}
