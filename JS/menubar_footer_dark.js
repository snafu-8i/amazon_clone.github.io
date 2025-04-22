import {cart} from './bd_zamazor_buy.js'
//cart_header

document.querySelectorAll('.cart_text').forEach(function(elem){
    let total_quantity = 0;
    for(let i = 0; i<cart.length;i++){
        total_quantity+= cart[i].quantity;
    }
    elem.innerHTML = total_quantity;
})
//Glow search bar

const glow = "glow";

search_bar.addEventListener('focusin', (event)=>{
    let input = event.currentTarget;
    let parent = input.parentNode.parentNode;
    parent.classList.add(`${glow}`);
})

search_bar.addEventListener('focusout', (event)=>{
    let input = event.currentTarget;
    let parent = input.parentNode.parentNode;
    parent.classList.remove(`${glow}`);
})

// filter_dark    

const brightness = "brightness";
const section_body = document.querySelectorAll("main,.section_bottom,footer,.retour_haut,.small_section_list,.fixed_cart");
const brightness_array = document.querySelectorAll(".bonjour_a,.bonjour_drop,.drapeau_a,.fr_drop,.historique_drop_container,.historique_a,.business_drop_container,.business_a,.carte_cadeaux_drop_container,.carte_cadeaux_a");

brightness_array.forEach(function(elem){
    elem.addEventListener('mouseover', ()=>{
        section_body.forEach(function(ele){
            ele.classList.add(brightness);
        })
    }) 
    elem.addEventListener('mouseout', ()=>{
        section_body.forEach(function(ele){
            ele.classList.remove(brightness);
        })
    })  
})

//drop_buttons for menubar & sub_menubar
// peut être simplifié
const body = document.querySelector('body');
const fr_drop = document.querySelector('.fr_drop');
const fr_all = document.querySelectorAll('.drapeau_a,.fr_drop')

fr_all.forEach(function(ele){
    ele.addEventListener('mouseover',()=>{
        fr_drop.classList.add("fr_drop_position");
        body.classList.add('overflow_hidden');
    })
    ele.addEventListener('mouseout',()=>{
        fr_drop.classList.remove("fr_drop_position");
        body.classList.remove('overflow_hidden');
    })
})

const bonjour_drop = document.querySelector('.bonjour_drop');
const bonjour_all = document.querySelectorAll('.bonjour_a,.bonjour_drop')

bonjour_all.forEach(function(eleme){
    eleme.addEventListener('mouseover', ()=>{
        bonjour_drop.classList.add("bonjour_drop_position");
        body.classList.add('overflow_hidden');
    })
    eleme.addEventListener('mouseout', ()=>{
        bonjour_drop.classList.remove("bonjour_drop_position");
        body.classList.remove('overflow_hidden');
    })
})

const historique_drop_container = document.querySelector('.historique_drop_container');
const historique_all =document.querySelectorAll('.historique_a,.historique_drop_container')

historique_all.forEach(function(elem){
    elem.addEventListener('mouseover',()=>{
        historique_drop_container.classList.add("historique_drop_position");
        body.classList.add('overflow_hidden');
    })
    elem.addEventListener('mouseout',()=>{
        historique_drop_container.classList.remove("historique_drop_position");
        body.classList.remove('overflow_hidden');
    })
})

const carte_cadeaux_drop_container = document.querySelector('.carte_cadeaux_drop_container');
const carte_cadeaux_all= document.querySelectorAll('.carte_cadeaux_drop_container,.carte_cadeaux_a');

carte_cadeaux_all.forEach(function(elem){
    elem.addEventListener('mouseover', ()=>{
        carte_cadeaux_drop_container.classList.add("carte_cadeaux_drop_position");
        body.classList.add('overflow_hidden');
    })
    elem.addEventListener('mouseout', ()=>{
        carte_cadeaux_drop_container.classList.remove("carte_cadeaux_drop_position");
        body.classList.remove('overflow_hidden');
    })
})

