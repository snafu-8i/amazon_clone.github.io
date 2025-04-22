// caroussel

const auto = "auto";
const img = document.querySelectorAll('.section_caroussel_img');
const container = document.querySelector('.section_caroussel_container');
const right = document.querySelector('.right');
const left = document.querySelector('.left');

let container_size = container.getBoundingClientRect();
let img_size =  container_size.width;
let start = 0;
let end = (container_size.width)*(img.length-1);

window.addEventListener('resize', ()=>{
    container_size = container.getBoundingClientRect();
    img_size =  container_size.width;
    end = (container_size.width)*(img.length-1);
})

container.scroll(0,0);

left.addEventListener('click',()=>{
    if(start<=0){
        container.classList.add(`${auto}`);
        container.scrollTo(end,0);
        start=end;
        container.classList.remove(`${auto}`);
    }
    start -= img_size;
    container.scrollTo(start,0);
})

right.addEventListener('click', ()=>{
    if(start >=end){
        container.classList.add(`${auto}`);
        container.scrollTo(0,0);
        start=0;
        container.classList.remove(`${auto}`);
    }
    start += img_size;
    container.scrollTo(start,0);
})

//Generic Caroussel

const generic_button_left_all = document.querySelectorAll('.generic_button_left,.generic_button_left1,.generic_button_left2');
const generic_button_right_all = document.querySelectorAll('.generic_button_right,.generic_button_right1,.generic_button_right2');
const generic_caroussel_all = document.querySelectorAll('.generic_caroussel,.generic_caroussel1,.generic_caroussel2');


const generic_button_left = document.querySelector('.generic_button_left');
const generic_button_right = document.querySelector('.generic_button_right');
const generic_caroussel = document.querySelector('.generic_caroussel');
const transparent_button = document.querySelectorAll(".generic_button_right,.generic_button_left,.generic_caroussel,.generic_button_right1,.generic_button_left1,.generic_caroussel1,.generic_button_right2,.generic_button_left2,.generic_caroussel2");
let section_generic_caroussel = document.querySelector('.section_generic_caroussel').getBoundingClientRect().width/2;

const counter_all = [0,0,0];
let counter = 0;

window.addEventListener('resize', ()=>{
    section_generic_caroussel = document.querySelector('.section_generic_caroussel').getBoundingClientRect().width/2;
})

generic_caroussel_all.forEach(function(elem){
    elem.scroll(0,0);
})

for(let i=0;i<generic_button_right_all.length;i++){
    generic_button_right_all[i].addEventListener('click',()=>{
        if(counter_all[i]+section_generic_caroussel >= 2000){
            generic_caroussel_all[i].scrollTo(section_generic_caroussel*20,0);
        }
        else{
            counter_all[i] += section_generic_caroussel;
            generic_caroussel_all[i].scrollTo(counter_all[i],0);
        }
    })
}
for(let i=0;i<generic_button_left_all.length;i++){
    generic_button_left_all[i].addEventListener('click',()=>{
        if(counter_all[i]-section_generic_caroussel <= 0){
            counter_all[i] = 0;
            generic_caroussel_all[i].scroll(0,0);
        }
        else{
            counter_all[i] -= section_generic_caroussel;
            generic_caroussel_all[i].scrollTo(counter_all[i],0);
        }
    })
}

