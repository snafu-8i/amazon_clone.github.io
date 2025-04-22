//Add a new Element to the cart && calculate price

import {array_product} from './bd_zamazor_buy.js'
import {cart} from './bd_zamazor_buy.js'

const add_cart = document.querySelector('.add_cart');
const plus_button = document.querySelectorAll('.plus_button');
let select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
let trash = document.querySelectorAll('.trash');
let inline_trash = document.querySelectorAll('.inline_trash');
let select_cart_drop_div_input = document.querySelectorAll('.select_cart_drop_div_input');
let select_cart_container_input = document.querySelectorAll('#select_cart_container_input');

//Delete an element from the cart

const delete_add_cart = (i)=>{
    cart.splice(i,1);
    localStorage.setItem('cart',JSON.stringify(cart));  
    add_cart.innerHTML='';
    for(let i = 0;i<cart.length;i++){
        write_html_add_cart(cart[i].id);
    }
    select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
    for(let i = 0;i<select_cart_container_quantite.length;i++){
        select_cart_container_quantite[i].innerHTML= `Quantité : ${cart[i].quantity}`;
    }
    calc_price();
};

let cart_checkbox_label = document.querySelectorAll('.cart_checkbox_label');
let select_cart_drop = document.querySelectorAll('.select_cart_drop');

//dropdown menu for each article

function select_cart_drop_func(j){
    add_cart.style.paddingBottom = "12em";
    select_cart_drop[j].style.display="flex";
    const select_cart_drop_div = document.querySelectorAll(`.select_cart_drop_div${cart[j].id}`);
    for(let m =0;m<select_cart_drop_div.length;m++){
        select_cart_drop_div[m].addEventListener("click", ()=>choose_quantity(cart[j].id,m+1));
    }
}

//Choose the quantity of each element from the cart

function choose_quantity(i,p){
    for(let u =0;u<cart.length;u++){
        if(cart[u].id === i){
            cart[u].quantity = p;
            localStorage.setItem('cart',JSON.stringify(cart));  
            select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
            select_cart_container_quantite[u].innerHTML = `Quantité : ${cart[u].quantity}`;
        }
    }
    calc_price();
    select_cart_drop.forEach((ele)=>{
        add_cart.style.paddingBottom = "0em";
        ele.style.display = "none";
    })
}

//select a quantity for a product

function select_cart_drop_div_input_func(i){
    cart_checkbox_label[i].style.display = "none";
    select_cart_container_input[i].style.display = "block";
    select_cart_container_input[i].focus();
    select_cart_container_input[i].addEventListener("keypress",(elem)=>{
        if(elem.key==="Enter"){
            if(isNaN(parseInt(select_cart_container_input[i].value))){
                select_cart_container_input[i].value = '';
                cart_checkbox_label[i].style.display = "flex";
                select_cart_container_input[i].style.display = "none";
            }
            else{
                cart[i].quantity = parseInt(select_cart_container_input[i].value);
                select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
                select_cart_container_quantite[i].innerHTML = `Quantité : ${cart[i].quantity}`;
                calc_price();
                select_cart_container_input[i].value = '';
                cart_checkbox_label[i].style.display = "flex";
                select_cart_container_input[i].style.display = "none";
            }
        }
    })
    select_cart_drop.forEach((ele)=>{
        add_cart.style.paddingBottom = "0em";
        ele.style.display = "none";
    })
}

//fermer les selects Tout choisir 

let exit_all = document.querySelectorAll('.exit');

 exit_all.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        select_cart_drop.forEach((ele)=>{
            add_cart.style.paddingBottom = "0em";
            ele.style.display = "none";
        })
        select_cart_container_input = document.querySelectorAll('#select_cart_container_input');
        select_cart_container_input.forEach((elem)=>{
            elem.value = '';
            elem.style.display = "none";    
        })
        cart_checkbox_label = document.querySelectorAll('.cart_checkbox_label');
        cart_checkbox_label.forEach((ele)=>{
            ele.style.display = "flex";
        })
    })
 })

//Write html & Create addeventlistener for new elements in the cart

