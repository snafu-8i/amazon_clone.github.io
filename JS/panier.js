import {cart} from './bd_zamazor_buy.js'
import {array_product} from './bd_zamazor_buy.js'


let checkbox_array = [];
let panier_checkbox = document.querySelectorAll('.panier_checkbox');

write_panier(); 
panier_checkbox = document.querySelectorAll('.panier_checkbox');
for(let i = 0; i<panier_checkbox.length;i++){
    panier_checkbox[i].checked = true;
    checkbox_array.push('t');
}
calc_price();
trash_panier();

function write_panier(){
    const panier_insert = document.querySelector('.panier_insert');
    for(let i = 0;i<cart.length;i++){
        panier_insert.innerHTML += 
        `<div style="display:flex;">
            <input type="checkbox" class="panier_checkbox" style="margin-inline:0.5em;">
            <a href="panier.html" style="margin-inline:1em;"><img src="${cart[i].img}" height="170" class="panier_display"></a>
            <div class="panier_article_container">
                <div>
                    <a href="zamazor_buy.html" class="panier_description">${cart[i].desc}</a>
                    <div style="color:#0b7b3c;font-size:0.75em;margin-top:0.3em;margin-bottom:0.3em;">En stock</div>
                    <div class="checkbox_cadeau_container">
                        <input type="checkbox" id="checkbox_cadeau">
                        <div style="font-size:0.75em;">Ceci sera un cadeau</div>
                        <a href="panier.html" style="font-size:0.75em;text-decoration: none;color:#4d81b3;margin-left:0.4em;">En savoir plus</a>
                    </div>
                    <div style="display:flex;align-items:center;color:#dddddd" class="panier_button_container">
                        <div class="pre_panier_button">
                            <div class="trash_cart"><img src="./Images/trash_icon.png" height="14" style="padding-left:0.5em;padding-right:0.5em"></div>
                            <div class="panier_quantity">${cart[i].quantity}</div>
                            <div class="panier_plus">+</div>
                        </div>|
                        <div class="panier_button supprimer_panier">Supprimer</div>|
                        <div class="panier_button mettre_cote">Mettre de côté</div>|
                        <div class="panier_button">Voir plus de produits similaires</div>|
                        <div class="panier_button">Partager</div>
                    </div>
                </div>
                <div class="panier_article_price">${Math.trunc(cart[i].prix)}<sup style="font-size:0.55em">${(Math.round((cart[i].prix-Math.trunc(cart[i].prix))*100))} €</sup></div>
            </div>
        </div>`;        
        panier_insert.innerHTML += `<hr style="width:100%;color:#d5dbdb2c;margin-top:1em;margin-bottom:1em;">`;
    }
    panier_checkbox = document.querySelectorAll('.panier_checkbox');
    for(let i = 0; i<panier_checkbox.length;i++){
        if(checkbox_array[i] === 't'){
            panier_checkbox[i].checked = true;
        }
    }
    checked_unchecked();
    add_panier();
    mettre_cote();
}

function calc_price(){
    panier_checkbox = document.querySelectorAll('.panier_checkbox');
    const display_price = document.querySelector('.display_price');
    const aside_sous_total = document.querySelectorAll('.aside_sous_total');
    let total_quantity = 0;
    let total_price = 0;
    for(let i = 0; i <cart.length;i++){
        if(panier_checkbox[i].checked){
            total_price += cart[i].quantity * cart[i].prix;
            total_quantity += cart[i].quantity;
        }
    }
    display_price.innerHTML = `Sous-total (${total_quantity} articles) :<b style="margin-left:5px;">${total_price.toFixed(2)} €</b>`;
    aside_sous_total.forEach(function(elem){
        elem.innerHTML = `Sous-total (${total_quantity} articles) : <b>${total_price.toFixed(2)}€</b>`;
    })
}

//add panier

function add_panier(){
    let panier_plus = document.querySelectorAll('.panier_plus');
    let panier_quantity = document.querySelectorAll('.panier_quantity');
    let trash_cart = document.querySelectorAll('.trash_cart');
    for(let i = 0; i<cart.length;i++){
        panier_plus[i].addEventListener('click',()=>{
            cart[i].quantity+=1;
            localStorage.setItem('cart',JSON.stringify(cart));  
            panier_quantity[i].innerHTML = `${cart[i].quantity}`;
            if(cart[i].quantity >= 2){
                trash_cart[i].innerHTML = `<img src="./Images/minus.png" height="14" style="padding-left:0.5em;padding-right:0.5em;margin-top:0.172em;">`;
            }
            calc_price();
        })
    }  
}

//trash_panier

