function shopCartWrapper() {
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
  },
  {
  title: 'Сік',
  price: 80.00,
  isBuy: false,
  qty: 1
  }
  ]
  
  function addToCart(title, price, qty) {
  const findedEl = CART.find((el) => el.title.toLowerCase() === title.toLowerCase())

  if (findedEl) {
    findedEl.qty += qty
    return 'update'
  } else {
    CART.push({
      title,
      price,
      isBuy: false,
      qty
    })
    return 'add'
  }
  }
  
  function showProductList(){
  let html = ''
  let sum = 0
  if (CART.length) {
    CART.toSorted((a,b) => a.isBuy - b.isBuy).forEach((item, index) => {
      const prodTotal = item.price * item.qty
      const status = `<span class="tag is-${item.isBuy ? 'success' : 'danger'}">${item.isBuy ? 'Yes' : 'No'}</span>`
      html += `<tr>
        <td>${index + 1}</td>
        <td>${item.title}</td>
        <td>${status}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>
        <button class="button is-info is-small" onclick="actionProductHandler('${item.title}', 'decQty')">-</button>
        <input class="input qty-input" type="number" min="1" value="${item.qty}" />
        <button class="button is-info is-small" onclick="actionProductHandler('${item.title}', 'incQty')">+</button>
        </td>
        <td>${(prodTotal).toFixed(2)}</td>
        <td>
        ${!item.isBuy ? '<button class="button is-success is-small" onclick="actionProductHandler(\''+item.title+'\', \'buy\')">Buy</button>' : ''}
        ${!item.isBuy ? `<button class="button is-danger is-small" onclick="actionProductHandler('${item.title}', 'delete')">Remove</button>` : ''}
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
  
  function actionProduct(title, action = ''){
  if (!action) return

  const ind = CART.findIndex(el => el.title === title)
  switch(action){
    case 'delete':
      if (confirm(`Do you realy want to delete "${title}" from list?`)) {
         CART.splice(ind, 1)
      }
      break
    case 'buy':
      CART[ind].isBuy = true
      break
    case 'incQty':
      CART[ind].qty += 1
      break
    case 'decQty':
  if (CART[ind].qty > 1) {
    CART[ind].qty -= 1
  } else if(CART[ind].qty == 1){
    actionProduct(title, 'delete')
  }
  break
  }

  showProductList()
}

  function calcCartTotal() {
  const total = CART.reduce((acc, item) => acc + item.price * item.qty, 0)
  getEl('cart_total').innerText = total.toFixed(2)
  }
  
  return {
    addToCart,
    showProductList,
    actionProduct,
    calcCartTotal
}

}

const shopCart = shopCartWrapper()


function submitHandler(){
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

  const addResult = shopCart.addToCart(title, price, qty)

  shopCart.showProductList() 

  const message = addResult === 'add'
  ? 'Product successfully added to cart'
  : 'Product\'s quantity successfully changed'
  
  toast.success(message)

  return false
}


/*function buyProduct(title) {
  const ind = CART.findIndex(el => el.title === title)
  CART[ind].isBuy = true
  showProductList()
}

function removeProduct(ind){
  if(confirm(`Do you realy want to delete "${CART[ind].title}" from list?`))
    CART.splice(ind, 1)
}*/

function actionProductHandler(title, action) {
  shopCart.actionProduct(title, action)
}

shopCart.showProductList()

getEl('add_item_form').onsubmit = (e) => {
  e.preventDefault()
  submitHandler()
}




