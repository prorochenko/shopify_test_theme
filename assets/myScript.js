document.addEventListener('DOMContentLoaded', function() {
  let selectElement = document.getElementById('SortByColor');
  let priceElement = document.getElementById('customPrice');

  selectElement.addEventListener('change', function() {
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let selectedPrice = selectedOption.getAttribute('data-variant-price');
   
    let formattedPrice = formatCurrency(selectedPrice);
    
    priceElement.innerText = formattedPrice;
  });

  function formatCurrency(amount) {
    let formattedAmount = (parseFloat(amount) / 100).toFixed(2);
    return "₴" + formattedAmount + " UAH";
  }
  
});


const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');


addToCartForms.forEach((form) => {

  form.addEventListener("submit", async function handleSubmit(event){
  event.preventDefault();
await fetch(window.Shopify.routes.root + 'cart/add.js', {
  method: 'POST',
  body: new FormData(form),

})
const  res= await fetch('/cart.json');
    const cart = await res.json();

    document.querySelectorAll(".cart-count-bubble").forEach((el) => {
      el.textContent = cart.item_count;
    });

//display that product added to cart
  
    const message = document.createElement("p");
    message.classList.add('addedToCart');
    message.textContent = 'Added to Cart! :)';
    form.appendChild(message);
    
  })
});


  