function trash_panier(){
    let trash_cart = document.querySelectorAll('.trash_cart');
    let supprimer_panier = document.querySelectorAll('.supprimer_panier');
    for(let i = 0; i<cart.length;i++){
        if(cart[i].quantity >= 2){
            trash_cart[i].innerHTML = `<img src="./Images/minus.png" height="14" style="padding-left:0.5em;padding-right:0.5em;margin-top:0.172em;">`;
        }
        trash_cart[i].addEventListener('click',()=>{
            if(cart[i].quantity >= 2){
                cart[i].quantity -= 1;
                localStorage.setItem('cart',JSON.stringify(cart));  
            }
            else{
                cart.splice(i,1);
                localStorage.setItem('cart',JSON.stringify(cart));  
                checkbox_array.splice(i,1);
            }
            const panier_insert = document.querySelector('.panier_insert');
            panier_insert.innerHTML = '';
            write_panier();
            trash_panier();
            calc_price();
        })
        supprimer_panier[i].addEventListener('click',()=>{
            cart.splice(i,1);
            localStorage.setItem('cart',JSON.stringify(cart));  
            checkbox_array.splice(i,1);
            const panier_insert = document.querySelector('.panier_insert');
            panier_insert.innerHTML = '';
            write_panier();
            trash_panier();
            calc_price();
        })
    }
}

//checked-unchecked

function checked_unchecked(){
    panier_checkbox = document.querySelectorAll('.panier_checkbox');
    for(let i = 0; i<panier_checkbox.length;i++){
        panier_checkbox[i].addEventListener('click',()=>{
            if(checkbox_array[i] === 't'){
                checkbox_array[i] = 'f';
            }
            else{
                checkbox_array[i] = 't';
            }
            calc_price();
        })
    }
}

//add_side_article

const temp_article = [
    { id: 15, prix: 69.99, img: "./Images/article_16.jpg", quantity: 1 , desc:`Crucial P310 SSD 1To PCIe Gen4 NVMe M.2 2280 SSD Interne Gaming, jusqu’à 7.100 Mo/s, Compatible avec Ordinateur Portable et de Bureau, Disque Dur SSD - CT1000P310SSD801 (Édition Acronis)`},
    { id: 17, prix: 50.99, img: "./Images/article_18.jpg", quantity: 1 , desc:`SteelSeries Clavier HyperMagnetic gaming Apex Pro Mini - Actionnement ajustable - Facteur de forme compact de 60 % - RVB - Capuchons de touches PBT - USB-C - Français AZERTY`},
    { id: 18, prix: 89.99, img: "./Images/article_19.jpg", quantity: 1 , desc:`Logitech G213 Prodigy, Clavier Gamer, Eclairage RGB LIGHTSYNC, Résistant aux Éclaboussures, Personnalisable, Commandes Multimédia Dédiées, Français AZERTY - Noir`},
    { id: 19, prix: 99.99, img: "./Images/article_20.jpg", quantity: 1 , desc:`CHERRY KC 200 MX, Clavier de bureau mécanique avec plaque en métal anodisé, disposition française (AZERTY), Filaire, MX2A SILENT RED Switches, Noir bronze`},
    { id: 20, prix: 250.99, img: "./Images/article_21.jpg", quantity: 1 , desc:`Logitech K280e Pro Clavier Filaire Business pour Windows/Linux/Chrome, Plug-and-Play USB, Saisie Discrète, Taille Standard, Résistant aux Eclaboussures, AZERTY Français - Noir`},
]

const pannier_add_ajouter = document.querySelectorAll('.pannier_add_ajouter')
for(let i = 0; i<pannier_add_ajouter.length;i++){
pannier_add_ajouter[i].addEventListener('click',()=>{
    let double = false;
    for(let j = 0; j<cart.length;j++){
        if(temp_article[i].id === cart[j].id){
            cart[j].quantity +=1;
            localStorage.setItem('cart',JSON.stringify(cart));  
            let panier_quantity = document.querySelectorAll('.panier_quantity');
            panier_quantity[j].innerHTML = `${cart[j].quantity}`;
            let trash_cart = document.querySelectorAll('.trash_cart');
            if(cart[j].quantity >= 2){
                trash_cart[j].innerHTML = `<img src="./Images/minus.png" height="14" style="padding-left:0.5em;padding-right:0.5em;margin-top:0.172em;">`;
            }
            calc_price();
            double = true;
            break;
        }
    }
    if(!double){
        const panier_insert = document.querySelector('.panier_insert');
        panier_insert.innerHTML = '';
        cart.push({...temp_article[i]});
        localStorage.setItem('cart',JSON.stringify(cart));  
        write_panier();
        panier_checkbox = document.querySelectorAll('.panier_checkbox');
        checkbox_array.push('t');
        panier_checkbox[panier_checkbox.length-1].checked = true;
        trash_panier();
        calc_price();
    }
    
})
}

//all unchecked

