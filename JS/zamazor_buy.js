//top_slider_ventes_flash

const ventes_flash_right = document.querySelector('.ventes_flash_right');
const ventes_flash_left = document.querySelector('.ventes_flash_left');

const ventes_flash_element_slide_div = document.querySelector('.ventes_flash_element_slide_div');
let scroll_dim = document.querySelector('.scroll_dim').getBoundingClientRect().width;
const scroll_dime = document.querySelectorAll('.scroll_dime');

let counter = 0;
let a = 0;
let scroll_counter = 2;
ventes_flash_element_slide_div.scrollTo(0,0);

const divArray3 = [[
    '<a href="#"><img src="./Images/category_10.jpg" class="img_resize"> <div>Pour vous</div></a>',
    '<a href="#"><img src="./Images/category_11.png" class="img_resize"> <div>Pour vous</div></a>',
    `<a href="#"><img src="./Images/category_12.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_13.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_14.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_15.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_16$.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_17.jpg" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_18.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_19.jpg" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_20.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_21.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_22.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_23.jpg" class="img_resize"><div>Pour vous</div></a>`
    ],
    [
    `<a href="#"><img src="./Images/category_20.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_21.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_22.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_23.jpg" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_24.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_25.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_26.JPG" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_27.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_28.png" class="img_resize"><div>Pour vous</div></a>`,
    `<a href="#"><img src="./Images/category_29.jpg" class="img_resize"><div>Pour vous</div></a>`
    ]
]

if(document.querySelector('.ventes_flash_element_slide_div').getBoundingClientRect().width < 1092){
    scroll_counter = 0;
    for(let i = 0;i<=1;i++){
        scroll_dime[i].innerHTML = '';
        for(let j = scroll_counter;j<12;j++){
            scroll_dime[i].innerHTML += divArray3[i][j];
        }
    }  
}
else if(document.querySelector('.ventes_flash_element_slide_div').getBoundingClientRect().width < 1192){
    scroll_counter = 1;
    for(let i = 0;i<=1;i++){
        scroll_dime[i].innerHTML = '';
        if(i === 1){
            scroll_counter++;
        }
        for(let j = scroll_counter;j<divArray3[i].length;j++){
            scroll_dime[i].innerHTML += divArray3[i][j];
        }
    }
}

window.addEventListener('resize',()=>{//resize & scroll
    scroll_dim = document.querySelector('.scroll_dim').getBoundingClientRect().width;
    ventes_flash_element_slide_div.scrollTo(a*scroll_dim,0);
    if(document.querySelector('.ventes_flash_element_slide_div').getBoundingClientRect().width < 1092){
            scroll_counter = 0;
            for(let i = 0;i<=1;i++){
                scroll_dime[i].innerHTML = '';
                for(let j = scroll_counter;j<12;j++){
                    scroll_dime[i].innerHTML += divArray3[i][j];
                }
            }  
        }
    else if(document.querySelector('.ventes_flash_element_slide_div').getBoundingClientRect().width < 1192){
        scroll_counter = 1;
        for(let i = 0;i<=1;i++){
            scroll_dime[i].innerHTML = '';
            if(i === 1){
                scroll_counter++;
            }
            for(let j = scroll_counter;j<divArray3[i].length;j++){
                scroll_dime[i].innerHTML += divArray3[i][j];
            }
        }
    }

    if(document.querySelector('.ventes_flash_element_slide_div').getBoundingClientRect().width > 1192){/*gestion scroll*/
        scroll_counter = 2;
        for(let i = 0;i<=1;i++){
            if(i === 1){
                scroll_counter = 4;
            }
            scroll_dime[i].innerHTML = '';
            for(let j = scroll_counter;j<divArray3[i].length;j++){
                scroll_dime[i].innerHTML += divArray3[i][j];
            }
        }
    }
})

ventes_flash_right.addEventListener('click',()=>{
    if(counter + scroll_dim > scroll_dim * 2.5){
        ventes_flash_element_slide_div.scrollTo(scroll_dim*3,0);
        setTimeout(()=>{
            ventes_flash_element_slide_div.style.scrollBehavior = "auto" ;
            counter=0;
            a=0;
            ventes_flash_element_slide_div.scrollTo(counter,0);
            ventes_flash_element_slide_div.style.scrollBehavior = "smooth" ;
        },530);
    }
    else{
        counter+=scroll_dim;
        a++;
        ventes_flash_element_slide_div.scrollTo(counter,0);
    }
})
ventes_flash_left.addEventListener('click',()=>{
    if(counter-scroll_dim<0){
        ventes_flash_element_slide_div.scrollTo(0,0);
        ventes_flash_element_slide_div.style.scrollBehavior = "auto" ;
        ventes_flash_element_slide_div.scrollTo(scroll_dim*3,0);
        counter=scroll_dim*2;
        a=2;
        ventes_flash_element_slide_div.style.scrollBehavior = "smooth" ;
        ventes_flash_element_slide_div.scrollTo(counter,0);
    }
    else{
        counter-=scroll_dim;
        a--;
        ventes_flash_element_slide_div.scrollTo(counter,0);
    }
})

//Sidebar

const categorie_container = document.querySelectorAll('.categorie_container');
const categorie_plus =  document.querySelectorAll('.categorie_plus');
const categorie_moins =  document.querySelectorAll('.categorie_moins');

for(let i = 0; i<categorie_plus.length;i++){
    categorie_plus[i].addEventListener('click',()=>{
        categorie_container[i].style.height = "fit-content";
        categorie_plus[i].style.display = "none";
    })
    categorie_moins[i].addEventListener('click',()=>{
        if(i===0){
            categorie_container[i].style.height = "215px";
        }
        else{
            categorie_container[i].style.height = "200px";
        }
        categorie_plus[i].style.display = "flex";
    })
}

//Filtres

const ventes_flash_div_resp_container_a = document.querySelector('.ventes_flash_div_resp_container_a');
const adress_drop_top1 = document.querySelector('.adress_drop_top1');
const section_adress_drop1 = document.querySelector('.section_adress_drop1');
const section_body = document.querySelectorAll("main,.section_bottom,footer,.retour_haut,.small_section_list,.fixed_cart");
const body = document.querySelector('body');
const section_adress = document.querySelector('.section_adress');
const section_menubar_resp = document.querySelector('.section_menubar_resp');
const section_menubar_list = document.querySelector('.section_menubar_list');
const adress_drop_bottom_cross = document.querySelector('.adress_drop_bottom_cross');

ventes_flash_div_resp_container_a.addEventListener('click',()=>{
    section_adress_drop1.classList.add('resp_bottom');
    body.classList.add('overflow_hidden');
    section_body.forEach(function(ele){
        ele.classList.add('brightness');
    })
    section_adress.classList.add('brightness');
    section_menubar_resp.classList.add('brightness');
    section_menubar_list.classList.add('brightness');
})

adress_drop_top1,adress_drop_bottom_cross.addEventListener('click',()=>{
    section_adress_drop1.classList.remove('resp_bottom');
    body.classList.remove('overflow_hidden');
    section_body.forEach(function(ele){
        ele.classList.remove('brightness');
    })
    section_adress.classList.remove('brightness');
    section_menubar_resp.classList.remove('brightness');
    section_menubar_list.classList.remove('brightness');
})