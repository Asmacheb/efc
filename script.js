//NAVBAR

document.addEventListener('DOMContentLoaded', function () {
    const deroulant = document.querySelector('.deroulant');

    let timer;

    deroulant.addEventListener('mouseover', function () {
        clearTimeout(timer);
        deroulant.classList.add('active');
    });

    deroulant.addEventListener('mouseout', function () {
        timer = setTimeout(function () {
            deroulant.classList.remove('active');
        }, 900); 
    });
});



// PANCAKES

function calculerQuantites() {

    var nbPersonnes = parseInt(document.getElementById("nbPersonnes").value);


    var listeIngredients = document.getElementById("listeIngredients").getElementsByTagName("li");

 
    var quantites = {
        "de farine": { quantite: 60, unite: "g" },
        "de levure chimique": { quantite: 2.5, unite: "g" },
        "de sucre": { quantite: 15, unite: "g" },
        "de beurre fondu": { quantite: 7, unite: "g" },
        "de lait": { quantite: 60, unite: "ml" },
        "d'extrait de vanille": { quantite: 1.25, unite: "ml" },
        "oeuf": { quantite: 1, unite: "" }, 
        "pincée de sel": { quantite: 1, unite: "" }
    };
    for (var i = 0; i < listeIngredients.length; i++) {
        var ingredient = listeIngredients[i].textContent.trim();
        var nouvelleQuantite = quantites[ingredient].quantite * nbPersonnes;
        var unite = quantites[ingredient].unite;

        
        listeIngredients[i].textContent = `${nouvelleQuantite} ${unite} ${ingredient}`;
} }

//Brownie

function calculerQuantites2() {
   
    var nbPersonnes2 = parseInt(document.getElementById("nbPersonnes2").value);

    var listeIngredients2 = document.getElementById("listeIngredients2").getElementsByTagName("li");

 
    var quantites2 = {
        "de chocolat noir": { quantite: 30, unite: "g" },
        "de beurre": { quantite: 20, unite: "g" },
        "de sucre": { quantite: 40, unite: "g" },
        "de farine": { quantite: 20, unite: "g" },
        "de lait": { quantite: 20, unite: "ml" },
        "d'extrait de vanille": { quantite: 1.25, unite: "ml" },
        "oeuf": { quantite: 1, unite: "" }, 
        "pincée de sel": { quantite: 1, unite: "" },
        "de noix ou de pépites de chocolat (facultatif)": { quantite: 10, unite: "g" }
    };
    for (var i = 0; i < listeIngredients2.length; i++) {
        var ingredient2 = listeIngredients2[i].textContent.trim();
        var nouvelleQuantite2 = quantites2[ingredient2].quantite * nbPersonnes2;
        var unite2 = quantites2[ingredient2].unite;

       
        listeIngredients2[i].textContent = `${nouvelleQuantite2} ${unite2} ${ingredient2}`;
} }

// COOKIES

function calculerQuantites3() {
   
    var nbPersonnes3 = parseInt(document.getElementById("nbPersonnes3").value);


    var listeIngredients3 = document.getElementById("listeIngredients3").getElementsByTagName("li");

 
    var quantites3 = {
        "de beurre ramolli": { quantite: 50, unite: "g" },
        "de sucre blanc": { quantite: 37, unite: "g" },
        "de sucre brun": { quantite: 37, unite: "g" },
        "de farine": { quantite: 75, unite: "g" },
        "de pépite de chocolat": { quantite: 50, unite: "g" },
        "d'extrait de vanille": { quantite: 1.25, unite: "ml" },
        "oeufde levure chimique": { quantite: 1, unite: "" }, 
        "oeuf": { quantite: 1, unite: "" },
        "pincée de sel": { quantite: 1, unite: "" }
    };
    for (var i = 0; i < listeIngredients3.length; i++) {
        var ingredient3 = listeIngredients3[i].textContent.trim();
        var nouvelleQuantite3 = quantites3[ingredient3].quantite * nbPersonnes3;
        var unite3 = quantites3[ingredient3].unite;

        listeIngredients3[i].textContent = `${nouvelleQuantite3} ${unite3} ${ingredient3}`;
} }

