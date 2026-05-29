const CART = [
  {
    title: 'Хліб тостовий',
    price: 36.8,
    isBuy: true,
    qty: 1
  },
  {
    title: 'Молоко',
    price: 42.00,
    isBuy: false,
    qty: 2
  }
]

const getEl = (id) => document.getElementById(id);

function submitHandler(){
  event.preventDefault()
  const title = getEl('product_title').value
  const price = getEl('product_price').valueAsNumber
  const qty = getEl('product_qty').valueAsNumber

  if (title === '') {
    toast.error('Enter product title')
    return false
  }

  if (isNaN(price) || price <= 0) {
    toast.error('Enter product price')
    return false
  }

  if (isNaN(qty) || qty <= 0) {
    toast.error('Enter product quantity')
    return false
  }

  const addResult = addToCart(title, price, qty)

  showProductList() 

  const message = addResult === 'add'
  ? 'Product successfully added to cart'
  : 'Product\'s quantity successfully changed'
  
  toast.success(message)

  return false
}


function addToCart(title, price, qty) {
  const findedEl = CART.find((el) => el.title.toLowerCase() === title.toLowerCase())

  if (findedEl) {
    findedEl.qty += qty
    return 'update'
  } else {
    CART.push({
      title,
      price,
      qty
    })
    return 'add'
  }
}

function showProductList(){
  let html = ''
  let sum = 0
  if (CART.length) {
    CART.forEach((item, index) => {
      const prodTotal = item.price * item.qty
      const status = `<span class="tag is-${item.isBuy ? 'success' : 'danger'}">${item.isBuy ? 'Yes' : 'No'}</span>`
      html += `<tr>
        <td>${index + 1}</td>
        <td>${item.title}</td>
        <td>${status}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>${item.qty}</td>
        <td>${(prodTotal).toFixed(2)}</td>
        <td>
        ${!item.isBuy ? '<button class="button is-success is-small" onclick="buyProduct('+index+')">Buy</button>' : ''}
        </td>
      </tr>`
      sum += prodTotal
    })
  } else {
    html = `<tr>
      <td colspan="5">No products in cart</td>
    </tr>`
  }

  const totalBuy = CART
    .filter(el => el.isBuy)
    .reduce((acc, item) => acc + item.price * item.qty, 0)
  const totalNotBuy = CART
    .filter(el => !el.isBuy)
    .reduce((acc, item) => acc + item.price * item.qty, 0)
  console.log(totalBuy, totalNotBuy);

  getEl('products_list').innerHTML = html
  getEl('cart_total').innerText = sum.toFixed(2)
}

function buyProduct(ind){
  CART[ind].isBuy = true
  showProductList()
}

function calcCartTotal() {
  const total = CART.reduce((acc, item) => acc + item.price * item.qty, 0)
  getEl('cart_total').innerText = total.toFixed(2)
}


showProductList() 

