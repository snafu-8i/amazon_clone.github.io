import {cartpan,articleobj} from '../POO/POO_panier.js'
import {array_product} from './bd_zamazor_buy.js'

cartpan.write_panier(); 
cartpan.trash_panier();
let panier_checkbox = document.querySelectorAll('.panier_checkbox');
for(let i = 0; i<panier_checkbox.length;i++){
    panier_checkbox[i].checked = true;
    cartpan.checkbox_array.push('t');
}
cartpan.calc_price();

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
        for(let j = 0; j<cartpan.cart_inside.length;j++){
            if(temp_article[i].id === cartpan.cart_inside[j].id){
                cartpan.cart_inside[j].quantity +=1;
                localStorage.setItem('cart',JSON.stringify(cartpan.cart_inside));  
                let panier_quantity = document.querySelectorAll('.panier_quantity');
                panier_quantity[j].innerHTML = `${cartpan.cart_inside[j].quantity}`;
                let trash_cart = document.querySelectorAll('.trash_cart');
                if(cartpan.cart_inside[j].quantity >= 2){
                    trash_cart[j].innerHTML = `<img src="./Images/minus.png" height="14" style="padding-left:0.5em;padding-right:0.5em;margin-top:0.172em;">`;
                }
                cartpan.calc_price();
                double = true;
                break;
            }
        }
        if(!double){
            const panier_insert = document.querySelector('.panier_insert');
            panier_insert.innerHTML = '';
            cartpan.cart_inside.push({...temp_article[i]});
            localStorage.setItem('cart',JSON.stringify(cartpan.cart_inside));  
            cartpan.write_panier();
            panier_checkbox = document.querySelectorAll('.panier_checkbox');
            cartpan.checkbox_array.push('t');
            panier_checkbox[panier_checkbox.length-1].checked = true;
            cartpan.trash_panier();
            cartpan.calc_price();
        }
    })
}

//all unchecked

const deselectionner = document.querySelector('.deselectionner');
deselectionner.addEventListener('click',()=>{
    panier_checkbox = document.querySelectorAll('.panier_checkbox');
    cartpan.checkbox_array = [];
    for(let i = 0; i<cartpan.cart_inside.length;i++){
        panier_checkbox[i].checked = false;
        cartpan.checkbox_array.push('f');
    }
    cartpan.calc_price();
})

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
            cartpan.cart_inside.push({...array_product[29-i]});
            localStorage.setItem('cart',JSON.stringify(cartpan.cart_inside));
            const panier_insert = document.querySelector('.panier_insert');
            panier_insert.innerHTML = '';
            cartpan.write_panier();
            cartpan.checkbox_array = [];
            panier_checkbox = document.querySelectorAll('.panier_checkbox');
            for(let i = 0; i<panier_checkbox.length;i++){
                panier_checkbox[i].checked = true;
                cartpan.checkbox_array.push('t');
            }
            cartpan.trash_panier();
            cartpan.calc_price();
        })
    }
})

vos_articles_enregistrer.addEventListener('click',()=>{
    vos_articles_acheter.classList.remove('vos_articles_acheter_add');
    vos_articles_enregistrer.classList.remove('vos_articles_enregistrer_add');
    const vos_articles_cote = document.querySelector('.vos_articles_cote');
    vos_articles_cote.style.display = "grid";
    vos_articles_cote.innerHTML = '';
    articleobj.write_articles();
})

