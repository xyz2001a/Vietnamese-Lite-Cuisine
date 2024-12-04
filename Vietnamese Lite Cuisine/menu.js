let currentFood = null; // 当前选择的食物
let quantity = 1;

// 显示菜单分类
function showCategory(category) {
    const menuItems = {
        pho: [
            { name: "Pho Bo", price: 10, description: "Beef noodle soup", image: "./images/pho-bo.jpg" },
            { name: "Pho Ga", price: 9, description: "Chicken noodle soup", image: "./images/pho-ga.jpg" }
        ],
        "bahn-mi": [
            { name: "Classic Bahn Mi", price: 8, description: "Vietnamese sandwich with pork", image: "./images/bahn-mi.jpg" }
        ],
        // 其他分类的菜单项...
    };

    const items = menuItems[category];
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = ""; // 清空之前的内容

    items.forEach((item) => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick='openModal(${JSON.stringify(item)})'>View</button>
        `;
        menuContainer.appendChild(div);
    });
}

// 打开详情弹窗
function openModal(food) {
    currentFood = food;
    quantity = 1;

    document.getElementById("food-image").src = food.image;
    document.getElementById("food-title").innerText = food.name;
    document.getElementById("food-description").innerText = food.description;
    document.getElementById("food-price").innerText = `$${food.price.toFixed(2)}`;
    document.getElementById("food-quantity").innerText = quantity;

    document.getElementById("food-modal").style.display = "block";
}

// 关闭弹窗
function closeModal() {
    document.getElementById("food-modal").style.display = "none";
}

// 更改数量
function changeQuantity(delta) {
    quantity = Math.max(1, quantity + delta); // 保证数量最少为 1
    document.getElementById("food-quantity").innerText = quantity;
}

// 添加到购物车
function addToCart() {
    if (!currentFood) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...currentFood, quantity });
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${currentFood.name} (x${quantity}) added to cart!`);
    closeModal();
}