for(let i=0;i<transparent_button.length;i++){
    transparent_button[i].addEventListener('mouseover',()=>{
        if(0<=i && i<=2){
            for(let j=0;j<1;j++){
                generic_button_left_all[j].classList.add('block');
                generic_button_right_all[j].classList.add('block');
            }  
        }
        if(3<=i && i<=5){
            for(let j=1;j<2;j++){
                generic_button_left_all[j].classList.add('block');
                generic_button_right_all[j].classList.add('block');
            }  
        }
        if(6<=i && i<=8){
            for(let j=2;j<generic_button_left_all.length;j++){
                generic_button_left_all[j].classList.add('block');
                generic_button_right_all[j].classList.add('block');
            }  
        }
    })
    transparent_button[i].addEventListener('mouseout',()=>{
        if(0<=i && i<=2){
            for(let j=0;j<1;j++){
                generic_button_left_all[j].classList.remove('block');
                generic_button_right_all[j].classList.remove('block');
            }  
        }
        if(3<=i && i<=5){
            for(let j=1;j<2;j++){
                generic_button_left_all[j].classList.remove('block');
                generic_button_right_all[j].classList.remove('block');
            }  
        }
        if(6<=i && i<=8){
            for(let j=2;j<generic_button_left_all.length;j++){
                generic_button_left_all[j].classList.remove('block');
                generic_button_right_all[j].classList.remove('block');
            }  
        }
    })
}

// Button changing html for different products

const array_loader = [
    {img_loader : `<img src="./Images/article_13.jpg">`, 
    description_loader : "SanDisk 1TB Ultra Disque SSD 3D jusqu'à 560 MB/s SATA 2,5",
    prix_loader :'94<sup style="font-size: 0.6em;">99 €</sup>'},

    {img_loader : `<img src="./Images/article_15.jpg">`, 
    description_loader : "fanxiang S101 1To SSD Disque Interne SSD SATA III 6 Go/s 2,5' Vitesse de Lecture jusqu'à 550 Mo/Sec, Compatible avec Ordinateurs Portables et Ordinateurs de Bureau (Noir)",
    prix_loader :'54<sup style="font-size: 0.6em;">99 €</sup>'}, 

    {img_loader : `<img src="./Images/article_16.jpg">`, 
    description_loader : "Crucial P3 Plus SSD 4To PCIe Gen4 NVMe M.2 SSD Interne, Jusqu’à 4.800 Mo/s, Compatible avec Ordinateur Portable et de Bureau, Disque Dur SSD - CT4000P3PSSD801 Visiter la boutique Crucial",
    prix_loader :'239<sup style="font-size: 0.6em;">99 €</sup>'}, 

    {img_loader : `<img src="./Images/article_17.jpg">`, 
    description_loader : "ORICO 4To M.2 2280 SATA SSD, SATA III 6Gbps M2 SSD avec Clé B+M, 500MB/s Disque Dur Interne pour Ordinateur de Bureau/Portable - Y20M ",
    prix_loader :'199<sup style="font-size: 0.6em;">99 €</sup>'},

    {img_loader : `<img src="./Images/article_18.jpg">`, 
    description_loader : "RedThunder K10 Ensemble Clavier et Souris Gaming sans Fil, AZERTY FRANÇAIS, Rétroéclairage LED 3800mAh Batteries Rechargeables, Clavier USB Anti-ghosting + Souris 7D 3200DPI pour PC Gamer Xbox(Noir) ",
    prix_loader :'59<sup style="font-size: 0.6em;">99 €</sup>'},

    {img_loader : `<img src="./Images/article_19.jpg">`, 
    description_loader : " Logitech G512 Clavier Gamer Mécanique, Eclairage RGB LIGHTSYNC, Tactile Switchs GX Brown, Alliage Aluminium 5052, Touches de Fonction Complètes, Relais USB, Français AZERTY - Noir ",
    prix_loader :'104<sup style="font-size: 0.6em;">99 €</sup>'},

    {img_loader : `<img src="./Images/article_20.jpg">`, 
    description_loader : "SteelSeries Apex 3 - Clavier de Gaming - Illumination RVB sur 10 Zones - Repose-Mains Magnétique Premium - Agencement Français AZERTY ",
    prix_loader :'70<sup style="font-size: 0.6em;">24 €</sup>'},

    {img_loader : `<img src="./Images/article_21.jpg">`, 
    description_loader : "Logitech G G915 X Clavier gaming mécanique filaire ultra-plat, touches PBT double couche, touches entièrement programmables, éclairage RVB, switchs GL Brown Tactile, PC/Mac, Clavier FRA AZERTY - Noir ",
    prix_loader :'199<sup style="font-size: 0.6em;">95 €</sup>'},

    {img_loader : `<img src="./Images/article_14.jpg">`, 
    description_loader : "CIRYCASE Support Ordinateur Portable, Support PC Portable Bureau Réglable en Aluminium, Refroidissement Rapide, Laptop Stand Pliable Ergonomique Lapdesks Compatible avec MacBook Air Pro (10-16') ",
    prix_loader :'22<sup style="font-size: 0.6em;">24 €</sup>'},

    {img_loader : `<img src="./Images/article_22.jpg">`, 
    description_loader : "LEGO Architecture Notre-Dame de Paris - Maquette à Construire d’Exposition Architectural - Set pour Adultes - Cathédrale - pour Les Passionnés d’Histoire, de Voyages et d’Art 21061 ",
    prix_loader :'183<sup style="font-size: 0.6em;">99 €</sup>'},

    {img_loader : `<img src="./Images/article_23.jpg">`, 
    description_loader : "LEGO Botanique Les Roses - Jeu de construction pour filles et garçons dès 8 Ans - Fleurs artificielles - Idée cadeau pour enfants et adolescents amoureux des plantes - Décoration pour la chambre 40460 ",
    prix_loader :'12<sup style="font-size: 0.6em;">76 €</sup>'},
    
    {img_loader : `<img src="./Images/article_24.jpg">`, 
    description_loader : "LEGO Architecture La Grande Pyramide de Gizeh - Loisir Créatif Adultes - Maquette à Construire pour Hommes et Femmes de Monument du Monde- Décoration d'Intérieur et Idée Cadeau d'anniversaire 21058 ",
    prix_loader :'113<sup style="font-size: 0.6em;">09 €</sup>'},
]

