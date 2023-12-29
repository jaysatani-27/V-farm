let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    console.log("search button click");
    searchForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}


let shoppingcart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () => {
    console.log("cart button click");
    shoppingcart.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}


let login = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {
    console.log("login button click");
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    console.log('Menu button clicked');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    login.classList.remove('active');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');

}





var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:7500,
        disableonInteraction:false,
    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,   
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay:{
        delay:7500,
        disableonInteraction:false,
    },
   
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,   
      },
    },
  });
  
  
  function filterResults() {
    
    var input, filter, products, i, name;
    input = document.getElementById("search-box");
    filter = input.value.toUpperCase();
    products = document.querySelectorAll(".swiper-slide.box ");

    for (i = 0; i < products.length; i++) {
        name = products[i].getElementsByTagName("h3")[0];
        if (name.innerText.toUpperCase().indexOf(filter) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}






