const fig1 = new Figure(100, 200, 'lightgreen')
const fig2 = new Figure(300, 300, 'blue')
// fig1.draw()
// fig2.draw()

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

const radiusInput = document.getElementById('radiusInput');
radiusInput.addEventListener('input', (event) => {
  const userValue = Number(event.target.value); 
  circle1.radius = userValue; 
  console.log(`Новий радіус circle1: ${circle1.radius}px, Нова площа: ${circle1.getArea().toFixed(2)}px²`);
});



console.log("--- Тест синього маркера з 10% чорнила ---");
const blueMarker = new Marker('blue', 10);
blueMarker.print("Привіт! Це текст для перевірки чорнила."); 
console.log(`Залишок чорнила в синьому маркері: ${blueMarker.ink}%`); 

console.log("\n--- Тест заправленого зеленого маркера ---");
const greenMarker = new RefillableMarker('green', 5); 

greenMarker.print("Короткий текст"); 
console.log(`Залишок перед заправкою: ${greenMarker.ink}%`); 

greenMarker.refill(); 
console.log(`Залишок після заправки: ${greenMarker.ink}%`); 

greenMarker.print("Маркер заправлений! Тепер чорнила точно вистачить на все повідомлення!"); 



const bankEmployees = [
  new Employee("Олексій", "Менеджер", 25000),
  new Employee("Марія", "Касир", 18000),
  new Employee("Дмитро", "Аналітик", 35000),
  new Employee("Олена", "Директор відділення", 50000)
];

const tableGenerator = new EmpTable(bankEmployees);
const tableHtml = tableGenerator.getHtml();
document.body.insertAdjacentHTML('beforeend', tableHtml);

