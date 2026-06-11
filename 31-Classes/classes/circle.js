class Circle extends Figure {
    constructor(radius, color) {
    super(radius * 2, radius * 2, color);
       this._radius = radius;
      this.element = null;
    }
    
  get radius() {
    return this._radius;
  }

    set radius(value) {
    if (value <= 0) {
        console.error("Помилка! Радіус не може бути нульовим або від'ємним!");
    return;
  }
    this._radius = value;
    this.width = value * 2;
        this.height = value * 2;
        
    if (this.element) {
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
  }
  }

  get diameter() {
    return this._radius * 2;
  }

  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  getLength() {
    return 2 * Math.PI * this._radius;
  }

  draw() {
    const div = document.createElement('div');
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
    div.style.borderRadius = '50%';
    this.element = div; 
    document.body.append(div);
  }
}
