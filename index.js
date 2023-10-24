//////////////////////////counter////////////////////
var minusimg=document.getElementById('minusicon')
var plusimg=document.getElementById('plusicon')
var countdisplay=document.getElementById('thecounter')

function subtractcounter(){
var value= Number(countdisplay.innerText)

    if (value==0)
    {
    alert("Quantity can not be negative");
    }
    else
    {
    var newvalue=value-1
    countdisplay.innerText=newvalue
    
   
}
}

function addtocounter(){
    var newvalue=Number(countdisplay.innerText) +1
    
    countdisplay.innerText=newvalue
   
    
}

minusimg.onclick = subtractcounter
plusimg.onclick = addtocounter

/////////////////////////show and hide cart with click outside///////////////////
var shopcartt = document.getElementById("cartid");
var shopcartboxx = document.getElementById("cartbox");

// Variable to keep track of the cart's visibility
var cartVisible = false;

function showmycart(e) {
    e.stopPropagation();

    shopcartboxx.style.display = 'flex';
    shopcartboxx.style.flexDirection = 'column';
    shopcartboxx.style.rowgap = '5px'; // Use '5px' instead of 5
    shopcartboxx.setAttribute("currentstate", "displayflex");
    cartVisible = true;

    // Add a one-time click event to hide the cart if it's clicked again
    document.addEventListener('click', hideOnOutsideClickOnce);
}

function hideOnOutsideClickOnce(e) {
    e.stopPropagation();

    if (!shopcartt.contains(e.target) && !shopcartboxx.contains(e.target)) {
        shopcartboxx.style.display = 'none';
        cartVisible = false;
        // Remove the one-time click event
        document.removeEventListener('click', hideOnOutsideClickOnce);
    }
}

shopcartt.onclick = showmycart;

shopcartboxx.onclick = function (e) {
    e.stopPropagation();
    cartVisible = true; // Cart remains visible when clicked
};

shopcartt.addEventListener('mouseover', () => {
    if (!cartVisible) {
        shopcartboxx.style.display = 'flex';
    }
});

shopcartt.addEventListener('mouseout', () => {
    if (!cartVisible) {
        shopcartboxx.style.display = 'none';
    }
});

//////////////////////////////////carousel////////in mobile display////////////////////////////
var index=0
var imagearray=["./images/image-product-1.jpg",
"./images/image-product-2.jpg",
"./images/image-product-3.jpg",
"./images/image-product-4.jpg",
];

var nextbutton = document.getElementById("nex")
var prevbutton = document.getElementById("prev")

function shownextimage (){
  var newindex= index +1 
  
  if (index>=3) 
  {
    newindex=0
    index=0
  }
  else{
    index=newindex
  }
  
  var newsrc=imagearray[newindex]
  document.getElementById("prodimg").src=newsrc
}
function showprevimage  (){

    var newindex= index -1 
    
    
    if (index<=0) 
    {
        newindex=3
      index=3
       
    }
    else{
       
        index=newindex   
    }
    
    var newsrc=imagearray[newindex]
    document.getElementById("prodimg").src=newsrc
  }
  
prevbutton.onclick = showprevimage 
nextbutton.onclick = shownextimage
/////////////////////////////////////////////ADD To Cart////////////////////////////////
var buttonclicked=document.getElementById("buttondeco")
var circleincart =document.getElementById("itemsincartcount")
var checkoutbutton= document.getElementById("cartbutton")
var itemtex=document.getElementById("emptyfull")

function addtocart (){
    var quantity= Number(countdisplay.innerText)
    if (quantity==0)
    {
    alert("Can not add quantity 0 to shopping cart");
    }
    else
    {
    var total = 125.0 * quantity
     
    circleincart.innerText=countdisplay.innerText
    circleincart.style.display='flex'

    itemtex.innerText='Fall Limited Edition Sneakers'+'125.0*'+quantity+'$'+total
    
    document.getElementById("itemcartthumb").style.display='flex'
    document.getElementById("deleteicon").style.display='flex'
    checkoutbutton.style.display='flex'
    checkoutbutton.style.justifyContent='center'
    checkoutbutton.style.alignItems='center'
    }
}

buttonclicked.onclick = addtocart
////////////////////////////////////////////Delete from cart////////////////////////////
var binicon= document.getElementById("deleteicon")


function deletefromcart (){
    var quantity= Number(countdisplay.innerText)
    var lastvalue=quantity-1


    if (lastvalue==0)
    {
        circleincart.style.display='none'
        itemtex.innerText='Your cart is empty'  
        document.getElementById("itemcartthumb").style.display='none'
        document.getElementById("deleteicon").style.display='none'
        checkoutbutton.style.display='none'
    }
    else
    {
        circleincart.innerText=lastvalue
        circleincart.style.display='flex'
        total=125.0*lastvalue
        itemtex.innerText='Fall Limited Edition Sneakers'+'125.0*'+lastvalue+'$'+total
        document.getElementById("itemcartthumb").style.display='flex'
        document.getElementById("deleteicon").style.display='flex'
        checkoutbutton.style.display='flex'
        checkoutbutton.style.justifyContent='center'
        checkoutbutton.style.alignItems='center'
        countdisplay.innerText=lastvalue
    }

    
    }

