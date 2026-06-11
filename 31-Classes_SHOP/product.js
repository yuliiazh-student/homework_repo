export default class Product {
  constructor(id, title, price, category){
    this.id = id
    this._title = title
    this._price = price
    this.category = category
    }
    
 get price(){
  return (this._price).toFixed(2) + ' ₴'
} 
  
get title(){
  return this._title
}

set title(newTitle){
  this._title = newTitle
}

}
