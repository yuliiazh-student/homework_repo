class Circle {
    #radius;

    constructor(radius = 0) {
        this.radius = radius;
    }

    get radius() {
        return this.#radius;
    }

    set radius(value) {
        if (value >= 0) {
            this.#radius = value;
        } else {
            console.log("Помилка: Радіус не може бути від'ємним!");
        }
    }

    get diameter() {
        return this.#radius * 2;
    }

    getArea() {
        return Math.PI * Math.pow(this.#radius, 2);
    }

    getLength() {
        return 2 * Math.PI * this.#radius;
    }
}

const outputDiv = document.getElementById('output');
    
    const myCircle = new Circle();

    myCircle.radius = 5.0;

    let htmlContent = `
        <p><strong>Радіус кола (get):</strong> ${myCircle.radius} см</p>
        <p><strong>Діаметр кола (get):</strong> ${myCircle.diameter} см</p>
        <p><strong>Площа кола (метод):</strong> ${myCircle.getArea().toFixed(2)} см²</p>
        <p><strong>Довжина кола (метод):</strong> ${myCircle.getLength().toFixed(2)} см</p>
    `;
    
    outputDiv.innerHTML = htmlContent;

    console.log("Спроба встановити від'ємний радіус через консоль...");
    myCircle.radius = -3.5;