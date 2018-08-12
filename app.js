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
    picture: './pictures/kitkat.jpeg',
    name: 'Kit Kat'
    },

    {
        picture: './pictures/starbursts.jpg',
        name: 'Starbursts'
    },

    {
        picture: './pictures/skittles.jpg',
        name: 'Skittles'
    },
    {
        picture: './pictures/snickers.jpg',
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
var checkOut = document.getElementById('checkout');


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
        let currentItem = alcohol[i];
        let articleTag = document.createElement('article');
        let item = document.createElement('img');
        let pTag = document.createElement('p');
        item.setAttribute('src', currentItem.picture);
        articleTag.appendChild(item);
        pTag.innerText = currentItem.name;
        articleTag.appendChild(pTag);
        divTag.appendChild(articleTag);
        optionsPage.appendChild(divTag);

        articleTag.addEventListener('click', function () {
            var checkOutTag = document.createElement('h3');
            checkOutTag.innerText = currentItem.name;
            checkOut.appendChild(checkOutTag)
            
        });
    
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

    articleTag.addEventListener('click', function () {
        var checkOutTag = document.createElement('h3');
        checkOutTag.innerText = currentItem.name;
        checkOut.appendChild(checkOutTag)
        
    });
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
    
    articleTag.addEventListener('click', function () {
        var checkOutTag = document.createElement('h3');
        checkOutTag.innerText = currentItem.name;
        checkOut.appendChild(checkOutTag)
        
    });
    
    }
}





alcoholTab.addEventListener('click', alcoholPage);
candyTab.addEventListener('click', candyPage);
gumTab.addEventListener('click', gumPage);













