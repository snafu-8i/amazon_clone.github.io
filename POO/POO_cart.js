import {array_product} from '../JS/bd_zamazor_buy.js'
import {cart} from '../JS/bd_zamazor_buy.js'

const add_cart = document.querySelector('.add_cart');
let select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
let trash = document.querySelectorAll('.trash');
let inline_trash = document.querySelectorAll('.inline_trash');
let select_cart_drop_div_input = document.querySelectorAll('.select_cart_drop_div_input');
let select_cart_container_input = document.querySelectorAll('#select_cart_container_input');
let cart_checkbox_label = document.querySelectorAll('.cart_checkbox_label');
let select_cart_drop = document.querySelectorAll('.select_cart_drop');

 export const cartobj = {
    cart_inside : cart,
    calc_price(){
        const display_price = document.querySelector('.display_price');
        let total_price = 0;
        for(let i = 0; i <cart.length;i++){
            total_price += cart[i].quantity * cart[i].prix;
        }
        display_price.innerHTML = `${total_price.toFixed(2)} €`;
    },
    delete_add_cart(i){
        this.cart_inside.splice(i,1);
        localStorage.setItem('cart',JSON.stringify(this.cart_inside));  
        add_cart.innerHTML='';
        for(let i = 0;i<this.cart_inside.length;i++){
            this.write_html_add_cart(this.cart_inside[i].id);
        }
        select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
        for(let i = 0;i<select_cart_container_quantite.length;i++){
            select_cart_container_quantite[i].innerHTML= `Quantité : ${this.cart_inside[i].quantity}`;
        }
        this.calc_price();
    },
    select_cart_drop_func(j){
        add_cart.style.paddingBottom = "12em";
        select_cart_drop[j].style.display="flex";
        const select_cart_drop_div = document.querySelectorAll(`.select_cart_drop_div${this.cart_inside[j].id}`);
        for(let m =0;m<select_cart_drop_div.length;m++){
            select_cart_drop_div[m].addEventListener("click", ()=>this.choose_quantity(this.cart_inside[j].id,m+1));
        }
    },
    choose_quantity(i,p){
        for(let u =0;u<this.cart_inside.length;u++){
            if(this.cart_inside[u].id === i){
                this.cart_inside[u].quantity = p;
                localStorage.setItem('cart',JSON.stringify(this.cart_inside));  
                select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
                select_cart_container_quantite[u].innerHTML = `Quantité : ${this.cart_inside[u].quantity}`;
            }
        }
        this.calc_price();
        select_cart_drop.forEach((ele)=>{
            add_cart.style.paddingBottom = "0em";
            ele.style.display = "none";
        })
    },
    select_cart_drop_div_input_func(i){
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
                    this.cart_inside[i].quantity = parseInt(select_cart_container_input[i].value);
                    select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
                    select_cart_container_quantite[i].innerHTML = `Quantité : ${this.cart_inside[i].quantity}`;
                    this.calc_price();
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
    },
    write_html_add_cart(i){
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
        cart_checkbox_label = document.querySelectorAll('.cart_checkbox_label');
        select_cart_drop = document.querySelectorAll('.select_cart_drop');
        inline_trash = document.querySelectorAll('.inline_trash');
        select_cart_drop_div_input = document.querySelectorAll('.select_cart_drop_div_input');
        select_cart_container_input = document.querySelectorAll('#select_cart_container_input');
        for(let i = 0;i<trash.length;i++){//add event listener instantly
            trash[i].addEventListener("click", ()=>this.delete_add_cart(i));//mettre dans une fonction COMPRENDRE
            cart_checkbox_label[i].addEventListener("click",()=>this.select_cart_drop_func(i))
            inline_trash[i].addEventListener("click", ()=>this.delete_add_cart(i));
            select_cart_drop_div_input[i].addEventListener("click", ()=>this.select_cart_drop_div_input_func(i));
        }
    },
}
