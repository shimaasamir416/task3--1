let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products = [
    {
        id:0,
        image:'img1.webp',
        title:'first earphone',
        price:120,
    },
    {
        id:1,
        image:'istockphoto-1480347688-612x612.jpg',
        title:'second earphone',
        price:200,
    },
    {
        id:2,
        image:'photo-1578319439584-104c94d37305.jpeg',
        title:'third earphone',
        price:80,
    },
    {
        id:3,
        image:'photo-1519558260268-cde7e03a0152.jpeg',
        title:'fourth earphone',
        price:550,
    },
    {
        id:4,
        image:'photo-1484704849700-f032a568e944.jpeg',
        title:'fifth earphone',
        price:165,
    },
    {
        id:5,
        image:'71UssetohsL._AC_UF894,1000_QL80_FMwebp_.webp',
        title:'sixth earphone',
        price:89.50,
    },
    {
        id:6,
        image:'516DQ5YJ4DL._AC_UF894,1000_QL80_FMwebp_.webp',
        title:'seventh earphone',
        price:157,
    },
    {
        id:7,
        image:'51eZ86JYjiL._AC_UF350,350_QL80_FMwebp_.webp',
        title:'eighth earphone',
        price:160,
    },
    {
        id:8,
        image:'61mjSK1If+L._AC_UF894,1000_QL80_FMwebp_.webp',
        title:'ninth earphone',
        price:140,
    },
    {
        id:9,
        image:'istockphoto-1361690432-612x612.jpg',
        title:'tenth earphone',
        price:89,
    },

];
let listCarts = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="image/${value.image}"/>
        <div class = "title">${value.title}</div>
        <div class = "price">${value.price.toLocaleString()}</div>
        <button onclick = "addToCart(${key})">Add to cart</button>
        `;

        list.appendChild(newDiv);
    })

}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.title}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick ="changeQuantity(${key} , ${value.quantity - 1})"> - </button>
                <div class="count">${value.quantity}</div>
                <button onclick ="changeQuantity(${key} , ${value.quantity + 1})"> + </button>
            </div>
            `;

            listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}