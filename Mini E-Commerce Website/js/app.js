
let cart = JSON.parse(localStorage.getItem("cart")) || [];


if (!Array.isArray(cart)) cart = [];

// normalize cart
cart = cart.map(item => ({
  name: item?.name || "",
  price: Number(item?.price) || 0,
  qty: Number(item?.qty) || 1
}));

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* ================= CART ================= */

function addToCart(name, price){
  let existing = cart.find(item => item.name === name);

  if(existing){
    existing.qty += 1;
  } else {
    cart.push({ name, price: Number(price), qty: 1 });
  }

  saveCart();
  updateCartCount();
  displayCart();
}

function updateCartCount(){
  let count = document.getElementById("cart-count");

  if(!count) return;

  let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  count.innerText = totalItems;
}

function displayCart(){

  let cartItems = document.getElementById("cart-items");
  let total = document.getElementById("total");

  if(!cartItems || !total) return;

  cartItems.innerHTML = "";

  /* EMPTY CART */

  if(cart.length === 0){

    cartItems.innerHTML = `
      <tr>
        <td colspan="5" class="text-center">
          Cart is empty 😢
        </td>
      </tr>
    `;

    total.innerText = 0;
    return;
  }

  let sum = 0;

  cart.forEach((item, index)=>{

    let itemTotal = item.price * item.qty;

    sum += itemTotal;

    let li = document.createElement("tr");

    li.innerHTML = `

      <td>${item.name}</td>

      <td>${item.price} AF</td>

      <td>${item.qty}</td>

      <td>${itemTotal} AF</td>

      <td>

        <button class="btn btn-success btn-sm"
          onclick="changeQty(${index},1)">
          +
        </button>

        <button class="btn btn-warning btn-sm"
          onclick="changeQty(${index},-1)">
          -
        </button>

        <button class="btn btn-danger btn-sm"
          onclick="removeItem(${index})">
          X
        </button>

      </td>

    `;

    cartItems.appendChild(li);

  });

  total.innerText = sum;

}


function removeItem(index){
  if(cart[index]){
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    displayCart();
  }
}

function changeQty(index, value){
  if(!cart[index]) return;

  cart[index].qty += value;

  if(cart[index].qty <= 0){
    cart.splice(index, 1);
  }

  saveCart();
  updateCartCount();
  displayCart();
}