const deselectionner = document.querySelector('.deselectionner');
deselectionner.addEventListener('click',()=>{
    panier_checkbox = document.querySelectorAll('.panier_checkbox');
    checkbox_array = [];
    for(let i = 0; i<cart.length;i++){
        panier_checkbox[i].checked = false;
        checkbox_array.push('f');
    }
    calc_price();
})

//vos_articles_array

let vos_articles_array = JSON.parse(localStorage.getItem('articles'));

if(JSON.parse(localStorage.getItem('articles')) === null){
    vos_articles_array = [];
    localStorage.setItem('articles',JSON.stringify(cart));  
}
if(vos_articles_array.length === 0){
    const vos_articles_cote = document.querySelector('.vos_articles_cote');
    vos_articles_cote.innerHTML = `<div style="font-size:0.85em;">Aucun article</div>`;
}
//let vos_articles_array = [];

function write_articles(){
    const vos_articles_cote = document.querySelector('.vos_articles_cote');
    const vos_articles_enregistrer = document.querySelector('.vos_articles_enregistrer');
    vos_articles_cote.innerHTML = '';
    let total_article = 0;
    for(let i = 0; i<vos_articles_array.length;i++){
        vos_articles_cote.innerHTML += 
        `<div style="border : 1px solid  #e7e7e7;padding:0.6em; class="grid_container_articles">
            <img src="${vos_articles_array[i].img}" style="object-fit: contain;width:95%;aspect-ratio:1/1;">
            <div style=" display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;
            overflow: hidden;text-overflow: clip;height:35px;">${vos_articles_array[i].desc}</div>
            <div class="panier_article_price">${Math.trunc(vos_articles_array[i].prix)}<sup style="font-size:0.55em">${(Math.round((vos_articles_array[i].prix-Math.trunc(vos_articles_array[i].prix))*100))} €</sup></div>
            <div style="color:#3c9663;font-size:0.75em;">En stock</div>
            <div class="vos_articles_deplacer">Déplacer dans le panier</div>
            <div style="display: flex;flex-direction: column;gap:0.4em;margin-top:0.8em;">
                <div class="vos_articles_cote_div vos_articles_cote_div_supp">Supprimer</div>
                <div class="vos_articles_cote_div">Ajouter à la liste</div>
                <div class="vos_articles_cote_div">Voir plus de produits similaires</div>
            </div>
        </div>`;
        total_article += vos_articles_array[i].quantity;
    }
    if(vos_articles_array.length === 0){
        vos_articles_cote.innerHTML = `<div style="font-size:0.85em;">Aucun article</div>`;
    }
    if(total_article > 1){
        vos_articles_enregistrer.innerHTML = `Enregistré pour plus tard (${total_article} articles)`;
    }
    else{
        vos_articles_enregistrer.innerHTML = `Enregistré pour plus tard (${total_article} article)`;
    }
    vos_articles_cote_div_supp_func();
    vos_articles_deplacer_func();
}

//mettre_cote

function mettre_cote(){
    let mettre_cote = document.querySelectorAll('.mettre_cote');
    for(let i = 0; i< mettre_cote.length;i++){
        mettre_cote[i].addEventListener('click',()=>{
            let double = false;
            cart[i].quantity = 1;
            for(let j = 0;j<vos_articles_array.length;j++){
                if(vos_articles_array[j].id === cart[i].id){
                    vos_articles_array.splice(j,1);
                    vos_articles_array.push({...cart[i]});
                    localStorage.setItem('articles',JSON.stringify(vos_articles_array));
                    cart.splice(i,1);
                    localStorage.setItem('cart',JSON.stringify(cart));
                    write_articles();
                    const panier_insert = document.querySelector('.panier_insert');
                    panier_insert.innerHTML = '';
                    write_panier();
                    calc_price();
                    double = true;
                    break;
                }
            }
            if(!double){
                vos_articles_array.push({...cart[i]});
                localStorage.setItem('articles',JSON.stringify(vos_articles_array));
                write_articles()
                cart.splice(i,1);
                localStorage.setItem('cart',JSON.stringify(cart));
                const panier_insert = document.querySelector('.panier_insert');
                panier_insert.innerHTML = '';
                write_panier();
                calc_price();
            }
        })
    }
}

//enregistre_supp

let vos_articles_cote_div_supp = document.querySelectorAll('.vos_articles_cote_div_supp');

function vos_articles_cote_div_supp_func(){
    vos_articles_cote_div_supp = document.querySelectorAll('.vos_articles_cote_div_supp');
    for(let i = 0; i<vos_articles_cote_div_supp.length;i++){
        vos_articles_cote_div_supp[i].addEventListener('click',()=>{
            vos_articles_array.splice(i,1);
            localStorage.setItem('articles',JSON.stringify(vos_articles_array));
            write_articles();
        })
    }
}

//deplacer_panier

