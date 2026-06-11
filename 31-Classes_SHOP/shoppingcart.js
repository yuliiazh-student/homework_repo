export default class ShoppingCart {
constructor(){
  this.list = JSON.parse(localStorage.getItem('cartList')) || []
}

  discountPercent = 20
  isAppliedDiscount = false

addItem(product, quantity = 1){
  const finded = this.list.find(el => {
    return el.product.id === product.id
  })

  if(finded){
    finded.quantity += quantity
  } else {
    this.list.push({
      product,
      quantity
    })
  }
  localStorage.setItem('cartList', JSON.stringify(this.list))
  }
  
  removeItem(productId){
  const index = this.list.findIndex(el => {
    return el.product.id === productId
  })
  if (index !== -1) this.list.splice(index, 1)
  }
  
  get totalItems() {
    console.log(this.discountPercent);
    return this.list.reduce((acc, el) => acc + el.quantity, 0)
}
  // let s = 0
  // this.list.forEach(el => s += el.quantity)
  // return s

 get totalPrice(){
  const total = this.list.reduce((acc, el) => {
    return acc += el.product._price * el.quantity
  } ,0)
  return this.isAppliedDiscount
    ? total - total * this.discountPercent / 100
    : total
}
  
  applyDiscount(discountCode){
  if (discountCode === "SUMMER20") {
    this.isAppliedDiscount = true
  }
}

}