// MUFFINS

function calculerQuantites4() {

    var nbPersonnes4 = parseInt(document.getElementById("nbPersonnes4").value);

   
    var listeIngredients4 = document.getElementById("listeIngredients4").getElementsByTagName("li");

 
    var quantites4 = {
        "de beurre fondu": { quantite: 30, unite: "g" },
        "de farine": { quantite: 60, unite: "g" },
        "de sucre": { quantite: 37, unite: "g" },
        "de levure chimique ": { quantite: 0.5, unite: "g" },
        "de lait": { quantite: 30, unite: "ml" },
        "d'extrait de vanille": { quantite: 1.25, unite: "ml" },
        "oeuf": { quantite: 1, unite: "" }, 
        "pincée de sel": { quantite: 1, unite: "" },
        "de noix ou de pépites de chocolat (facultatif)": { quantite: 15, unite: "g" }
    };
    for (var i = 0; i < listeIngredients4.length; i++) {
        var ingredient4 = listeIngredients4[i].textContent.trim();
        var nouvelleQuantite4 = quantites4[ingredient4].quantite * nbPersonnes4;
        var unite4 = quantites4[ingredient4].unite;

        listeIngredients4[i].textContent = `${nouvelleQuantite4} ${unite4} ${ingredient4}`;
} }

// GAUFRES

function calculerQuantites5() {

    var nbPersonnes5 = parseInt(document.getElementById("nbPersonnes5").value);
    var listeIngredients5 = document.getElementById("listeIngredients5").getElementsByTagName("li");

 
    var quantites5 = {
        "de farine": { quantite: 30, unite: "g" },
        "de levure chimique": { quantite: 60, unite: "g" },
        "de sucre": { quantite: 37, unite: "g" },
        "de beurre fondu": { quantite: 0.5, unite: "g" },
        "de lait": { quantite: 30, unite: "ml" },
        "d'extrait de vanille": { quantite: 1.25, unite: "ml" },
        "oeuf": { quantite: 1, unite: "" }, 
        "pincée de sel": { quantite: 1, unite: "" },
        
    };
    for (var i = 0; i < listeIngredients5.length; i++) {
        var ingredient5 = listeIngredients5[i].textContent.trim();
        var nouvelleQuantite5 = quantites5[ingredient5].quantite * nbPersonnes5;
        var unite5 = quantites5[ingredient5].unite;

        // Mettre à jour le texte de l'élément de la liste
        listeIngredients5[i].textContent = `${nouvelleQuantite5} ${unite5} ${ingredient5}`;
} }




// document.addEventListener('DOMContentLoaded', function () {
//     const nbr = 8;
//     let p = 0;
//     const container = document.getElementById('imageContainer');
//     const g = document.getElementById('g');
//     const d = document.getElementById('d');
//     const imgWidth = document.querySelector('.container img').width;

//     container.style.width = imgWidth * nbr + 'px';
//     document.querySelectorAll('.container img').forEach(function (img) {
//         img.style.width = imgWidth + 'px';
     
//     });

//     g.onclick = function () {
//         if (p < 0) p++;
//         container.style.transform = 'translate(' + p * imgWidth + 'px)';
//         container.style.transition = 'all 0.5s ease';
     
//     };

//     d.onclick = function () {
//         if (p > -nbr + 1) p--;
//         container.style.transform = 'translate(' + p * imgWidth + 'px)';
//         container.style.transition = 'all 0.5s ease';
      
//     };
// });

// MENU BURGER 
function toggleSubMenu() {
    var submenu = document.getElementById('submenu');
    submenu.classList.toggle('show');
  }