const business_drop_container = document.querySelector('.business_drop_container');
const business_all = document.querySelectorAll('.business_drop_container,.business_a')

business_all.forEach(function(elem){
    elem.addEventListener('mouseover', ()=>{
        business_drop_container.classList.add("business_drop_position");
        body.classList.add('overflow_hidden');
    })
    elem.addEventListener('mouseout', ()=>{
        business_drop_container.classList.remove("business_drop_position");
        body.classList.remove('overflow_hidden');
    })
})

//move the arrow of the container to properly create a responsive effect

if(window.innerWidth<=1786){
    let num = 1890 - window.innerWidth;
    document.body.style.setProperty('--carte_cadeaux_margin', num + 'px');
}
if(window.innerWidth>1646){
    document.body.style.setProperty('--business_margin', 23.4 + '%');
}

window.addEventListener('resize',()=>{
    if(window.innerWidth<=1786){
        let num = 1890 - window.innerWidth;
        document.body.style.setProperty('--carte_cadeaux_margin', num + 'px');
    }
    else if(window.innerWidth>1786){
        document.body.style.setProperty('--carte_cadeaux_margin', 31 + '%');
    }
    if(window.innerWidth<=1646){
        let num = 1767 - window.innerWidth;
        document.body.style.setProperty('--business_margin', num + 'px');
    }
    else if(window.innerWidth>1646){
        document.body.style.setProperty('--business_margin', 23.4 + '%');
    }
    if(window.innerWidth<=380){
        let num = 524 - window.innerWidth;
        let margin = window.innerWidth-380;
        document.body.style.setProperty('--fr_drop_2',num +'px');
        document.body.style.setProperty('--margin_right_fr_drop_2',margin +'px');
    }
    else if(window.innerWidth>380){
        document.body.style.setProperty('--fr_drop_2', 61 + '%');
        document.body.style.setProperty('--margin_right_fr_drop_2',0 +'px');
    }
})

//responsive_layout

//afficher et cacher l'onglet
const burger_resp = document.querySelector('.burger_resp');
const section_resp_left = document.querySelector('.section_resp_left')
const section_right = document.querySelector(".resp_left_droite");
const section_menubar_resp = document.querySelector('.section_menubar_resp');
const section_menubar_list = document.querySelector('.section_menubar_list');

burger_resp.addEventListener('click',()=>{
    section_resp_left.classList.add("resp_left");
});

section_right.addEventListener('click',()=>{
        section_resp_left.classList.remove("resp_left");
        tout_afficher_checkbox = document.getElementById('tout_afficher_checkbox').checked = false;
        tout_afficher_checkbox2 = document.getElementById('tout_afficher_checkbox2').checked = false;
});

const compte_resp = document.querySelector('.compte_resp');
const section_resp_right = document.querySelector('.section_resp_right');
const resp_right_gauche = document.querySelector('.resp_right_gauche');

const parcourir = document.getElementById('parcourir');
parcourir.addEventListener('click',()=>{
    section_resp_right.classList.remove('resp_right');
    section_resp_left.classList.add("resp_left");
})

compte_resp.addEventListener('click',()=>{
    section_resp_right.classList.add('resp_right');
})

resp_right_gauche.addEventListener('click',()=>{
    section_resp_right.classList.remove('resp_right');
});

const adress_drop_top = document.querySelector('.adress_drop_top');
const section_adress_drop = document.querySelector('.section_adress_drop');
const section_adress = document.querySelector('.section_adress');

section_adress.addEventListener('click',()=>{
    section_adress_drop.classList.add('resp_bottom');
})

adress_drop_top.addEventListener('click',()=>{
    section_adress_drop.classList.remove('resp_bottom');
})

const add_brightness = document.querySelectorAll('.burger_resp,.compte_resp,.section_adress')
const remov_brightness = document.querySelectorAll('.resp_left_droite,.resp_right_gauche,.adress_drop_top')

