var sections = [

[
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
    ],

[
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

],

[
    
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


]

//sections/Categories

var alcoholTab = document.getElementById('Alcohol');
var candyTab = document.getElementById('Candy');
var gumTab = document.getElementById('Gum');
var tabs = [gumTab, alcoholTab, candyTab];
var optionsPage = document.getElementById('options');
var checkOut = document.getElementById('checkout');



//TAGS
var images = document.getElementsByTagName('img');
var divTag = document.createElement('div');


//Body of Code for left side of Screen. Adding elements to page using DOM
for (let i = 0; i < tabs.length; i += 1) {
    var tab = tabs[i];
    console.log(tab);
    
    tab.addEventListener('click', function() {
        var currentSection = sections[i];
        
        //checks to see if imgs are already on the page and clears them if there is
        if (images.length !== 0) {
            divTag.innerHTML = "";
        }

        for (let k = 0; k < currentSection.length; k += 1) {
            let currentItem = currentSection[k];
            console.log(currentItem);
            let articleTag = document.createElement('article');
            let item = document.createElement('img');
            let pTag = document.createElement('p');
            item.setAttribute('src', currentItem.picture);
            articleTag.appendChild(item);
            pTag.innerText = currentItem.name;
            articleTag.appendChild(pTag);
            divTag.appendChild(articleTag);
            optionsPage.appendChild(divTag);


            //ChECKOUT section of page.
            articleTag.addEventListener('click', function() {
                var checkOutTag = document.createElement('h3');
                checkOutTag.innerText = currentItem.name;
                checkOut.appendChild(checkOutTag);
            })
        }
    });
    

};