let allProducts = [
  // 👗 Hazara Style Collection 

{name:" Green outfit .", price:11000, cat:"dress", img:"images/dress.jpg"},
  {name:" Hazaragi blue dress .", price:18000, cat:"dress", img:"images/dress2.jpg"},
  {name:"Bright red Hazaragi dress .", price:10000, cat:"dress", img:"images/dress3.jpg"},
  {name:"Beautiful sky-blue outfit.", price:9000, cat:"dress", img:"images/dress4.jpg"},
  {name:"Royal purple Hazara dress.", price:12000, cat:"dress", img:"images/dress5.jpg"},
  {name:"Classic white Hazara outfit .", price:12500, cat:"dress", img:"images/dress6.jpg"},
  {name:"White traditional dress with soft pink .", price:14000, cat:"dress", img:"images/dress7.jpg"},
  {name:"White Hazara dress .", price:15000, cat:"dress", img:"images/dress8.jpg"},
  {name:"Deep purple elegant dress .", price:13000, cat:"dress", img:"images/dress9.jpg"},
  {name:"Soft pink dress .", price:20000, cat:"dress", img:"images/dress10.jpg"},
{name:"Stylish pink Hazara dress .", price:4000, cat:"dress", img:"images/dress11.jpg"},
  {name:"Stylish red traditional outfit .", price:16000, cat:"dress", img:"images/dress12.jpg"},
  {name:"Pink and green Hazara dresses.", price:17000, cat:"dress", img:"images/dress13.jpg"},
  {name:"Deep red festive dress .", price:21000, cat:"dress", img:"images/dress14.jpg"},
  {name:"Blue and red Hazara dress .", price:22000, cat:"dress", img:"images/dress15.jpg"},
  {name:"Pink and purple Hazara dresses.", price:24000, cat:"dress", img:"images/dress16.jpg"},
{name:"Hazaragi jewelry .", price:10000, cat:"jewelry", img:"images/jewelry1.jpg"},
  {name:"Elegant jewelry  with traditional embroidery", price:20000, cat:"jewelry", img:"images/jewelry2.jpg"},
  {name:" Hazaragi jewelry ", price:12000, cat:"jewelry", img:"images/jewelry3.jpg"},
  {name:"Beautiful jewelry ", price:9000, cat:"jewelry", img:"images/jewelry4.jpg"},
  {name:"Royal  Hazaragi jewelry ", price:12000, cat:"jewelry", img:"images/jewelry5.jpg"},
  {name:"Classic  Hazara jewelry ", price:12500, cat:"jewelry", img:"images/jewelry6.jpg"},
  {name:" Traditional jewelry ", price:40000, cat:"jewelry", img:"images/jewelry7.jpg"},
  {name:" Hazaragi jewelry with blue accents", price:20000, cat:"jewelry", img:"images/jewelry8.jpg"},
  {name:"Deep elegant jewelry", price:40000, cat:"jewelry", img:"images/jewelry9.jpg"},
  {name:"Soft jewelry ", price:20000, cat:"jewelry", img:"images/jewelry10.jpg"},
{name:"Stylish  Hazaragi jewelry ", price:45000, cat:"jewelry", img:"images/jewelry11.jpg"},
  {name:"Stylish jewelry ", price:16000, cat:"jewelry", img:"images/jewelry12.jpg"},
  {name:" Hazaragi jewelry, ", price:14000, cat:"jewelry", img:"images/jewelry13.jpg"},
  {name:"Deep red jewelry ", price:21000, cat:"jewelry", img:"images/jewelry14.jpg"},
  {name:" Hazaragi jewelry ", price:22000, cat:"jewelry", img:"images/jewelry15.jpg"},
  {name:" Hazaragi jewelry", price:24000, cat:"jewelry", img:"images/jewelry16.jpg"},
 
{name:"Elegant jewelry ", price:11000, cat:"jewelry", img:"images/jewelry17.jpg"},
  {name:"Elegant Hazara jewelry ", price:18000, cat:"jewelry", img:"images/jewelry18.jpg"},
  {name:" Hazaragi jewelry ", price:10000, cat:"jewelry", img:"images/jewelry19.jpg"},
  {name:"Beautiful jewelry ", price:9000, cat:"jewelry", img:"images/jewelry20.jpg"},
  {name:"Royal jewelry", price:12000, cat:"jewelry", img:"images/jewelry21.jpg"},
  {name:"Classic jewelry ", price:12500, cat:"jewelry", img:"images/jewelry22.jpg"},
  {name:" Traditional jewelry ", price:14000, cat:"jewelry", img:"images/jewelry23.jpg"},
  {name:" Hazaragi jewelry ", price:15000, cat:"jewelry", img:"images/jewelry24.jpg"},
  {name:"Deep  elegant jewelry", price:13000, cat:"jewelry", img:"images/jewelry25.jpg"},
  {name:"Soft jewelry", price:20000, cat:"jewelry", img:"images/jewelry26.jpg"},
{name:"Stylish Hazaragi jewelry ", price:4000, cat:"jewelry", img:"images/jewelry27.jpg"},
  {name:"Stylish jewelry ", price:16000, cat:"jewelry", img:"images/jewelry28.jpg"},
  {name:" Hazaragi jewelry", price:17000, cat:"jewelry", img:"images/jewelry29.jpg"},
  {name:"Deep red festive jewelry ", price:21000, cat:"jewelry", img:"images/jewelry30.jpg"},
  {name:"Hazaragi jewelry ", price:22000, cat:"jewelry", img:"images/jewelry31.jpg"},
  {name:" Hazara jewelry", price:24000, cat:"jewelry", img:"images/jewelry32.jpg"},
 {name:" Traditional Shoes", price:500, cat:"shoes", img:"images/shoes1.jpg"},
  {name:"Blue Traditional Shoes.", price:400, cat:"shoes", img:"images/shoes2.jpg"},
  {name:" Red Traditional Shoes", price:450, cat:"shoes", img:"images/shoes3.jpg"},
  {name:" Modern Traditional Shoes", price:800, cat:"shoes", img:"images/shoes4.jpg"},
  {name:" Modern Traditional Shoes", price:850, cat:"shoes", img:"images/shoes5.jpg"},
  {name:"Modern Traditional Shoes ", price:450, cat:"shoes", img:"images/shoes6.jpg"},
  {name:"Modern Traditional Shoes", price:650, cat:"shoes", img:"images/shoes7.jpg"},
  {name:"Classic  Hazara Shoes ", price:700, cat:"shoes", img:"images/shoes8.jpg"},
  {name:" Traditional Shoes ", price:400, cat:"shoes", img:"images/shoes9.jpg"},
  {name:" Hazaragi Shoes ", price:550, cat:"shoes", img:"images/shoes10.jpg"},
  {name:"Deep elegant shoes ", price:900, cat:"shoes", img:"images/shoes11.jpg"},
  {name:"Soft Shoes  elegant traditional style.", price:300, cat:"shoes", img:"images/shoes12.jpg"},
{name:"Stylish  Hazara Shoes ", price:450, cat:"shoes", img:"images/shoes13.jpg"},
  {name:"Stylish Shoes ", price:500, cat:"shoes", img:"images/shoes14.jpg"},
  {name:" Hazaragi Shoes ", price:460, cat:"shoes", img:"images/shoes15.jpg"},
  {name:"Deep red Shoes ", price:560, cat:"shoes", img:"images/shoes16.jpg"},
  {name:" Hazaragi Shoes ", price:470, cat:"shoes", img:"images/shoes17.jpg"},
  {name:" Hazaragi Shoes ", price:690, cat:"shoes", img:"images/shoes18.jpg"},
 
{name:"Elegant Shoes ", price:800, cat:"shoes", img:"images/shoes19.jpg"},
  {name:"Elegant Hazaragi Shoes ", price:600, cat:"shoes", img:"images/shoes20.jpg"},
]


