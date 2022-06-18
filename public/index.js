let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");
let emptyBasket = document.getElementById('empty-basket');
let filledBasket = document.getElementById('filled-basket');
let cart = document.getElementById("cart");
let close = document.querySelector("#close");
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let count = 0;
let display = document.getElementById('display');
let display1 = document.getElementById('display1');
let multiply = document.getElementById('multiply');
let addToCart = document.querySelector('#add-to-cart');
let remove = document.getElementById('delete');
let emptyFilled = document.getElementById('null')
let multiplication = 0;
let cartNumber = document.getElementById('cart-number');
let next1 = document.getElementById('next1');
let previous1 = document.getElementById('previous1');
let next2 = document.getElementById('next2');
let previous2 = document.getElementById('previous2');
let next3 = document.getElementById('next3');
let previous3 = document.getElementById('previous3');
let next4 = document.getElementById('next4');
let previous4 = document.getElementById('previous4');
let slideshow1 = document.getElementById('slideshow1');
let slideshow2 = document.getElementById('slideshow2');
let slideshow3 = document.getElementById('slideshow3');
let slideshow4 = document.getElementById('slideshow4');
let lightbox1 = document.getElementById('lightbox1');
let lightbox2 = document.getElementById('lightbox2');
let lightbox3 = document.getElementById('lightbox3');
let lightbox4 = document.getElementById('lightbox4');
let closed = document.getElementById('closed');
let thumbnail1 = document.getElementById('thumbnail1');
let thumbnail2 = document.getElementById('thumbnail2');
let thumbnail3 = document.getElementById('thumbnail3');
let thumbnail4 = document.getElementById('thumbnail4');

thumbnail1.addEventListener('click', () => {
    lightbox1.classList.remove('hidden');
})

next1.addEventListener('click', () => {
    slideshow1.classList.add('hidden', 'md:block');
    slideshow2.classList.remove('hidden');
    slideshow2.classList.add('md:hidden');
})

next2.addEventListener('click', () => {
    slideshow2.classList.add('hidden');
    slideshow3.classList.remove('hidden');
    slideshow3.classList.add('md:hidden');
})

next3.addEventListener('click', () => {
    slideshow3.classList.add('hidden');
    slideshow4.classList.remove('hidden');
    slideshow4.classList.add('md:hidden');
})

next4.addEventListener('click', () => {
    slideshow4.classList.add('hidden');
    slideshow1.classList.remove('hidden');
    
})

previous1.addEventListener('click', () => {
    slideshow1.classList.add('hidden', 'md:block');
    slideshow4.classList.remove('hidden');
    slideshow4.classList.add('md:hidden');
})

previous2.addEventListener('click', () => {
    slideshow2.classList.add('hidden');
    slideshow1.classList.remove('hidden');
    
})

previous3.addEventListener('click', () => {
    slideshow3.classList.add('hidden');
    slideshow2.classList.remove('hidden');
    slideshow2.classList.add('md:hidden');
})

previous4.addEventListener('click', () => {
    slideshow4.classList.add('hidden');
    slideshow3.classList.remove('hidden');
    slideshow3.classList.add('md:hidden');
})

burger.addEventListener('click', () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden")
    }
});

close.addEventListener('click', () => {
    menu.classList.add('hidden')
})

plus.addEventListener('click', () => {
    count += 1
    display.textContent = count
    

})

minus.addEventListener('click', () => {
    if (count > 0) {
        count -= 1    
    }
    else {count = 0}
    display.textContent = count
   
})


addToCart.addEventListener('click', () => {
    display1.textContent = count;
    cartNumber.textContent = count;
    multiplication = 125 * count;
    multiply.textContent = "  " + "$" + multiplication;

})




cart.addEventListener('click', () => {
    
if (emptyBasket.classList.contains('hidden') && multiplication === 0) {
    emptyBasket.classList.remove('hidden')
} else {emptyBasket.classList.add('hidden')}
})

cart.addEventListener('click', () => {
    
    if (filledBasket.classList.contains("hidden") && multiplication > 0 ) {
    filledBasket.classList.remove("hidden")
    } else {
        filledBasket.classList.add("hidden")
    }
})

remove.addEventListener('click', () => {
    if (count > 0) {emptyBasket.classList.remove('hidden')
        filledBasket.classList.add('hidden');
        multiplication *= 0 };
        cartNumber.textContent = 0;

     }
     )