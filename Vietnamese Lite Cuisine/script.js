// 模拟食物数据
const foodData = {
    pho: [
        { name: "Vegan Pho", description: "Delicious vegan broth with tofu.", price: "$14.95", image: "./images/food1.jpg" },
        { name: "Chicken Pho", description: "Classic chicken broth.", price: "$15.95", image: "./images/food2.jpg" },
    ],
    // 其他分类数据...
};

let cart = []; // 购物车数据

function showCategory(category) {
    const menu = document.getElementById("menu-items");
    menu.innerHTML = "";
    foodData[category].forEach(food => {
        const item = document.createElement("div");
        item.className = "menu-item";
        item.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <h3>${food.name}</h3>
            <p>${food.price}</p>
        `;
        item.onclick = () => openModal(food);
        menu.appendChild(item);
    });
}

function openModal(food) {
    document.getElementById("food-image").src = food.image;
    document.getElementById("food-title").textContent = food.name;
    document.getElementById("food-description").textContent = food.description;
    document.getElementById("food-price").textContent = food.price;
    document.getElementById("food-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("food-modal").style.display = "none";
}

function changeQuantity(amount) {
    const quantityElement = document.getElementById("food-quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(1, quantity + amount);
    quantityElement.textContent = quantity;
}

function addToCart() {
    const foodName = document.getElementById("food-title").textContent;
    const quantity = parseInt(document.getElementById("food-quantity").textContent);
    cart.push({ name: foodName, quantity });
    alert(`${foodName} added to cart.`);
    closeModal();
}
