document.addEventListener('DOMContentLoaded', function() {
  let selectElement = document.getElementById('SortByColor');
  let priceElement = document.getElementById('customPrice');
  let quantityInput = document.getElementById('quantity');
  let image = document.getElementById('image');
  
  selectElement.addEventListener('change', function() {
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let selectedPrice = selectedOption.getAttribute('data-variant-price');
    let quantity = quantityInput.value;
    let imageSrc = image.src;
    console.log(image.src)
document.getElementById('image').src = "image.src";
    
    let qntMultPrc = quantity * selectedPrice;

    let formattedPrice = formatCurrency(qntMultPrc);
    
    priceElement.innerText = formattedPrice;
  });

  function formatCurrency(amount) {
    let formattedAmount = (parseFloat(amount) / 100).toFixed(2);
    return "₴" + formattedAmount + " UAH";
  }

  document.querySelectorAll('.quantity__button[name="plus"]').forEach((button) => {
  button.addEventListener('click', function() {
    selectElement.dispatchEvent(new Event('change'));
  });
});

// Обработчик события для уменьшения количества
document.querySelectorAll('.quantity__button[name="minus"]').forEach((button) => {
  button.addEventListener('click', function() {
    selectElement.dispatchEvent(new Event('change'));
  });
});
  
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


  