/* ================= DISPLAY PRODUCTS ================= */

function displayProducts(list = allProducts){
  let container = document.getElementById("product-list");

  if(!container) return;

  container.innerHTML = "";

  list.forEach(p=>{
    let col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";

    let card = document.createElement("div");
    card.className = "card shadow";

    card.innerHTML = `
      <img src="${p.img}" class="card-img-top" alt="product">

      <div class="card-body text-center">
        <h6>${p.name}</h6>
        <p>${p.price} AF</p>
      </div>
    `;

    let btn = document.createElement("button");
    btn.className = "btn btn-primary btn-sm";
    btn.innerText = "Add to Cart";

    btn.addEventListener("click", ()=>{
      addToCart(p.name, p.price);
    });

    card.querySelector(".card-body").appendChild(btn);
    col.appendChild(card);
    container.appendChild(col);
  });
}

/* ================= FILTER ================= */

function filterProducts(cat){
  if(cat === "all"){
    displayProducts(allProducts);
  } else {
    displayProducts(allProducts.filter(p => p.cat === cat));
  }
}

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", function(){
  updateCartCount();
  displayCart();
  loadCheckout();
  let params = new URLSearchParams(window.location.search);
  let cat = params.get("cat");

  if(cat){
    filterProducts(cat);
  } else {
    displayProducts(allProducts);
  }
});

/* ================= CHECKOUT ================= */

function loadCheckout(){
  let cartItems = document.getElementById("checkout-items");
  let totalBox = document.getElementById("checkout-total");

  if(!cartItems || !totalBox) return;

  cartItems.innerHTML = "";

  let sum = 0;

  cart.forEach(item=>{
    sum += item.price * item.qty;

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";

    li.innerHTML = `
      ${item.name} × ${item.qty}
      <span>${item.price * item.qty} AF</span>
    `;

    cartItems.appendChild(li);
  });

  totalBox.innerText = sum;
}

/* ================= ORDER ================= */

function placeOrder(){
  let name = document.querySelector("input[placeholder='Your Name']");
  let phone = document.querySelector("input[placeholder='Phone Number']");
  let address = document.querySelector("textarea");

  if(!name || !phone || !address) return;

  if(!name.value || !phone.value || !address.value){
    alert("❌ Please fill all fields!");
    return;
  }

  if(phone.value.length < 8){
    alert("❌ Invalid phone number!");
    return;
  }

  alert("🎉 Order placed successfully!");

  cart = [];
  saveCart();

  updateCartCount();
  loadCheckout();
}

/* ================= LOGIN ================= */

function login() {

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let msg = document.getElementById("msg");

  msg.style.color = "red";

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)) {
    msg.innerText = "❌ Please fill all fields";
    return;
  }

  if (!email.includes("@")) {
    msg.innerText = "❌ Invalid email address";
    return;
  }

  if (password.length < 6) {
    msg.innerText = "❌ Password must be at least 6 characters";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "✅ Login successful";
}
/* ================= CONTACT ================= */

let form = document.getElementById("form");
let successMessage = document.getElementById("success-message");

if(form && successMessage){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    successMessage.innerHTML = "✨ Your message has been sent successfully.";
    form.reset();
  });
}

/* ================= DARK MODE ================= */

function toggleDark(){
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark");
}

let searchBox = document.getElementById("searchBox");
let category = document.getElementById("category");

/* ================= SEARCH SYSTEM ================= */

function filterAndSearch(){

  let keyword = searchBox.value.trim().toLowerCase();
  let cat = category.value;

  let result = allProducts.filter(p => {

    let matchText =
      p.name.toLowerCase().includes(keyword) ||
      p.cat.toLowerCase().includes(keyword);

    let matchCat = (cat === "all" || p.cat === cat);

    return matchText && matchCat;
  });

  displayProducts(result);
}

/* ================= EVENTS ================= */

if(searchBox && category){
  searchBox.addEventListener("input", filterAndSearch);
  category.addEventListener("change", filterAndSearch);
}
let searchForm = document.getElementById("searchForm");

if(searchForm){
  searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    filterAndSearch();
  });
}





