const shop = document.getElementById("shop");
const cart = document.getElementById("cart");
const subTotal = document.getElementById("sub-total")


const shopItemData = [{
    id: 1,
    name: "Touche Essentials",
    description: "Mens Regular-Fit Shirt",
    price: 17.99,
    quantity: 0
},
{
    id: 2,
    name: "Macho Wear",
    description: "Mens Shirt",
    price: 107.99,
    quantity: 0
},
{
    id: 3,
    name: "Trainners Essentials",
    description: "Mens Sport wear",
    price: 90.99,
    quantity: 0
},
{
    id: 4,
    name: "Chic magnet",
    description: "Mens casual",
    price: 67.90,
    quantity: 0
}]


const generateShop = () => {
    cartItems()
    shopItemData.forEach(item => {
        let node = `<div class="item">
        <img width="220" src="phil-monte-4V4t0JcOM5E-unsplash.jpg" alt="">
        <div class="details">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price-quantity">
                <h2>$ <span id="price-${item.id}">${item.price}</span> </h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg" onClick='subtractQuantity(${item.id})'></i>
                    <div id="quantity-${item.id}">${item.quantity}</div>
                    <i class="bi bi-plus" onClick='addQuantity(${item.id})'></i>
                </div>
            </div>
        </div>
        </div>`;
        shop.innerHTML += `${node}`
    })
};

const cartItems = () => {
    let total = 0
    shopItemData.forEach(item => {
        total += item.quantity
    })

    cart.innerText = total
}

const addQuantity = (id) => {
    const quantity = document.getElementById(`quantity-${id}`)
    const price = document.getElementById(`price-${id}`)

    let qty = Number(quantity.innerText) + 1
    quantity.innerText = qty

    let total = Number(subTotal.innerText) + Number(price.innerText)
    subTotal.innerText = total.toFixed(2)

    cart.innerText = Number(cart.innerText) + 1
}


const subtractQuantity = (id) => {
    const quantity = document.getElementById(`quantity-${id}`)
    const price = document.getElementById(`price-${id}`)

    if(Number(quantity.innerText) === 0) return     
    let qty = Number(quantity.innerText) - 1
    quantity.innerText = qty

    let total = Number(subTotal.innerText) - Number(price.innerText)
    subTotal.innerText = total.toFixed(2)

    cart.innerText = Number(cart.innerText) - 1
}

generateShop()