let old = 0;
let old1 = 4;
let old2 = 8;

document.getElementById(`grid_gapped_list_button_0`).classList.add('border_blue');
document.getElementById(`grid_gapped_list_button_4`).classList.add('border_blue');
document.getElementById(`grid_gapped_list_button_8`).classList.add('border_blue');

function change(product){
    const img = document.getElementById('change_img');
    const description = document.getElementById('change_description');
    const prix = document.getElementById('change_prix');
    const img1 = document.getElementById('change_img1');
    const description1 = document.getElementById('change_description1');
    const prix1 = document.getElementById('change_prix1');
    const img2 = document.getElementById('change_img2');
    const description2 = document.getElementById('change_description2');
    const prix2 = document.getElementById('change_prix2');
    const border_blue = document.getElementById(`grid_gapped_list_button_${product}`);
    const border_blue_old = document.getElementById(`grid_gapped_list_button_${old}`);
    const border_blue_old1 = document.getElementById(`grid_gapped_list_button_${old1}`);
    const border_blue_old2 = document.getElementById(`grid_gapped_list_button_${old2}`);

    if(0<=product && product<=3){
        img.innerHTML = array_loader[product].img_loader;
        description.innerHTML = array_loader[product].description_loader;
        prix.innerHTML = array_loader[product].prix_loader;
        border_blue_old.classList.remove('border_blue');
        border_blue.classList.add('border_blue');
        old = product;
    }
    else if(4<=product && product<=7){
        img1.innerHTML = array_loader[product].img_loader;
        description1.innerHTML = array_loader[product].description_loader;
        prix1.innerHTML = array_loader[product].prix_loader;
        border_blue_old1.classList.remove('border_blue');
        border_blue.classList.add('border_blue');
        old1 = product;
    }
    else if(8<=product && product<=11){
        img2.innerHTML = array_loader[product].img_loader;
        description2.innerHTML = array_loader[product].description_loader;
        prix2.innerHTML = array_loader[product].prix_loader;
        border_blue_old2.classList.remove('border_blue');
        border_blue.classList.add('border_blue');
        old2 = product;
    }
}


