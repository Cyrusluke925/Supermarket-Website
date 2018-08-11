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
        picture: './pictures/tequila.jpg',
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

// page elements
var divTag = document.createElement('div');
var pTag = document.createElement('p');
var optionsPage = document.getElementById('options')
var images = document.getElementsByTagName('img')

//link tabs 

var alcoholTab = document.getElementById('Alcohol');
var candyTab = document.getElementById('Candy');
var cerealTab = document.getElementById('Cereal');
var mainTag = document.getElementsByTagName('main');

function alcoholPage() {
if (images.length !== 0 ) {
    divTag.innerHTML = "";
    } 
    for (let i = 0; i < alcohol.length; i += 1) {
        var currentDrink = alcohol[i];
        var item = document.createElement('img')
        item.setAttribute('src', currentDrink.picture);
        divTag.appendChild(item);
        optionsPage.appendChild(divTag);
    
    }
}

function candyPage() {
    console.log(candy)
    if (images.length !== 0 ) {
        divTag.innerHTML = "";
        } 
    for(let i = 0;i < candy.length; i += 1) {
    let currentItem = candy[i];
    let item = document.createElement('img');
    item.setAttribute('src', currentItem.picture);
    divTag.appendChild(item);
    optionsPage.appendChild(divTag);

    
    }
}


alcoholTab.addEventListener('click', alcoholPage);
candyTab.addEventListener('click', candyPage);





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







