const products = document.querySelectorAll('.product');

const cart = document.querySelector('.cart');
const cartTitle = document.querySelector('.cart-title');

let cartItems = []; // добавленные в корзину товары

function addToCart(product) {
  const productId = product.dataset.id;
  
  const cartItemIndex = cartItems.findIndex(item => item.id === productId);

  const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

  if (cartItemIndex >= 0) {
    cartItems[cartItemIndex].quantity += quantity;
    const count = cart.querySelector(`[data-id="${productId}"] .cart__product-count`);
    count.textContent = cartItems[cartItemIndex].quantity;
  } else {
    const productImage = product.querySelector('.product__image').cloneNode(true);
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.dataset.id = productId;

    const cartProductCount = document.createElement('div');
    cartProductCount.classList.add('cart__product-count');
    cartProductCount.textContent = quantity;
    cartProduct.appendChild(cartProductCount);

    const cartProductImage = document.createElement('img');
    cartProductImage.classList.add('cart__product-image');
    cartProductImage.src = productImage.src;
    cartProduct.appendChild(cartProductImage);

    cart.appendChild(cartProduct);

    cartItems.push({ id: productId, quantity });
  }

  cartTitle.style.display = 'block';
}

function removeFromCart(event) {
  const cartProduct = event.target.parentElement;
  const productId = cartProduct.dataset.id;
  const cartItemIndex = cartItems.findIndex(item => item.id === productId);

  cartItems.splice(cartItemIndex, 1);
  cartProduct.remove();

  if (cartItems.length === 0) {
    cartTitle.style.display = 'none';
  }
}

products.forEach(product => {
  const decButton = product.querySelector('.product__quantity-control_dec');
  const incButton = product.querySelector('.product__quantity-control_inc');
  const quantityValue = product.querySelector('.product__quantity-value');
  
  decButton.addEventListener('click', () => {
    if (parseInt(quantityValue.textContent) > 1) {
      quantityValue.textContent = parseInt(quantityValue.textContent) - 1;
    }
  });
  
  incButton.addEventListener('click', () => {
    quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
  });
  
  product.querySelector('.product__add').addEventListener('click', () => {
    addToCart(product);
  });
});

// удаление товаров из корзины
cart.addEventListener('click', (event) => {
  if (event.target.classList.contains('cart__product-delete')) {
    removeFromCart(event);
  }
});

// восстановление списка добавленных в корзину товаров
window.addEventListener('load', () => {
  cartTitle.style.display = 'none';

  const cartProducts = cart.querySelectorAll('.cart__product');
  if (cartProducts.length > 0) {
    cartTitle.style.display = 'block';

    cartProducts.forEach(cartProduct => {
      const productId = cartProduct.dataset.id;
      const quantity = parseInt(cartProduct.querySelector('.cart__product-count').textContent);

      cartItems.push({ id: productId, quantity });
    });
  }
});





