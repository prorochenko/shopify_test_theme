const addToCart = document.querySelectorAll('form[action="/cart/add"]');

addToCart.forEach(form => {
  form.addEventListener('Submit',(event)=>{
    event.preventDefault();
  })
})