function write_html_add_cart(i){
    add_cart.innerHTML+= `<div class="select_cart_container">
    <div class="add_cart_div">
        <a href="zamazor_buy.html"><img src="${array_product[i].img}"></a>
        <div class="select_cart_container_prix" style="margin-top:10px;margin-bottom:10px;font-weight:bold">${array_product[i].prix}€</div>
    </div>
    <div class="select_cart">
        <div class="cart_checkbox_label">
            <div class="select_cart_container_quantité">Quantité : ${array_product[i].quantity}</div>
            <img src="./Images/arrow_down.png" style="aspect-ratio: 1/1;object-fit: contain;width:15%;mix-blend-mode: darken;margin-left:auto;"> 
        </div>
        <div class="select_cart_container_input_div">
            <input type="text" id="select_cart_container_input" style="width:90%">
        </div>
        <div class="select_cart_drop">
            <div style="border-radius: 10px 10px 0 0;" class="inline_trash">0 (supprimer)</div>
            <div class="select_cart_drop_div${i}">1</div>
            <div class="select_cart_drop_div${i}">2</div>
            <div class="select_cart_drop_div${i}">3</div>
            <div class="select_cart_drop_div${i}">4</div>
            <div class="select_cart_drop_div${i}">5</div>
            <div class="select_cart_drop_div${i}">6</div>
            <div class="select_cart_drop_div${i}">7</div>
            <div class="select_cart_drop_div${i}">8</div>
            <div class="select_cart_drop_div${i}">9</div>
            <div class="select_cart_drop_div_input" style="border-radius: 0 0 10px 10px;">10 +</div>
        </div>
    </div>
    <div class="trash">
        <img src="./Images/trash_icon.png">
    </div>
    </div>`;
    trash = document.querySelectorAll('.trash');
    for(let i = 0;i<trash.length;i++){//add event listener instantly
        trash[i].addEventListener("click", ()=>delete_add_cart(i));//mettre dans une fonction COMPRENDRE
    }
    cart_checkbox_label = document.querySelectorAll('.cart_checkbox_label');
    select_cart_drop = document.querySelectorAll('.select_cart_drop');
    for(let j =0;j<cart_checkbox_label.length;j++){
        cart_checkbox_label[j].addEventListener("click",()=>select_cart_drop_func(j))
    }
    inline_trash = document.querySelectorAll('.inline_trash');
    for(let i = 0;i<inline_trash.length;i++){
        inline_trash[i].addEventListener("click", ()=>delete_add_cart(i));
    }
    select_cart_drop_div_input = document.querySelectorAll('.select_cart_drop_div_input');
    select_cart_container_input = document.querySelectorAll('#select_cart_container_input');
    for(let i = 0;i<select_cart_drop_div_input.length;i++){
        select_cart_drop_div_input[i].addEventListener("click", ()=>select_cart_drop_div_input_func(i));
    }
}

//total price

function calc_price(){
    const display_price = document.querySelector('.display_price');
    let total_price = 0;
    for(let i = 0; i <cart.length;i++){
        total_price += cart[i].quantity * cart[i].prix;
    }
    display_price.innerHTML = `${total_price.toFixed(2)} €`;
}

for(let i = 0;i<plus_button.length;i++){
    plus_button[i].addEventListener('click',()=>{
        if(cart.length === 0){
            cart.push({...array_product[i]});
            localStorage.setItem('cart',JSON.stringify(cart));  
            write_html_add_cart(i);
            calc_price();
        }
        else{
            let quantity_add = true;
            for(let j =0; j<cart.length;j++){
                if(array_product[i].id === cart[j].id){
                    cart[j].quantity++;
                    localStorage.setItem('cart',JSON.stringify(cart));  
                    select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
                    select_cart_container_quantite[j].innerHTML = `Quantité : ${cart[j].quantity}`;
                    quantity_add = false;
                    calc_price()
                    break;
                }
            }    
            if(quantity_add){
                cart.push({...array_product[i]});
                localStorage.setItem('cart',JSON.stringify(cart));  
                write_html_add_cart(i);
                calc_price();
            }
        }
    })
}

for(let i = 0; i<cart.length;i++){
    write_html_add_cart(cart[i].id);
    select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
    select_cart_container_quantite[i].innerHTML = `Quantité : ${cart[i].quantity}`;
}
calc_price();

