import {cart} from '../JS/bd_zamazor_buy.js'

let vos_articles_array = JSON.parse(localStorage.getItem('articles'));

if(JSON.parse(localStorage.getItem('articles')) === null){
    vos_articles_array = [];
    localStorage.setItem('articles',JSON.stringify(vos_articles_array));  
}
if(vos_articles_array.length === 0){
    const vos_articles_cote = document.querySelector('.vos_articles_cote');
    vos_articles_cote.innerHTML = `<div style="font-size:0.85em;">Aucun article</div>`;
}

export const cartpan = {
    cart_inside : cart,
    checkbox_array : [],
    calc_price(){
        const panier_checkbox = document.querySelectorAll('.panier_checkbox');
        const display_price = document.querySelector('.display_price');
        const aside_sous_total = document.querySelectorAll('.aside_sous_total');
        let total_quantity = 0;
        let total_price = 0;
        for(let i = 0; i <this.cart_inside.length;i++){
            if(panier_checkbox[i].checked){
                total_price += this.cart_inside[i].quantity * this.cart_inside[i].prix;
                total_quantity += this.cart_inside[i].quantity;
            }
        }
        display_price.innerHTML = `Sous-total (${total_quantity} articles) :<b style="margin-left:5px;">${total_price.toFixed(2)} €</b>`;
        aside_sous_total.forEach(function(elem){
            elem.innerHTML = `Sous-total (${total_quantity} articles) : <b>${total_price.toFixed(2)}€</b>`;
        })
    },
    add_panier(){
        let panier_plus = document.querySelectorAll('.panier_plus');
        let panier_quantity = document.querySelectorAll('.panier_quantity');
        let trash_cart = document.querySelectorAll('.trash_cart');
        for(let i = 0; i<this.cart_inside.length;i++){
            panier_plus[i].addEventListener('click',()=>{
                this.cart_inside[i].quantity+=1;
                localStorage.setItem('cart',JSON.stringify(this.cart_inside));  
                panier_quantity[i].innerHTML = `${this.cart_inside[i].quantity}`;
                if(this.cart_inside[i].quantity >= 2){
                    trash_cart[i].innerHTML = `<img src="./Images/minus.png" height="14" style="padding-left:0.5em;padding-right:0.5em;margin-top:0.172em;">`;
                }
                this.calc_price();
            })
        }  
    },
    trash_panier(){
        let trash_cart = document.querySelectorAll('.trash_cart');
        let supprimer_panier = document.querySelectorAll('.supprimer_panier');
        for(let i = 0; i<this.cart_inside.length;i++){
            if(this.cart_inside[i].quantity >= 2){
                trash_cart[i].innerHTML = `<img src="./Images/minus.png" height="14" style="padding-left:0.5em;padding-right:0.5em;margin-top:0.172em;">`;
            }
            trash_cart[i].addEventListener('click',()=>{
                if(this.cart_inside[i].quantity >= 2){
                    this.cart_inside[i].quantity -= 1;
                    localStorage.setItem('cart',JSON.stringify(this.cart_inside));  
                }
                else{
                    this.cart_inside.splice(i,1);
                    localStorage.setItem('cart',JSON.stringify(this.cart_inside));  
                    this.checkbox_array.splice(i,1);
                }
                const panier_insert = document.querySelector('.panier_insert');
                panier_insert.innerHTML = '';
                this.write_panier();
                this.trash_panier();
                this.calc_price();
            })
            supprimer_panier[i].addEventListener('click',()=>{
                this.cart_inside.splice(i,1);
                localStorage.setItem('cart',JSON.stringify(this.cart_inside));  
                this.checkbox_array.splice(i,1);
                const panier_insert = document.querySelector('.panier_insert');
                panier_insert.innerHTML = '';
                this.write_panier();
                this.trash_panier();
                this.calc_price();
            })
        }
    },
    checked_unchecked(){
        let panier_checkbox = document.querySelectorAll('.panier_checkbox');
        for(let i = 0; i<panier_checkbox.length;i++){
            panier_checkbox[i].addEventListener('click',()=>{
                if(this.checkbox_array[i] === 't'){
                    this.checkbox_array[i] = 'f';
                }
                else{
                    this.checkbox_array[i] = 't';
                }
                this.calc_price();
            })
        }
    },
    mettre_cote(){
        let mettre_cote = document.querySelectorAll('.mettre_cote');
        for(let i = 0; i< mettre_cote.length;i++){
            mettre_cote[i].addEventListener('click',()=>{
                let double = false;
                this.cart_inside[i].quantity = 1;
                for(let j = 0;j<articleobj.vos_articles_array_obj.length;j++){
                    if(articleobj.vos_articles_array_obj[j].id === this.cart_inside[i].id){
                        articleobj.vos_articles_array_obj.splice(j,1);
                        articleobj.vos_articles_array_obj.push({...this.cart_inside[i]});
                        localStorage.setItem('articles',JSON.stringify(articleobj.vos_articles_array_obj));
                        this.cart_inside.splice(i,1);
                        localStorage.setItem('cart',JSON.stringify(this.cart_inside));
                        articleobj.write_articles();
                        const panier_insert = document.querySelector('.panier_insert');
                        panier_insert.innerHTML = '';
                        this.write_panier();
                        this.calc_price();
                        double = true;
                        break;
                    }
                }
                if(!double){
                    articleobj.vos_articles_array_obj.push({...this.cart_inside[i]});
                    localStorage.setItem('articles',JSON.stringify(articleobj.vos_articles_array_obj));
                    articleobj.write_articles()
                    this.cart_inside.splice(i,1);
                    localStorage.setItem('cart',JSON.stringify(this.cart_inside));
                    const panier_insert = document.querySelector('.panier_insert');
                    panier_insert.innerHTML = '';
                    this.write_panier();
                    this.calc_price();
                }
            })
        }
    },
    write_panier(){
        const panier_insert = document.querySelector('.panier_insert');
        for(let i = 0;i<this.cart_inside.length;i++){
            panier_insert.innerHTML += 
            `<div style="display:flex;">
                <input type="checkbox" class="panier_checkbox" style="margin-inline:0.5em;">
                <a href="panier.html" style="margin-inline:1em;"><img src="${this.cart_inside[i].img}" height="170" class="panier_display"></a>
                <div class="panier_article_container">
                    <div>
                        <a href="zamazor_buy.html" class="panier_description">${this.cart_inside[i].desc}</a>
                        <div style="color:#0b7b3c;font-size:0.75em;margin-top:0.3em;margin-bottom:0.3em;">En stock</div>
                        <div class="checkbox_cadeau_container">
                            <input type="checkbox" id="checkbox_cadeau">
                            <div style="font-size:0.75em;">Ceci sera un cadeau</div>
                            <a href="panier.html" style="font-size:0.75em;text-decoration: none;color:#4d81b3;margin-left:0.4em;">En savoir plus</a>
                        </div>
                        <div style="display:flex;align-items:center;color:#dddddd" class="panier_button_container">
                            <div class="pre_panier_button">
                                <div class="trash_cart"><img src="./Images/trash_icon.png" height="14" style="padding-left:0.5em;padding-right:0.5em"></div>
                                <div class="panier_quantity">${this.cart_inside[i].quantity}</div>
                                <div class="panier_plus">+</div>
                            </div>|
                            <div class="panier_button supprimer_panier">Supprimer</div>|
                            <div class="panier_button mettre_cote">Mettre de côté</div>|
                            <div class="panier_button">Voir plus de produits similaires</div>|
                            <div class="panier_button">Partager</div>
                        </div>
                    </div>
                    <div class="panier_article_price">${Math.trunc(this.cart_inside[i].prix)}<sup style="font-size:0.55em">${(Math.round((this.cart_inside[i].prix-Math.trunc(this.cart_inside[i].prix))*100))} €</sup></div>
                </div>
            </div>`;        
            panier_insert.innerHTML += `<hr style="width:100%;color:#d5dbdb2c;margin-top:1em;margin-bottom:1em;">`;
        }
        let panier_checkbox = document.querySelectorAll('.panier_checkbox');
        for(let i = 0; i<panier_checkbox.length;i++){
            if(this.checkbox_array[i] === 't'){
                panier_checkbox[i].checked = true;
            }
        }
        this.checked_unchecked();
        this.add_panier();
        this.mettre_cote();
    }
}

