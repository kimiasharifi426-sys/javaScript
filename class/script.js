// =========================
// Plastic Shop JavaScript
// =========================
// دریافت محصولات
const cards = document.querySelectorAll(".card");
// دریافت سبد خرید
const cartList = document.getElementById("cart-list");
// نمایش مجموع قیمت
const total = document.getElementById("total");
// دریافت جستجو
const search = document.getElementById("search");
// آرایه سبد خرید
let cart = JSON.parse(localStorage.getItem("cart")) || [];
// --------------------------
// نمایش سبد خرید
// --------------------------
function renderCart(){
    cartList.innerHTML="";
    let sum=0;
    cart.forEach((item,index)=>{
        sum += item.price;
        cartList.innerHTML += `
        <li>
            <span>${item.name}</span>
            <span>${item.price.toLocaleString()} تومان</span>
            <button class="delete" onclick="removeItem(${index})">
                حذف
            </button>
        </li>
        `;
    });
    total.innerText = sum.toLocaleString();
    localStorage.setItem("cart",JSON.stringify(cart));
}
// --------------------------
// حذف محصول
// --------------------------
function removeItem(index){
    cart.splice(index,1);
    renderCart();
}
// --------------------------
// افزودن به سبد
// --------------------------
cards.forEach(card=>{
    const btn=card.querySelector("button");
    btn.addEventListener("click",()=>{
        const name=card.querySelector("h3").innerText;
        const price=parseInt(card.querySelector(".price").innerText);
        cart.push({
            name:name,
            price:price
        });
        renderCart();
        alert(name+" به سبد خرید اضافه شد.");
    });
});
// --------------------------
// جستجو
// --------------------------
search.addEventListener("keyup",()=>{
    let value = search.value.toLowerCase();
    cards.forEach(card=>{
        let title = card.querySelector("h3").innerText.toLowerCase();
        if(title.includes(value)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
    });
});
// --------------------------
// تغییر رنگ هدر هنگام اسکرول
// --------------------------
window.addEventListener("scroll",()=>{
    const header=document.querySelector("header");
    if(window.scrollY>80){
        header.style.background="#0D47A1";
    }else{
        header.style.background="#1976D2";
    }
});
// --------------------------
// اسکرول نرم دکمه
// --------------------------
const btn=document.querySelector(".btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    document.querySelector("#products").scrollIntoView({
        behavior:"smooth"
    });
});
// --------------------------
// نمایش اولیه سبد خرید
// --------------------------
renderCart();