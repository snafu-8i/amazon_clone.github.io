//array_cart
export let cart = JSON.parse(localStorage.getItem('cart'));  

if(JSON.parse(localStorage.getItem('cart')) === null){
    cart = [];
    localStorage.setItem('cart',JSON.stringify(cart));  
}

export const array_product = [
    { id: 0, prix: 155.99, img: "./Images/article_1.png", quantity: 1, desc:`Ordinateur Portable 14,1" Pouces laptop, 6 Go de RAM, 128 Go de SSD, N4000 Celeron Dual-Core, Wi-Fi Bluetooth 2,4/5,0G, 1366 * 768 IPS, Design sans Ventilateur, Inclus une Souris, Clavier à Membrane` },
    { id: 1, prix: 35.99, img: "./Images/article_2.png", quantity: 1, desc:`EDA - Pot de Fleur Carré Mi-Haut Toscane - Volume 51 L - 39 x 39 x H.53 cm, Gris Anthracite` },
    { id: 2, prix: 20.99, img: "./Images/article_3.png", quantity: 1, desc:`AUSTRALIE GUIDE DE VOYAGE 2024 - 2025: Sydney | Melbourne | Brisbane`},
    { id: 3, prix: 45.99, img: "./Images/article_4.png", quantity: 1 , desc:`TREXO Haltère hexagonal durable en fer moulé caoutchouté pour la musculation à la maison avec poignée ergonomique stable et polyvalent`},
    { id: 4, prix: 10.99, img: "./Images/article_5.jpg", quantity: 1 , desc:`GUOKOFF Boite Cadeau Noir Carton (Lot de 10), 20.3 x20.3 x10.2cm Boîtes de Cadeau avec Couvercles, Carton d'Expédition Pliable, Boîtes d'expédition en Carton Ondulé`},
    { id: 5, prix: 20.99, img: "./Images/article_6.png", quantity: 1 , desc:`Logitech M185 Souris Sans Fil, 2.4 GHz avec Mini Récepteur USB, Longévité de la Pile 12 Mois, Résolution du Capteur 1000 PPP, Ambidextre, Compatible PC, Mac, Ordinateur Portable - Gris/Noir`},
    { id: 6, prix: 27.99, img: "./Images/article_7.jpg", quantity: 1 , desc:`Amazon Essentials Pantalon de Survêtement en Polaire à Bas Ouvert (Existe en Grandes Tailles) Homme`},
    { id: 7, prix: 109.99, img: "./Images/article_8.jpg", quantity: 1 , desc:`Dell SE2722HX 27" Full HD (1920x1080) Écran PC, 75Hz, VA, 4ms, AMD FreeSync, HDMI, VGA, Garantie 3 ans, Noir`},
    { id: 8, prix: 25.99, img: "./Images/article_9.jpg", quantity: 1 , desc:`Nutabevr Réveil Analogique Silencieux sans Tic-Tac, Réveil Snooze avec Bouton supérieur, réveil Portable avec lumière et Fonction Snooze, Petite Réveil Voyage pour Chambre, Bureau, Voyage`},
    { id: 9, prix: 15.99, img: "./Images/article_10.jpg", quantity: 1 , desc:`Uni-Toys - Teddy Super Doux (Marron Clair) - 24 cm (Hauteur) - Ours en Peluche, Nounours - Peluche, Doudou`},
    { id: 10, prix: 180.99, img: "./Images/article_11.jpg", quantity: 1 , desc:`SKYSEN 183cm Raille Porte Coulissante Kit Complet de Ferrure de Porte Coulissante pour Système de Porte Coulissante avec Guide au Sol, Rail de Porte Coulissante Durable pour la Séparation des Espaces `},
    { id: 11, prix: 25.99, img: "./Images/article_12.jpg", quantity: 1 , desc:`Amazon Basics Planche à repasser avec repose-fer ovale, Classica, Petit format, 109 x 35 cm - Blanc, À fleur, 131.5 cm x 34 cm x 87 cm`},
    { id: 12, prix: 99.99, img: "./Images/article_13.jpg", quantity: 1 , desc:`SanDisk 1TB PLUS Disque SSD interne jusqu'à 535 MB/s SATA 2,5"`},
    { id: 13, prix: 24.99, img: "./Images/article_14.jpg", quantity: 1 , desc:`CY BOX Support pour Ordinateur Portable en aluminium, Réglable en hauteur, Autonome, Dissipant la chaleur, Jusqu'à 17 pouces, Compatible avec MacBook, Dell, Lenovo, Samsung et plus, IB-NH300`},
    { id: 14, prix: 50.99, img: "./Images/article_15.jpg", quantity: 1 , desc:`KingSpec 1To 2.5" SATA SSD, 3D NAND Flash Disque Dur SSD Interne, Vitesse de Lecture jusqu'à 550 Mo/Sec - pour Ordinateur de Bureau/Portable/Tout-en-Un`},
    { id: 15, prix: 69.99, img: "./Images/article_16.jpg", quantity: 1 , desc:`Crucial P310 SSD 1To PCIe Gen4 NVMe M.2 2280 SSD Interne Gaming, jusqu’à 7.100 Mo/s, Compatible avec Ordinateur Portable et de Bureau, Disque Dur SSD - CT1000P310SSD801 (Édition Acronis)`},
    { id: 16, prix: 69.99, img: "/Images/article_17.jpg", quantity: 1 , desc:`Silicon Power PCIe M.2 NVMe SSD 512Go Gen3x4 R/W up to 2, 200/1, 600MB/s Internal SSD`},
    { id: 17, prix: 50.99, img: "./Images/article_18.jpg", quantity: 1 , desc:`SteelSeries Clavier HyperMagnetic gaming Apex Pro Mini - Actionnement ajustable - Facteur de forme compact de 60 % - RVB - Capuchons de touches PBT - USB-C - Français AZERTY`},
    { id: 18, prix: 89.99, img: "./Images/article_19.jpg", quantity: 1 , desc:`Logitech G213 Prodigy, Clavier Gamer, Eclairage RGB LIGHTSYNC, Résistant aux Éclaboussures, Personnalisable, Commandes Multimédia Dédiées, Français AZERTY - Noir`},
    { id: 19, prix: 99.99, img: "./Images/article_20.jpg", quantity: 1 , desc:`CHERRY KC 200 MX, Clavier de bureau mécanique avec plaque en métal anodisé, disposition française (AZERTY), Filaire, MX2A SILENT RED Switches, Noir bronze`},
    { id: 20, prix: 250.99, img: "./Images/article_21.jpg", quantity: 1 , desc:`Logitech K280e Pro Clavier Filaire Business pour Windows/Linux/Chrome, Plug-and-Play USB, Saisie Discrète, Taille Standard, Résistant aux Eclaboussures, AZERTY Français - Noir`},
    { id: 21, prix: 199.99, img: "./Images/article_22.jpg", quantity: 1 , desc:`LEGO Duplo Ma Ville La Vie à la Garderie, Jouet Éducatif pour Enfants dès 2 Ans, Jeu d'apprentissage avec Briques de Construction et 4 Figurines 10992`},
    { id: 22, prix: 12.99, img: "./Images/article_23.jpg", quantity: 1 , desc:`LEGO 42154 Technic Ford GT 2022, Maquette de Voiture pour Adultes à Construire, Échelle 1:12 avec Caractéristiques Authentiques, Set de Collection Avancé`},
    { id: 23, prix: 19.99, img: "./Images/article_24.jpg", quantity: 1 , desc:`LEGO Star Wars Millennium Falcon, Set pour Fans de la Saga Vaisseau Spatial à Collectionner pour le 25e Anniversaire Décoration d'Intérieure Véhicule mythique, Cadeau d’Anniversaire pour Adultes 75375`},
    { id: 24, prix: 87.99, img: "./Images/article_25.jpg", quantity: 1 , desc:`CSL-Computer - Tapis de souris XXL Speed Gaming Titanwolf noir 900 x 400 mm - Grande base de table - Améliore la précision et la vitesse, 23032532, Type 1`},
    { id: 25, prix: 43.99, img: "./Images/article_26.jpg", quantity: 1 , desc:`Alienware AW620M Souris Gaming sans Fil - 26 000 DPI, 7 Boutons Programmables, 140h d'Autonomie, Éclairage RGB AlienFX - Lunar Light`},
    { id: 26, prix: 29.99, img: "./Images/article_27.jpg", quantity: 1 , desc:`SteelSeries Aerox 5 - Souris gaming perforée RGB - Design étanche ultraléger - Capteur optique TrueMove Air 18K DPI`},
    { id: 27, prix: 11.99, img: "./Images/article_28.jpg", quantity: 1 , desc:`Amazon Basics Souris filaire USB à 3 boutons, Standard, silencieuse, noire`},
    { id: 28, prix: 15.99, img: "./Images/article_29.jpg", quantity: 1 , desc:`YESforLOV Massage Lubrifiant Naturel - Huile Intime bio Arôme Léger Fleur d’Oranger - Huile 2en1 Massante, Lubrifiante, Erotique - Texture Non Collante et Longue Durée Fabriqué en France - 100ml `},
    { id: 29, prix: 18.99, img: "./Images/article_30.jpg", quantity: 1 , desc:`Mnsruu Horloge Murale Ronde en Forme de Panda Rouge à Piles avec Balayage Silencieux sans tic-Tax, décoration de la Maison, Salon, Cuisine, Chambre à Coucher`}
];
