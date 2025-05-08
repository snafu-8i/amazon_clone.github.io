import {cartobj} from '../POO/POO_cart.js'
import {array_product} from './bd_zamazor_buy.js'

const add_cart = document.querySelector('.add_cart');
const plus_button = document.querySelectorAll('.plus_button');
let select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
let select_cart_container_input = document.querySelectorAll('#select_cart_container_input');
let cart_checkbox_label = document.querySelectorAll('.cart_checkbox_label');
let select_cart_drop = document.querySelectorAll('.select_cart_drop');
let exit_all = document.querySelectorAll('.exit');

exit_all.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        select_cart_drop = document.querySelectorAll('.select_cart_drop');
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

for(let i = 0;i<plus_button.length;i++){
    plus_button[i].addEventListener('click',()=>{
        if(cartobj.cart_inside.length === 0){
            cartobj.cart_inside.push({...array_product[i]});
            localStorage.setItem('cart',JSON.stringify(cartobj.cart_inside));  
            cartobj.write_html_add_cart(i);
            cartobj.calc_price();
        }
        else{
            let quantity_add = true;
            for(let j =0; j<cartobj.cart_inside.length;j++){
                if(array_product[i].id === cartobj.cart_inside[j].id){
                    cartobj.cart_inside[j].quantity++;
                    localStorage.setItem('cart',JSON.stringify(cartobj.cart_inside));  
                    select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
                    select_cart_container_quantite[j].innerHTML = `Quantité : ${cartobj.cart_inside[j].quantity}`;
                    quantity_add = false;
                    cartobj.calc_price()
                    break;
                }
            }    
            if(quantity_add){
                cartobj.cart_inside.push({...array_product[i]});
                localStorage.setItem('cart',JSON.stringify(cartobj.cart_inside));  
                cartobj.write_html_add_cart(i);
                cartobj.calc_price();
            }
        }
    })
}

for(let i = 0; i<cartobj.cart_inside.length;i++){
    cartobj.write_html_add_cart(cartobj.cart_inside[i].id);
    select_cart_container_quantite = document.querySelectorAll('.select_cart_container_quantité');
    select_cart_container_quantite[i].innerHTML = `Quantité : ${cartobj.cart_inside[i].quantity}`;
}
cartobj.calc_price();