add_brightness.forEach(function(elem){
    elem.addEventListener('click',()=>{
        body.classList.add('overflow_hidden');
        section_body.forEach(function(ele){
            ele.classList.add(brightness);
        })
        section_adress.classList.add(brightness);
        section_menubar_resp.classList.add(brightness);
        section_menubar_list.classList.add(brightness);
    })
})

remov_brightness.forEach(function(elem){
    elem.addEventListener('click',()=>{
        body.classList.remove('overflow_hidden');
        section_body.forEach(function(ele){
            ele.classList.remove(brightness);
        })        
        section_adress.classList.remove(brightness);
        section_menubar_resp.classList.remove(brightness);
        section_menubar_list.classList.remove(brightness);
    })
})

const resp_left_gauche = document.querySelector('.resp_left_gauche');
const menuprincipal_all = document.querySelectorAll('.menu_principal, .menu_principal1, .menu_principal2, .menu_principal3, .menu_principal4, .menu_principal5, .menu_principal6, .menu_principal7, .menu_principal8, .menu_principal9, .menu_principal10, .menu_principal11, .menu_principal12, .menu_principal13, .menu_principal14, .menu_principal15, .menu_principal16, .menu_principal17, .menu_principal18, .menu_principal19');

const categories_all = document.querySelectorAll('.amazon_music, .echo_alexa, .amazon_fire_tv, .liseuses_kindle, .app_shop_pour_android, .livres_et_audible, .musique, .jeux_videos, .high_tech, .maison_connectée, .informatique, .jouets, .cuisine, .bricolage, .beaute, .vetements, .sport, .autom, .commerce,.handmade');

const categories_div_all = document.querySelectorAll('.amazon_music_div, .echo_alexa_div, .amazon_fire_tv_div, .liseuses_kindle_div, .app_shop_pour_android_div, .livres_et_audible_div, .musique_div, .jeux_videos_div, .high_tech_div, .maison_connectée_div, .informatique_div, .jouets_div, .cuisine_div, .bricolage_div, .beaute_div, .vetements_div, .sport_div, .autom_div, .commerce_div, .handmade_div');

for(let i = 0; i<menuprincipal_all.length;i++){
    categories_all[i].addEventListener('click',()=>{
        categories_div_all[i].classList.add('div_left');
        resp_left_gauche.classList.add('div_left_left');
    });
    menuprincipal_all[i].addEventListener('click',()=>{
        categories_div_all[i].classList.remove('div_left');
        resp_left_gauche.classList.remove('div_left_left');
    });
}

//fr_drop_bottom

const langue = document.getElementById('langue');
const fr_drop_2 = document.querySelector('.fr_drop2');

langue.addEventListener('mouseover',()=>{
    fr_drop_2.classList.add('flex');
})
langue.addEventListener('mouseout',()=>{
    fr_drop_2.classList.remove('flex');
})

// Final Caroussel

