class Figure {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    }

  draw(){
    const div = document.createElement('div')
    div.style.width = this.width+'px'
    div.style.height = this.height+'px'
    div.style.backgroundColor = this.color
    document.body.append(div)
    }

}
