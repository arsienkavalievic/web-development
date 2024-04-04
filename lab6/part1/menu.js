const menu = document.getElementById('menu');

var MenuA = [
    {name:'Services', submenu: 
        [ 
            {name: 'Shipping', submenu: 
                [ 
                    {name:'Address delivery', url: 'https://vozovoz.by/address-delivery/'},
                    {name:'Delivery to marketplaces', url: 'https://vozovoz.by/networkshops/'} 
                ] 
            }, 
            {name:'Logistics', submenu: 
                [ 
                    {name:'Belarus', url: 'https://vozovoz.by/belarus/'},
                    {name:'Kazakhstan', url: 'https://vozovoz.by/kazakhstan/'},
                    {name:'China', url: 'https://vozovoz.by/china/'}
                ] 
            },
            {name:'Wrapping', url: 'https://vozovoz.by/wrapping/'}
        ] 
    }, 
    {name: 'Insurance', url: 'https://vozovoz.by/insurance/'}, 
    {name:'Shipping types', submenu: 
        [ 
            {name:'Large-sized', url: 'https://vozovoz.by/shippingtypes/oversized/'}, 
            {name:'Small-sized', url: 'https://vozovoz.by/shippingtypes/smallcargo/'}
        ] 
    },
    {name:'Info', submenu: 
    [ 
        {name:'Documents', url: 'https://vozovoz.by/documents/'},
        {name:'Rates', url: 'https://vozovoz.by/tariffs/'},
        {name:'FAQ', url: 'https://vozovoz.by/help/'} 
    ] }
];
var firstLayer = true;

function ShowMenu(MenuItemsA, ParentElem) {
    ParentElem.style.display = 'flex';
    if(firstLayer)
    {
        ParentElem.style.flexDirection = 'row';
        ParentElem.style.justifyContent = 'center';
        
    }
    else{
        ParentElem.style.flexDirection = 'column';
    }
    for (var i = 0; i < MenuItemsA.length; i++) {
        var menuItem = MenuItemsA[i];
        var menuElement = document.createElement('div');
        menuElement.classList.add('menu-element');
        if(menuItem.url)
        {
            var link = document.createElement('a');
            link.setAttribute('href', menuItem.url);
            link.textContent = menuItem.name;
            menuElement.appendChild(link);
        }
        else{
            menuElement.textContent = menuItem.name;
        }       
        menuElement.style.fontSize = '30px';
        menuElement.style.backgroundColor = 'rgb(245, 245, 245)'; 
        menuElement.style.padding = '10px';
        menuElement.style.position = 'relative';
        if(firstLayer)
        {
            menuElement.style.border = 'solid';
            menuElement.style.marginRight = '40px';
            menuElement.style.borderRadius = '5px';
            menuElement.style.height = '25px';
            menuElement.style.paddingBottom = '20px';
        } else {
            menuElement.style.top = '5px';
            menuElement.style.borderLeft = 'solid';
            menuElement.style.borderColor = 'rgb(245, 245, 245)';
            menuElement.style.borderWidth = '5px';
        }

        ParentElem.appendChild(menuElement);
        if (menuItem.submenu) {
            var submenuContainer = document.createElement('div');
            submenuContainer.classList.add('submenu-container');
            
            (function(currentMenuItem, currentElement, currentContainer) {
                currentElement.addEventListener('click', function(event) {
                    event.stopPropagation();
                    currentElement.appendChild(currentContainer);
                    currentContainer.style.display = 'block';
                    if(currentMenuItem.activeSubmenu) 
                    {
                        currentMenuItem.activeSubmenu = false;
                        currentContainer.style.display = 'none';
                        return;
                    }
                    currentMenuItem.activeSubmenu = true;
                    if(currentMenuItem.activated)
                    {
                        return;
                    }
                    if (currentContainer.style.display === 'block') {
                        currentContainer.style.position = 'relative';
                        currentContainer.style.top = '20px';
                    }
                    ShowMenu(currentMenuItem.submenu, currentContainer);
                    currentMenuItem.activated = true;                    
                });
                currentElement.addEventListener('mousemove', (event)=>
                {
                    event.stopPropagation();
                    currentElement.style.backgroundColor = 'rgb(225, 225, 225)';
                });
                currentElement.addEventListener('mouseout', (event)=>
                {
                    event.stopPropagation();
                    currentElement.style.backgroundColor = 'rgb(245, 245, 245)';
                });
            })(menuItem, menuElement, submenuContainer);
        }
        else{
            (function(currentElement){
                currentElement.addEventListener('mousemove', (event)=>
                {
                    event.stopPropagation();
                    currentElement.style.backgroundColor = 'rgb(225, 225, 225)';
                });
                currentElement.addEventListener('mouseout', (event)=>
                {
                    event.stopPropagation();
                    currentElement.style.backgroundColor = 'rgb(245, 245, 245)';
                });
            })(menuElement);
        }
    }
    firstLayer = false;
}

window.addEventListener("load", function()
{
    ShowMenu(MenuA, menu);
})