const final_left = document.querySelector('.final_button_left');
const final_right = document.querySelector('.final_button_right');
const final_caroussel = document.querySelector('.final_caroussel');
const final_all = document.querySelectorAll('.final_caroussel_img')
const final_array = [
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_1.png">
    <div class="final_caroussel_img_div">Ordinateur Portable 14,1" Pouces laptop, 6 Go de RAM, 128 Go de SSD, N4000 Celeron Dual-Core, Wi-Fi Bluetooth 2,4/5,0G, 1366 * 768 IPS, Design sans Ventilateur, Inclus une Souris, Clavier à Membrane</div>
    <div style="display:flex;align-items: center;" id="star2">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 50%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex">2441</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">155,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_2.png">
    <div class="final_caroussel_img_div">EDA - Pot de Fleur Carré Mi-Haut Toscane - Volume 51 L - 39 x 39 x H.53 cm, Gris Anthracite</div>
    <div style="display:flex;align-items: center;" id="star2">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">35,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_3.png">
    <div class="final_caroussel_img_div">AUSTRALIE GUIDE DE VOYAGE 2024 - 2025: Sydney | Melbourne | Brisbane</div>
    <div style="display:flex;align-items:center" id="star2">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">84</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">20,99<sup style="font-size:0.6em;">€</sup></div>
</a>   
<div>
    <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;">
        <div><img src="./Images/amazon_prime_icon.png" height="45"></div>
        <div style="white-space: nowrap;font-size:0.75em;color:black;margin-left:auto;">Livraison GRATUITE</div>
        <div style="margin-top:-0.8em;"><b style="white-space: nowrap;font-size:0.75em;color:black;">mercredi 5 mars</b></div>                          
    </div>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_4.png">
    <div class="final_caroussel_img_div">TREXO Haltère hexagonal durable en fer moulé caoutchouté pour la musculation à la maison avec poignée ergonomique stable et polyvalent</div>
    <div style="display:flex;align-items: center;" id="star2">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">481</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">45,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_5.jpg">
    <div class="final_caroussel_img_div">GUOKOFF Boite Cadeau Noir Carton (Lot de 10), 20.3 x20.3 x10.2cm Boîtes de Cadeau avec Couvercles, Carton d'Expédition Pliable, Boîtes d'expédition en Carton Ondulé</div>
    <div style="display:flex;align-items: center;" id="star2">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">675</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">10,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_6.png">
    <div class="final_caroussel_img_div">Logitech M185 Souris Sans Fil, 2.4 GHz avec Mini Récepteur USB, Longévité de la Pile 12 Mois, Résolution du Capteur 1000 PPP, Ambidextre, Compatible PC, Mac, Ordinateur Portable - Gris/Noir </div>
    <div style="display:flex;align-items: center;" id="star2">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">1378</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">20,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;">
        <div><img src="./Images/amazon_prime_icon.png" height="45"></div>
        <div style="white-space: nowrap;font-size:0.75em;color:black;margin-left:auto;">Livraison GRATUITE</div>
        <div style="margin-top:-0.8em;"><b style="white-space: nowrap;font-size:0.75em;color:black;">mercredi 5 mars</b></div>                          
    </div>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_7.jpg">
    <div class="final_caroussel_img_div">Amazon Essentials Pantalon de Survêtement en Polaire à Bas Ouvert (Existe en Grandes Tailles) Homme</div>
    <div style="display:flex;align-items: center;" id="star2">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">84</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">27,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_8.jpg">
    <div class="final_caroussel_img_div">Dell SE2722HX 27" Full HD (1920x1080) Écran PC, 75Hz, VA, 4ms, AMD FreeSync, HDMI, VGA, Garantie 3 ans, Noir</div>
    <div style="display:flex;align-items: center;" id="star2">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 100%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">534</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">109,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_9.jpg">
    <div class="final_caroussel_img_div">Nutabevr Réveil Analogique Silencieux sans Tic-Tac, Réveil Snooze avec Bouton supérieur, réveil Portable avec lumière et Fonction Snooze, Petite Réveil Voyage pour Chambre, Bureau, Voyage </div>
    <div style="display:flex;align-items: center;" id="star2">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 65%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">349</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">25,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;">
        <div><img src="./Images/amazon_prime_icon.png" height="45"></div>
        <div style="white-space: nowrap;font-size:0.75em;color:black;margin-left:auto;">Livraison GRATUITE</div>
        <div style="margin-top:-0.8em;"><b style="white-space: nowrap;font-size:0.75em;color:black;">mercredi 5 mars</b></div>                          
    </div>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_10.jpg">
    <div class="final_caroussel_img_div">Uni-Toys - Teddy Super Doux (Marron Clair) - 24 cm (Hauteur) - Ours en Peluche, Nounours - Peluche, Doudou </div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">15,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_11.jpg">
    <div class="final_caroussel_img_div">SKYSEN 183cm Raille Porte Coulissante Kit Complet de Ferrure de Porte Coulissante pour Système de Porte Coulissante avec Guide au Sol, Rail de Porte Coulissante Durable pour la Séparation des Espaces </div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">180,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_12.jpg">
    <div class="final_caroussel_img_div">Amazon Basics Planche à repasser avec repose-fer ovale, Classica, Petit format, 109 x 35 cm - Blanc, À fleur, 131.5 cm x 34 cm x 87 cm </div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 65%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">349</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">25,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;">
        <div><img src="./Images/amazon_prime_icon.png" height="45"></div>
        <div style="white-space: nowrap;font-size:0.75em;color:black;margin-left:auto;">Livraison GRATUITE</div>
        <div style="margin-top:-0.8em;"><b style="white-space: nowrap;font-size:0.75em;color:black;">mercredi 5 mars</b></div>                          
    </div>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_13.jpg">
    <div class="final_caroussel_img_div">SanDisk 1TB PLUS Disque SSD interne jusqu'à 535 MB/s SATA 2,5"</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">99,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div> `,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_14.jpg">
    <div class="final_caroussel_img_div">CY BOX Support pour Ordinateur Portable en aluminium, Réglable en hauteur, Autonome, Dissipant la chaleur, Jusqu'à 17 pouces, Compatible avec MacBook, Dell, Lenovo, Samsung et plus, IB-NH300 </div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">24,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_15.jpg">
    <div class="final_caroussel_img_div">KingSpec 1To 2.5" SATA SSD, 3D NAND Flash Disque Dur SSD Interne, Vitesse de Lecture jusqu'à 550 Mo/Sec - pour Ordinateur de Bureau/Portable/Tout-en-Un </div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 65%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">349</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">50,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;">
        <div><img src="./Images/amazon_prime_icon.png" height="45"></div>
        <div style="white-space: nowrap;font-size:0.75em;color:black;margin-left:auto;">Livraison GRATUITE</div>
        <div style="margin-top:-0.8em;"><b style="white-space: nowrap;font-size:0.75em;color:black;">mercredi 5 mars</b></div>                          
    </div>
</div> `,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_16.jpg">
    <div class="final_caroussel_img_div">Crucial P310 SSD 1To PCIe Gen4 NVMe M.2 2280 SSD Interne Gaming, jusqu’à 7.100 Mo/s, Compatible avec Ordinateur Portable et de Bureau, Disque Dur SSD - CT1000P310SSD801 (Édition Acronis)</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">69,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div> `,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_17.jpg">
    <div class="final_caroussel_img_div">Silicon Power PCIe M.2 NVMe SSD 512Go Gen3x4 R/W up to 2, 200/1, 600MB/s Internal SSD</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">69,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div> `,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_18.jpg">
    <div class="final_caroussel_img_div">SteelSeries Clavier HyperMagnetic gaming Apex Pro Mini - Actionnement ajustable - Facteur de forme compact de 60 % - RVB - Capuchons de touches PBT - USB-C - Français AZERTY</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 65%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">349</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">50,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;">
        <div><img src="./Images/amazon_prime_icon.png" height="45"></div>
        <div style="white-space: nowrap;font-size:0.75em;color:black;margin-left:auto;">Livraison GRATUITE</div>
        <div style="margin-top:-0.8em;"><b style="white-space: nowrap;font-size:0.75em;color:black;">mercredi 5 mars</b></div>                          
    </div>
</div> `, 
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_19.jpg">
    <div class="final_caroussel_img_div">Logitech G213 Prodigy, Clavier Gamer, Eclairage RGB LIGHTSYNC, Résistant aux Éclaboussures, Personnalisable, Commandes Multimédia Dédiées, Français AZERTY - Noir</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">89,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_20.jpg">
    <div class="final_caroussel_img_div">CHERRY KC 200 MX, Clavier de bureau mécanique avec plaque en métal anodisé, disposition française (AZERTY), Filaire, MX2A SILENT RED Switches, Noir bronze</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">99,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_21.jpg">
    <div class="final_caroussel_img_div">Logitech K280e Pro Clavier Filaire Business pour Windows/Linux/Chrome, Plug-and-Play USB, Saisie Discrète, Taille Standard, Résistant aux Eclaboussures, AZERTY Français - Noir</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 65%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">349</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">250,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;">
        <div><img src="./Images/amazon_prime_icon.png" height="45"></div>
        <div style="white-space: nowrap;font-size:0.75em;color:black;margin-left:auto;">Livraison GRATUITE</div>
        <div style="margin-top:-0.8em;"><b style="white-space: nowrap;font-size:0.75em;color:black;">mercredi 5 mars</b></div>                          
    </div>
</div>`,       
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_22.jpg">
    <div class="final_caroussel_img_div">LEGO Duplo Ma Ville La Vie à la Garderie, Jouet Éducatif pour Enfants dès 2 Ans, Jeu d'apprentissage avec Briques de Construction et 4 Figurines 10992</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">199,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div> `,      
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_23.jpg">
    <div class="final_caroussel_img_div">LEGO 42154 Technic Ford GT 2022, Maquette de Voiture pour Adultes à Construire, Échelle 1:12 avec Caractéristiques Authentiques, Set de Collection Avancé</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">12,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,          
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_24.jpg">
    <div class="final_caroussel_img_div">LEGO Star Wars Millennium Falcon, Set pour Fans de la Saga Vaisseau Spatial à Collectionner pour le 25e Anniversaire Décoration d'Intérieure Véhicule mythique, Cadeau d’Anniversaire pour Adultes 75375</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 65%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">349</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">210,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;">
        <div><img src="./Images/amazon_prime_icon.png" height="45"></div>
        <div style="white-space: nowrap;font-size:0.75em;color:black;margin-left:auto;">Livraison GRATUITE</div>
        <div style="margin-top:-0.8em;"><b style="white-space: nowrap;font-size:0.75em;color:black;">mercredi 5 mars</b></div>                          
    </div>
</div>`,
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_25.jpg">
    <div class="final_caroussel_img_div"> CSL-Computer - Tapis de souris XXL Speed Gaming Titanwolf noir 900 x 400 mm - Grande base de table - Améliore la précision et la vitesse, 23032532, Type 1</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">19,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div> `,        
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_26.jpg">
    <div class="final_caroussel_img_div">Alienware AW620M Souris Gaming sans Fil - 26 000 DPI, 7 Boutons Programmables, 140h d'Autonomie, Éclairage RGB AlienFX - Lunar Light</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 35%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">176</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">87,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;margin-bottom:0.5em;">Recevez-le <b>mercredi 5 mars</b></p>
    <p style="color:black;font-size:0.75em;margin-top:0.5em;">Livraison GRATUITE par Amazon</p>
</div>`,      
`<a href="zamazor.html" style="text-decoration: none;color:#2162a1">
    <img src="./Images/article_27.jpg">
    <div class="final_caroussel_img_div">SteelSeries Aerox 5 - Souris gaming perforée RGB - Design étanche ultraléger - Capteur optique TrueMove Air 18K DPI</div>
    <div style="display:flex;align-items: center;">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star1" style="--star_width : 65%;"></div>
        <div style="font-size:0.75em;align-items: center;display:flex;margin-left:0.4em;">349</div>
    </div>
    <div style="font-weight: 600;color:black;font-size:1.0em;">43,99<sup style="font-size:0.6em;">€</sup></div>
</a>
<div>
    <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;align-items: center;">
        <div><img src="./Images/amazon_prime_icon.png" height="45"></div>
        <div style="white-space: nowrap;font-size:0.75em;color:black;margin-left:auto;">Livraison GRATUITE</div>
        <div style="margin-top:-0.8em;"><b style="white-space: nowrap;font-size:0.75em;color:black;">mercredi 5 mars</b></div>                          
    </div>
</div>`   
];
const page = document.getElementById('page');
let numero_page = 1;
let n = 0;

for(let i =0; i<final_all.length;i++){
    final_all[i].innerHTML = final_array[n];
    n++;
}
final_right.addEventListener('click',()=>{
    if(n === 27){
        n = 0;
        numero_page = 0;
    }
    numero_page++;
    page.innerText = `Page ${numero_page} sur 3`;
    let temp_n = n+8;
    for(let i =0; i<final_all.length;i++){
        setTimeout(()=>{
            final_all[i].innerHTML = final_array[temp_n];
            temp_n--;
        },20*(8-i))    
    }
    n+=9;
})
final_left.addEventListener('click',()=>{
    if(n===9){
        n=36;
        numero_page=4;
    }
    numero_page--;
    page.innerText = `Page ${numero_page} sur 3`;
    let temp_n= n-18;
    for(let j =8; j >= 0; j--){
        setTimeout(()=>{
            final_all[j].innerHTML = final_array[temp_n];
            temp_n++;
        },20*j)   
    }
    n-=9;
})

//mini_drop-down menu    même hauteur, peut être simplifier

const meilleures_ventes_drop = document.querySelector('.meilleures_ventes_drop');
const meilleures_ventes_all = document.querySelectorAll('.meilleures_ventes_drop_a,.meilleures_ventes_drop');

meilleures_ventes_all.forEach(function(elem){
    elem.addEventListener('mouseover',()=>{
        meilleures_ventes_drop.classList.add("meilleures_ventes_drop_position");
    })
    elem.addEventListener('mouseout',()=>{
        meilleures_ventes_drop.classList.remove("meilleures_ventes_drop_position");
    })
})

const amazon_seconde_main_drop = document.querySelector('.amazon_seconde_main_drop');
const amazon_seconde_main_all = document.querySelectorAll('.amazon_seconde_main_drop_a,.amazon_seconde_main_drop');

amazon_seconde_main_all.forEach(function(elem){
    elem.addEventListener('mouseover',()=>{
        amazon_seconde_main_drop.classList.add("amazon_seconde_main_drop_position");
    })
    elem.addEventListener('mouseout',()=>{
        amazon_seconde_main_drop.classList.remove("amazon_seconde_main_drop_position");
    })
})

const nos_idees_cadeaux_drop = document.querySelector('.nos_idees_cadeaux_drop');
const nos_idees_cadeaux_drop_all = document.querySelectorAll('.nos_idees_cadeaux_drop_a,.nos_idees_cadeaux_drop');

nos_idees_cadeaux_drop_all.forEach(function(elem){
    elem.addEventListener('mouseover',()=>{
        nos_idees_cadeaux_drop.classList.add("nos_idees_cadeaux_drop_position");
    })
    elem.addEventListener('mouseout',()=>{
        nos_idees_cadeaux_drop.classList.remove("nos_idees_cadeaux_drop_position");
    })
})

const services_amazon_drop = document.querySelector('.services_amazon_drop');
const services_amazon_drop_all = document.querySelectorAll('.services_amazon_drop_a,.services_amazon_drop');

services_amazon_drop_all.forEach(function(elem){
    elem.addEventListener('mouseover',()=>{
        services_amazon_drop.classList.add("services_amazon_drop_position");
    })
    elem.addEventListener('mouseout',()=>{
        services_amazon_drop.classList.remove("services_amazon_drop_position");
    })
})

const ventes_flash_drop = document.querySelector('.ventes_flash_drop');
const ventes_flash_drop_all = document.querySelectorAll('.ventes_flash_drop_a,.ventes_flash_drop');

ventes_flash_drop_all.forEach(function(elem){
    elem.addEventListener('mouseover',()=>{
        ventes_flash_drop.classList.add("ventes_flash_drop_position");
    })
    elem.addEventListener('mouseout',()=>{
        ventes_flash_drop.classList.remove("ventes_flash_drop_position");
    })
})