let vos_articles_deplacer = document.querySelectorAll('.vos_articles_deplacer');
function vos_articles_deplacer_func(){
    vos_articles_deplacer = document.querySelectorAll('.vos_articles_deplacer');
    for(let i = 0; i<vos_articles_deplacer.length;i++){
        vos_articles_deplacer[i].addEventListener('click',()=>{
            let double = false;
            for(let j = 0; j<cart.length;j++){
                if(cart[j].id === vos_articles_array[i].id){
                    cart[j].quantity+=1;
                    localStorage.setItem('cart',JSON.stringify(cart));
                    vos_articles_array.splice(i,1);
                    localStorage.setItem('articles',JSON.stringify(vos_articles_array));
                    const panier_insert = document.querySelector('.panier_insert');
                    panier_insert.innerHTML = '';
                    write_panier();
                    trash_panier();
                    let trash_cart = document.querySelectorAll('.trash_cart');
                    if(cart[j].quantity >= 2){
                        trash_cart[j].innerHTML = `<img src="./Images/minus.png" height="14" style="padding-left:0.5em;padding-right:0.5em;margin-top:0.172em;">`;
                    }
                    write_articles();
                    calc_price();
                    double = true;
                    break;
                }
            }
            if(!double){
                cart.push({...vos_articles_array[i]});
                localStorage.setItem('cart',JSON.stringify(cart));
                vos_articles_array.splice(i,1);
                localStorage.setItem('articles',JSON.stringify(vos_articles_array));
                const panier_insert = document.querySelector('.panier_insert');
                panier_insert.innerHTML = '';
                write_panier();
                trash_panier();
                write_articles();
                calc_price();
            }
        })
    }
}

write_articles()

//vos_articles_acheter

const vos_articles_acheter = document.querySelector('.vos_articles_acheter');
const vos_articles_enregistrer = document.querySelector('.vos_articles_enregistrer');
vos_articles_acheter.addEventListener('click',()=>{
    vos_articles_acheter.classList.add('vos_articles_acheter_add');
    vos_articles_enregistrer.classList.add('vos_articles_enregistrer_add');
    const vos_articles_cote = document.querySelector('.vos_articles_cote');
    vos_articles_cote.style.display = "block";
    vos_articles_cote.innerHTML = '';
    vos_articles_cote.innerHTML = `
    <div style="display:flex;gap:0.5em;max-width:1000px;">
        <a href="panier.html"><img src="${array_product[29].img}" class="resize"></a>
        <div class="acheter_nouveau_link_container">
            <div style="max-width:90%;">
                <a href="panier.html" class="acheter_nouveau_link">${array_product[29].desc}</a>
                <div style="color:#3c9663;font-size:0.75em;margin-top:0.2em;">En stock</div>
                <div class="acheter_nouveau_add">Ajouter au panier</div>
            </div>
            <div style="font-weight: 600;color:#b12704;font-size:1.2em;margin-top:0.3em;margin-left:1.5em;">${array_product[29].prix}</div>
        </div>
    </div>
    <div style="display:flex;gap:0.5em;max-width:1000px;margin-top:1em;">
        <a href="panier.html"><img src="${array_product[28].img}" class="resize"></a>
        <div class="acheter_nouveau_link_container">
            <div style="max-width:90%;">
                <a href="panier.html" class="acheter_nouveau_link">${array_product[28].desc}</a>
                <div style="color:#3c9663;font-size:0.75em;margin-top:0.2em;">En stock</div>
                <div class="acheter_nouveau_add">Ajouter au panier</div>
            </div>
            <div style="font-weight: 600;color:#b12704;font-size:1.2em;margin-top:0.3em;margin-left:1.5em;">${array_product[28].prix}</div>
        </div>
    </div>
    `;
    const acheter_nouveau_add = document.querySelectorAll('.acheter_nouveau_add');
    for(let i = 0;i<acheter_nouveau_add.length;i++){
        acheter_nouveau_add[i].addEventListener('click',()=>{
            cart.push({...array_product[29-i]});
            localStorage.setItem('cart',JSON.stringify(cart));
            const panier_insert = document.querySelector('.panier_insert');
            panier_insert.innerHTML = '';
            write_panier();
            checkbox_array = [];
            panier_checkbox = document.querySelectorAll('.panier_checkbox');
            for(let i = 0; i<panier_checkbox.length;i++){
                panier_checkbox[i].checked = true;
                checkbox_array.push('t');
            }
            trash_panier();
            calc_price();
        })
    }
})

vos_articles_enregistrer.addEventListener('click',()=>{
    vos_articles_acheter.classList.remove('vos_articles_acheter_add');
    vos_articles_enregistrer.classList.remove('vos_articles_enregistrer_add');
    const vos_articles_cote = document.querySelector('.vos_articles_cote');
    vos_articles_cote.style.display = "grid";
    vos_articles_cote.innerHTML = '';
    write_articles();
})