binicon.onclick = deletefromcart

//////////////////show and hide sidebar in mobile display/////////////////////////////////////////////
var menuicon = document.getElementById("menuicon")
var closeicon = document.getElementById("closeicon")
var sidebar = document.getElementById("sidebar")

function hidesidebar() {
    sidebar.style.display = 'none';
    closeicon.style.display = 'none';
}

function showsidebar() {
    sidebar.style.display = 'flex';
    closeicon.style.display = 'flex';
}

function checkViewport() {
    if (window.matchMedia("(max-width: 375px)").matches) {
        console.log("Mobile view")
        menuicon.onclick = showsidebar
        closeicon.onclick = hidesidebar
    } else {
        console.log("Desktop view")
        hidesidebar()
    }
}

// Run checkViewport initially and whenever the window is resized
checkViewport();
window.addEventListener('resize', checkViewport)

////////////////// Function to change the main product image and update styles for thumbnails////////////////////
function updateProductImage(imagePath, selectedThumbnail) {
    document.getElementById('prodimg').src = imagePath

    // Reset all thumbnails' styles
    const thumbnails = document.querySelectorAll('.thumbimg')
    thumbnails.forEach(thumbnail => {
        thumbnail.style.backgroundColor = 'transparent'
        thumbnail.style.opacity = 1
        thumbnail.style.border = 'none'
    })

    // Update the selected thumbnail's styles
    selectedThumbnail.style.backgroundColor = 'white'
    selectedThumbnail.style.opacity = 0.5
    selectedThumbnail.style.border = '3px solid hsl(26, 100%, 55%)'
}

// Attach a click event listener to the common parent element of the thumbnails
document.getElementById('divprodthumb').addEventListener('click', function (event) {
    if (event.target.classList.contains('thumbimg')) {
        const imagePath = event.target.src.replace('-thumbnail', '') // Adjust the image path
        updateProductImage(imagePath, event.target);
    }
})
////////////////////////////////////////hovering on thumbnails////////////////////////////////////////////////////////

const thumbnailImages = document.querySelectorAll('.thumbnails img')
let selectedThumbnailIndex = 0 
function setSelectedThumbnailDDStyle() {

// Hover effect for thumbnails
thumbnailImages.forEach((thumbnail, index) => {
    thumbnail.addEventListener('mouseover', () => {
        thumbnail.style.backgroundColor = 'white';
        thumbnail.style.opacity = 0.5;
    })

    thumbnail.addEventListener('mouseout', () => {
        if (index !== selectedThumbnailIndex) {
            thumbnail.style.backgroundColor = 'transparent';
            thumbnail.style.opacity = 1;
        }
    })
})
}
// Initialize the selected thumbnail style
setSelectedThumbnailDDStyle()  
//////////lightbox floating window and dimmed screen//on desktop//////////////////////////////////////////////////////////
var productimg=document.getElementById("prodimg")

