class Marker {
  constructor(color, inkPercentage = 100) {
    this.color = color;         
    this.ink = inkPercentage;    
  }

  print(text) {
    const paragraph = document.createElement('p');

    for (let char of text) {
      if (this.ink <= 0) {
        console.warn("Чорнило закінчилося!");
        break;
      }

      const span = document.createElement('span');
      span.textContent = char;
      span.style.color = this.color;
      paragraph.append(span);

      if (char !== ' ') {
        this.ink -= 0.5;
      }
    }

    document.body.append(paragraph);
  }
}

class RefillableMarker extends Marker {
  constructor(color, inkPercentage) {
    super(color, inkPercentage);
  }

  refill() {
    this.ink = 100;
    console.log(`Маркер кольору ${this.color} успішно заправлено до 100%!`);
  }
}
