const fig1 = new Figure(100, 200, 'lightgreen')
const fig2 = new Figure(300, 300, 'blue')
fig1.draw()
fig2.draw()

const circle1 = new Circle(50, 'yellow');
circle1.draw();


console.log(fig1);
console.log(fig2);

console.log(circle1);

console.log("--- ПЕРЕВІРКА КОЛА ---");
console.log(`Поточний радіус: ${circle1.radius}px`); 
console.log(`Поточний діаметр: ${circle1.diameter}px`);
console.log(`Площа кола: ${circle1.getArea().toFixed(2)}px²`); 
console.log(`Довжина кола: ${circle1.getLength().toFixed(2)}px`);

console.log("--- ПЕРЕВІРКА ЗМІНИ РОЗМІРУ ---");
circle1.radius = 100; 
console.log(`Новий радіус: ${circle1.radius}px`); 
console.log(`Новий діаметр: ${circle1.diameter}px`); 
console.log(`Площа кола: ${circle1.getArea().toFixed(2)}px²`); 
console.log(`Довжина кола: ${circle1.getLength().toFixed(2)}px`);

console.log("--- ПЕРЕВІРКА ЗАХИСТУ ВІД ПОМИЛОК ---");
circle1.radius = -20; 
console.log(`Радіус після невдалої спроби: ${circle1.radius}px`);