function popupdisplay(){


    //create the screen dimmed overlay
    const screenoverlay = document.createElement("div")
    screenoverlay.style.position='absolute'
    screenoverlay.style.top='0'
    screenoverlay.style.width='100%'
    screenoverlay.style.height='100%'
    screenoverlay.style.backgroundColor='hsla(0, 0%, 0%, 0.76)'
    document.body.appendChild(screenoverlay)

    //clone the product image and thumbnails 
    let elementToClone = document.getElementById("divprodimg")
    let clonedElement = elementToClone.cloneNode(true)
    //style the coloned element
    clonedElement.style.position='absolute'
    clonedElement.style.width='29%'
    clonedElement.style.height='80%'
    clonedElement.style.top='100px'
    clonedElement.style.rowGap='0px'
 
    //append the cloned Element to body
    document.body.appendChild(clonedElement)

    //enlarge the product image
    let clonedprodimg = clonedElement.querySelector('#prodimg')
    clonedprodimg.style.height='87%'

    //adjust the thumbnail image size
    let clonedthumbimg = clonedElement.querySelectorAll('.thumbimg')
    for (let i = 0; i < clonedthumbimg.length; i++){
        clonedthumbimg[i].style.height='80%'
        clonedthumbimg[i].style.width='18%'
    }
    // Modify the cloned element to set the divpreviousnext to display: flex.
      let clonedprevnex = clonedElement.querySelector('#divpreviousnext')
      
      if (clonedprevnex) {
      //styling the div that contains both prev next buttons
      clonedprevnex.style.display = 'flex'
      clonedprevnex.style.columnGap='400px'

      //styling the buttons
      let clonedprevnexclass = clonedElement.querySelectorAll('.prevnex')
      for (let i = 0; i < clonedprevnexclass.length; i++){
        clonedprevnexclass[i].style.position='relative'
        clonedprevnexclass[i].style.top='-240px'
        clonedprevnexclass[i].style.left='-22px'
        clonedprevnexclass[i].style.width='25px'
        clonedprevnexclass[i].style.padding='15px'
        clonedprevnexclass[i].style.backgroundColor='hsl(0, 0%, 100%)'
        clonedprevnexclass[i].style.borderRadius='50%'
      }
     }
    
    // Create a close button element.
    const closeButton = document.createElement('button')
    // Set the button text
    closeButton.innerHTML = 'X' 
    closeButton.style.position = 'absolute'
    closeButton.style.top = '-34px'
    closeButton.style.right = '0px'
    closeButton.style.fontSize='22px'
    closeButton.style.fontWeight='bold'
    closeButton.style.color='white'
    closeButton.style.background='none'
    closeButton.style.border='none'
    // Add a click event listener to remove the cloned div when the button is clicked
    closeButton.addEventListener('click', function() {
    document.body.removeChild(clonedElement)
    document.body.removeChild(screenoverlay) })
    // Append the close button to the cloned element
    clonedElement.appendChild(closeButton)
    


    ///////////////////cloned thumb nails and carousel//////////////////////////////////////////////////////////////////
     

      const prodImg = clonedElement.querySelector('#prodimg')
      const prevButton = clonedElement.querySelector('#prev')
      const nextButton =  clonedElement.querySelector('#nex')
      const thumbImages = Array.from(clonedElement.querySelectorAll('.thumbnails img')) 
        
      let currentImageIndex = 0

      const imageSources = [
            "./images/image-product-1.jpg",
            "./images/image-product-2.jpg",
            "./images/image-product-3.jpg",
            "./images/image-product-4.jpg"
        ]
     
   
        // Function to update the carousel based on the current index
        function updateCarousel() {
            prodImg.src = imageSources[currentImageIndex];

            // Highlight the corresponding thumbnail image
            thumbImages.forEach((thumbnail, index) => {
                if (index === currentImageIndex) {
                    thumbnail.style.backgroundColor='white'
                    thumbnail.style.opacity=0.4
                    thumbnail.style.border='3px solid hsl(26, 100%, 55%)'
                } else {
                    thumbnail.style.backgroundColor='transperant'
                    thumbnail.style.opacity=1
                    thumbnail.style.border='none'
                }
            });
        }

        // Event listener for clicking on a thumbnail
        thumbImages.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                currentImageIndex = index;
                updateCarousel()
            
            });
        });

        // Event listener for previous button
        prevButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
            updateCarousel()
        
        });

        // Event listener for next button
        nextButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % imageSources.length;
            updateCarousel()
           
        });

        // Initialize the carousel
        updateCarousel()
 ////////////////////////////////////////////////////////////////////////////////////////////////
    // Add CSS styles for hover effects on buttons and thumbnail

        let selectedThumbnailIndex = 0 // Initialize with the first thumbnail
        // Function to set the selected thumbnail style
        function setSelectedThumbnailStyle() {
            thumbImages.forEach((thumbnail, index) => {
                if (index === selectedThumbnailIndex) {
                    thumbnail.style.backgroundColor = 'white'
                    thumbnail.style.opacity = 0.5
                } else {
                    thumbnail.style.backgroundColor = 'transparent'
                    thumbnail.style.opacity = 1
                }
            })
        }
    
        // Hover effect for thumbnails
        thumbImages.forEach((thumbnail, index) => {
            thumbnail.addEventListener('mouseover', () => {
                thumbnail.style.backgroundColor = 'white';
                thumbnail.style.opacity = 0.5;
            })
    
            thumbnail.addEventListener('mouseout', () => {
                if (index !== selectedThumbnailIndex) {
                    thumbnail.style.backgroundColor = 'transparent';
                    thumbnail.style.opacity = 1;
                }
            });
    
            thumbnail.addEventListener('click', () => {
                selectedThumbnailIndex = index;
                setSelectedThumbnailStyle();
                currentImageIndex = index;
                updateCarousel();
            });
        })
    
        // Hover effect for previous and next buttons
        prevButton.addEventListener('mouseover', () => {
            prevButton.src = './images/icon-previous-orange.svg'
        })
    
        prevButton.addEventListener('mouseout', () => {
            prevButton.src = './images/icon-previous.svg'
        })
    
        nextButton.addEventListener('mouseover', () => {
            nextButton.src = './images/icon-next-orange.svg'
        })
    
        nextButton.addEventListener('mouseout', () => {
            nextButton.src = './images/icon-next.svg'
        })
    
        // Hover effect for the close button
        closeButton.addEventListener('mouseover', () => {
            closeButton.style.color = 'orange'
        })
    
        closeButton.addEventListener('mouseout', () => {
            closeButton.style.color = 'white'
        })
    
        // Initialize the selected thumbnail style
        setSelectedThumbnailStyle()  
    }

productimg.onclick=popupdisplay
















