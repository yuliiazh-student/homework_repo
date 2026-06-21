function shopCartWrapper() {
  let PRODUCTS_LIST = []
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
  
  function showProductList() {
    let html = ''
    let htmlPrint = ''
    let sum = 0
    if (CART.length) {
      CART.toSorted((a, b) => a.isBuy - b.isBuy).forEach((item, index) => {
        const prodTotal = item.price * item.qty
        const status = `<span class="tag is-${item.isBuy ? 'success' : 'danger'}">${item.isBuy ? 'Yes' : 'No'}</span>`
        html += `<tr data-title="${item.title}">
        <td>${index + 1}</td>
        <td>${item.title}</td>
        <td>${status}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>
        <button class="button is-info is-small btn-dec">-</button>
        <input class="input qty-input" type="number" min="1" value="${item.qty}" />
        <button class="button is-info is-small btn-inc">+</button>
        </td>
        <td>${(prodTotal).toFixed(2)}</td>
        <td>
        ${!item.isBuy ? '<button class="button is-success is-small btn-buy">Buy</button>' : ''}
        ${!item.isBuy ? `<button class="button is-danger is-small btn-delete">Remove</button>` : ''}
        </td>
      </tr>`
        
        htmlPrint += `<tr data-title="${item.title}">
        <td>${index + 1}</td>
        <td>${item.title}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>${item.qty}</td>
        <td>${(prodTotal).toFixed(2)}</td>
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
    // console.log(totalBuy, totalNotBuy);

    getEl('products_list').innerHTML = html
     getEl('products_list_print').innerHTML = htmlPrint
    // getEl('cart_total').innerText = sum.toFixed(2)
    document.querySelectorAll('.cart_total').forEach(el => el.innerText = sum.toFixed(2))
    // addListeners()
    // calcCartTotal()
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

async function getProductsList(){
    const response = await fetch('products.json')
    const data = await response.json()
    PRODUCTS_LIST = data
}

async function init(dd_id){
    await getProductsList()
    let options = '<option value="">-=Select product=-</option>'
    PRODUCTS_LIST.forEach(product => {
        options += `<option value="${product.id}">${product.title}</option>`
    })
  getEl(dd_id).innerHTML = options
  $(`#${dd_id}`).select2({width: '100%' })
  }
  

  function addListeners() {
  const buyBtns = Array.from(document.getElementsByClassName('btn-buy'))
    buyBtns.forEach(btn => {
  const title = btn.closest('tr').dataset.title
  btn.onclick = () => actionProductHandler(title, 'buy')
})

  getEl('products_list').addEventListener('click', (e) => {
    e.stopPropagation()
    const title = e.target.closest('tr').dataset.title

        // if(e.target.classList.contains('btn-buy')){
        //     actionProductHandler(title, 'buy')
        // }
      if(e.target.classList.contains('btn-delete')){
            actionProductHandler(title, 'delete')
      }
      if(e.target.classList.contains('btn-inc')){
            actionProductHandler(title, 'incQty')
        }
      if(e.target.classList.contains('btn-dec')){
            actionProductHandler(title, 'decQty')
        }
    })
  window.addEventListener('click', (e)=>{
  console.log('event on window');
});
}

  
const getProductData = id => PRODUCTS_LIST.find(el => el.id == id)
  
return {
    addToCart,
    addListeners,
    showProductList,
    actionProduct,
    calcCartTotal,
    init,
    getProductData
}

}

const shopCart = shopCartWrapper()
// shopCart.init('products_select')
// shopCart.showProductList()

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM ready');

  shopCart.init('products_select')
  shopCart.showProductList()
   shopCart.addListeners() 

  getEl('add_item_form').onsubmit = (e) => {
    e.preventDefault()
    submitHandler()
  }
})

window.addEventListener('load', () => {
  console.log('window loaded');
  setTimeout(() => {
    document.getElementById('loader').remove()
  }, 1000)
})

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
  getEl('product_title').value = ''
  getEl('product_price').value = ''
  getEl('product_qty').valueAsNumber = 1
  // getEl('products_select').value = ''
  $('#products_select').val('').trigger('change') 
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

// getEl('add_item_form').onsubmit = (e) => {
//   e.preventDefault()
//   submitHandler()
// }


function changeHandler(select) {
  const product = shopCart.getProductData(select.value)
  getEl('product_price').value = product.price.toFixed(2)
  getEl('product_title').value = product.title
}






