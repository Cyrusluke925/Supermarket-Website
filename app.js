var alcohol = [
    {
        picture: './pictures/absolut.jpg',
        name: 'Vodka'
    },

    {
        picture: './pictures/gin.jpg',
        name: 'Gin'
    },

    {
        picture: './pictures/rum.jpg',
        name: 'Rum'
    },

    {
        picture: './pictures/tequila.jpeg',
        name: 'Tequila'
    },

]


var candy = [
    
    {
    picture: './pictures/kitkat.jpg',
    name: 'Kit Kat'
    },

    {
        picture: './pictures/starbursts.jpeg',
        name: 'Starbursts'
    },

    {
        picture: './pictures/skittles.jpg',
        name: 'Skittles'
    },
    {
        picture: './pictures/snickers.jpeg',
        name: 'Snickers'
    }
]

var gum = [
    {
        picture: './pictures/orbit.jpg',
        name: 'Orbit'
    },
    {
        picture: './pictures/trident.jpeg',
        name: 'Trident'
    },
    {
        picture: './pictures/stride.jpg',
        name: 'Stride'
    },
    {
        picture: './pictures/extra.jpg',
        name: 'Extra'
    }
]

// page elements
var divTag = document.createElement('div')


// var pTag = document.createElement('p');
var optionsPage = document.getElementById('options')
var images = document.getElementsByTagName('img')

//link tabs 

var alcoholTab = document.getElementById('Alcohol');
var candyTab = document.getElementById('Candy');
var gumTab = document.getElementById('Gum');
var mainTag = document.getElementsByTagName('main');

function alcoholPage() {
if (images.length !== 0 ) {
    divTag.innerHTML = "";
    } 
    for (let i = 0; i < alcohol.length; i += 1) {
        let currentDrink = alcohol[i];
        let articleTag = document.createElement('article');
        let item = document.createElement('img');
        let pTag = document.createElement('p');
        item.setAttribute('src', currentDrink.picture);
        articleTag.appendChild(item);
        pTag.innerText = currentDrink.name;
        articleTag.appendChild(pTag);
        divTag.appendChild(articleTag);
        optionsPage.appendChild(divTag);
    
    }
}

function candyPage() {
    if (images.length !== 0 ) {
        divTag.innerHTML = "";
        } 
    for(let i = 0;i < candy.length; i += 1) {
    let currentItem = candy[i];
    let articleTag = document.createElement('article');
    let item = document.createElement('img');
    let pTag = document.createElement('p');
    item.setAttribute('src', currentItem.picture);
    articleTag.appendChild(item);
    pTag.innerText = currentItem.name;
    articleTag.appendChild(pTag);
    divTag.appendChild(articleTag);
    optionsPage.appendChild(divTag);
    }
}



function gumPage() {
    if (images.length !== 0 ) {
        divTag.innerHTML = "";
        } 
    for(let i = 0;i < gum.length; i += 1) {
    let currentItem = gum[i];
    let articleTag = document.createElement('article');
    let item = document.createElement('img');
    let pTag = document.createElement('p');
    item.setAttribute('src', currentItem.picture);
    articleTag.appendChild(item);
    pTag.innerText = currentItem.name;
    articleTag.appendChild(pTag);
    divTag.appendChild(articleTag);
    optionsPage.appendChild(divTag);
    }
}




alcoholTab.addEventListener('click', alcoholPage);
candyTab.addEventListener('click', candyPage);
gumTab.addEventListener('click', gumPage);






// var getAlcohol = document.getElementById('candy')

// function changeColor() {
//     if (this.style.color === 'black') {
//         this.style.color = 'white';
//     } else {
//         this.style.color = 'black';
//     }
// }



// var alcoholSelection = document.createElement('div');
// var optionSection = document.getElementById('options');
// var selection = optionSection.appendChild(alcoholSelection);


//Alcohol BUTTON

// getAlcohol.addEventListener('click', showAlcohol);


// function showAlcohol() {
// selection.innerHTML = `<a href="#"><img src="./pictures/absolut.jpg" alt="vodka" width=150px></a><p>Vodka</p>

// <a href="#"><img src="./pictures/gin.jpg" width=180px></a><p>gin</p>

// <a href="#"><img src="./pictures/rum.jpg" width= 180px></a><p>rum</p>

// <a href="#"><img src="./pictures/tequila.jpg" width= 150px></a><p>Tequila</p>`


// };