let vos_articles_cote_div_supp = document.querySelectorAll('.vos_articles_cote_div_supp');
let vos_articles_deplacer = document.querySelectorAll('.vos_articles_deplacer');

export const articleobj = {    
    vos_articles_array_obj : vos_articles_array,
    vos_articles_cote_div_supp_func(){
        vos_articles_cote_div_supp = document.querySelectorAll('.vos_articles_cote_div_supp');
        for(let i = 0; i<vos_articles_cote_div_supp.length;i++){
            vos_articles_cote_div_supp[i].addEventListener('click',()=>{
                articleobj.vos_articles_array_obj.splice(i,1);
                localStorage.setItem('articles',JSON.stringify(articleobj.vos_articles_array_obj));
                articleobj.write_articles();
            })
        }
    },
    vos_articles_deplacer_func(){
        vos_articles_deplacer = document.querySelectorAll('.vos_articles_deplacer');
        for(let i = 0; i<vos_articles_deplacer.length;i++){
            vos_articles_deplacer[i].addEventListener('click',()=>{
                let double = false;
                for(let j = 0; j<cartpan.cart_inside.length;j++){
                    if(cartpan.cart_inside[j].id === articleobj.vos_articles_array_obj[i].id){
                        cartpan.cart_inside[j].quantity+=1;
                        localStorage.setItem('cart',JSON.stringify(cartpan.cart_inside));
                        articleobj.vos_articles_array_obj.splice(i,1);
                        localStorage.setItem('articles',JSON.stringify(articleobj.vos_articles_array_obj));
                        const panier_insert = document.querySelector('.panier_insert');
                        panier_insert.innerHTML = '';
                        cartpan.write_panier();
                        cartpan.trash_panier();
                        let trash_cart = document.querySelectorAll('.trash_cart');
                        if(cartpan.cart_inside[j].quantity >= 2){
                            trash_cart[j].innerHTML = `<img src="./Images/minus.png" height="14" style="padding-left:0.5em;padding-right:0.5em;margin-top:0.172em;">`;
                        }
                        this.write_articles();
                        cartpan.calc_price();
                        double = true;
                        break;
                    }
                }
                if(!double){
                    cartpan.cart_inside.push({...articleobj.vos_articles_array_obj[i]});
                    localStorage.setItem('cart',JSON.stringify(cartpan.cart_inside));
                    articleobj.vos_articles_array_obj.splice(i,1);
                    localStorage.setItem('articles',JSON.stringify(articleobj.vos_articles_array_obj));
                    const panier_insert = document.querySelector('.panier_insert');
                    panier_insert.innerHTML = '';
                    cartpan.write_panier();
                    cartpan.trash_panier();
                    this.write_articles();
                    cartpan.calc_price();
                }
            })
        }
    },
    write_articles(){
        const vos_articles_cote = document.querySelector('.vos_articles_cote');
        const vos_articles_enregistrer = document.querySelector('.vos_articles_enregistrer');
        vos_articles_cote.innerHTML = '';
        let total_article = 0;
        for(let i = 0; i<articleobj.vos_articles_array_obj.length;i++){
            vos_articles_cote.innerHTML += 
            `<div style="border : 1px solid  #e7e7e7;padding:0.6em; class="grid_container_articles">
                <img src="${articleobj.vos_articles_array_obj[i].img}" style="object-fit: contain;width:95%;aspect-ratio:1/1;">
                <div style=" display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;
                overflow: hidden;text-overflow: clip;height:35px;">${articleobj.vos_articles_array_obj[i].desc}</div>
                <div class="panier_article_price">${Math.trunc(articleobj.vos_articles_array_obj[i].prix)}<sup style="font-size:0.55em">${(Math.round((articleobj.vos_articles_array_obj[i].prix-Math.trunc(articleobj.vos_articles_array_obj[i].prix))*100))} €</sup></div>
                <div style="color:#3c9663;font-size:0.75em;">En stock</div>
                <div class="vos_articles_deplacer">Déplacer dans le panier</div>
                <div style="display: flex;flex-direction: column;gap:0.4em;margin-top:0.8em;">
                    <div class="vos_articles_cote_div vos_articles_cote_div_supp">Supprimer</div>
                    <div class="vos_articles_cote_div">Ajouter à la liste</div>
                    <div class="vos_articles_cote_div">Voir plus de produits similaires</div>
                </div>
            </div>`;
            total_article += articleobj.vos_articles_array_obj[i].quantity;
        }
        if(articleobj.vos_articles_array_obj.length === 0){
            vos_articles_cote.innerHTML = `<div style="font-size:0.85em;">Aucun article</div>`;
        }
        if(total_article > 1){
            vos_articles_enregistrer.innerHTML = `Enregistré pour plus tard (${total_article} articles)`;
        }
        else{
            vos_articles_enregistrer.innerHTML = `Enregistré pour plus tard (${total_article} article)`;
        }
        this.vos_articles_cote_div_supp_func();
        this.vos_articles_deplacer_func();
    }
}

articleobj.write_articles()

