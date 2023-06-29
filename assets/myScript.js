document.addEventListener('DOMContentLoaded', function() {
  var selectElement = document.getElementById('SortByColor');
  var priceElement = document.getElementById('customPrice');
  
  selectElement.addEventListener('change', function() {
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedPrice = selectedOption.getAttribute('data-variant-price');
    var formattedPrice = formatCurrency(selectedPrice);

    priceElement.innerText = formattedPrice;
  });

  function formatCurrency(amount) {
    var formattedAmount = (parseFloat(amount) / 100).toFixed(2);
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

    document.querySelectorAll(".cart-count").forEach((el) => {
      el.textContent = cart.item_count;
    });



    
  })
});


  
