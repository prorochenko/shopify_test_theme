document.addEventListener('DOMContentLoaded', function() {
  let selectElement = document.getElementById('SortByColor');
  let priceElement = document.getElementById('customPrice');
   let quantityInput = document.getElementById('quantity');

  selectElement.addEventListener('change', function() {
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let selectedPrice = selectedOption.getAttribute('data-letiant-price');
    let quantity = parseInt(quantityInput.value);
let qntandprice = quantity*selectedPrice;
    
    let formattedPrice = formatCurrency(qntandprice);
    
console.log("quantity", typeof(quantity))
    priceElement.innerText = formattedPrice;
  });

  function formatCurrency(amount) {
    let formattedAmount = (parseFloat(amount) / 100).toFixed(2);
    return "₴" + formattedAmount + " UAH";
  }

  // Обработчик события для увеличения количества
  document.querySelectorAll('.quantity__button[name="plus"]').forEach((btn) => btn.addEventListener('click', function() {

    selectElement.dispatchEvent(new Event('change'));
  }));

  // Обработчик события для уменьшения количества
  document.querySelectorAll('.quantity__button[name="minus"]').forEach((btn) => btn.addEventListener('click', function() {

    selectElement.dispatchEvent(new Event('change'));
  }));
  
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


  
