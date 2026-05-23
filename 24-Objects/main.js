const uaTranslations = {
  manufacturer: 'Марка',
  model: 'Модель',
  color: 'Колір',
  year: 'Рік випуску',
  averageSpeed: 'Середня швидкість',
  fuelTankCapacity: 'Об\'єм паливного баку',
  fuelConsumption: 'Середній розхід',
  drivers: 'Водії'
};

const car = {
  info: {
    manufacturer: "Toyota",
    model: "Camry",
    color: "black",
    year: 2021,
    averageSpeed: 90,
    fuelTankCapacity: 60,
    fuelConsumption: 7.5,
  },
  drivers: ["Віталій", "Андрій"],
  showInfo(elId) {
    let list = '<dl>';
    for (let prop in this.info) {
      console.log(prop, this.info[prop]);
      list += `
            <dt>${uaTranslations[prop] || prop}</dt>
            <dd>${this.info[prop]}</dd>
        `;
    }
    list += `
        <dt>${uaTranslations.drivers}</dt>
        <dd>${this.drivers}</dd>
    `;
    list += '</dl>';
    document.getElementById(elId).innerHTML = list;
  },
  addDriver(driverName) {
    if (!this.checkDriver(driverName)) {
      this.drivers.push(driverName)
      //toast.success('Driver successfully added')
      return true
    } else {
      return false
    }
    //toast.error(`Driver ${driverName} already in list`)
  },
  checkDriver(driverName){
    return this.drivers.includes(driverName)
},
  calculateTrip(distance) {
        const pureTime = distance / this.info.averageSpeed;
        let restHours = Math.floor(pureTime / 4);
        if (pureTime % 4 === 0 && pureTime > 0) {
            restHours--; 
        }
        const totalTime = pureTime + restHours;
        const totalFuel = (distance * this.info.fuelConsumption) / 100;
        return {
            time: totalTime,
            fuel: totalFuel
        }
    }
}

//car.addDriver('Олексій');
//car.showInfo('info-list');

function addDriverHandler(){
    const name = document.getElementById('driverName').value
    if (name === '') return toast.error('Enter driver name')

    if(car.addDriver(name)){
        toast.success('Driver successfully added')
        if (document.getElementById('info-list')) car.showInfo('info-list')
    } else {
        toast.error(`Driver ${name} already in list`)
    }
}


function checkDriverHandler(){
    const name = document.getElementById('driverName').value
    if (name === '') return toast.error('Enter driver name')

    if(car.checkDriver(name)){
        toast.info(`Driver ${name} in list`)
    } else {
        toast.error(`Driver ${name} not in list`)
    }
}

function calculateTripHandler() {
    const distanceInput = document.getElementById('tripDistance').value;
    const distance = parseFloat(distanceInput);

    if (distanceInput === '' || isNaN(distance) || distance <= 0) {
        return toast.error('Введіть коректну відстань');
    }

    const result = car.calculateTrip(distance);
  
    const hours = Math.floor(result.time);
    const minutes = Math.round((result.time - hours) * 60);
    let timeString = '';
    
    if (hours > 0) {
        timeString += hours + ' год ';
    }
    if (minutes > 0 || hours === 0) { 
        timeString += minutes + ' хв';
    }
    toast.success('Час: ' + timeString.trim() + ', Паливо: ' + result.fuel.toFixed(2) + ' л');
}


const time2Sec = (h, m, s) => h * 3600 + m * 60 + s;
const sec2Time = (sec) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return { h, m, s };
};

const time = {
    h: 0, 
    m: 0,
    s: 0,

    showTime() {
        const hh = String(this.h).padStart(2, '0');
        const mm = String(this.m).padStart(2, '0');
        const ss = String(this.s).padStart(2, '0');
        return `${hh}:${mm}:${ss}`;
    },

    addSeconds(plusSec) {

        let totalSec = time2Sec(this.h, this.m, this.s) + plusSec;
        const secInDay = 24 * 3600;
        totalSec = ((totalSec % secInDay) + secInDay) % secInDay;
        const newTime = sec2Time(totalSec);
        this.h = newTime.h;
        this.m = newTime.m;
        this.s = newTime.s;
    },

    addMinutes(plusMin) {
        return this.addSeconds(plusMin * 60);
    },

    addHour(plusHour) {
        return this.addSeconds(plusHour * 3600);
    }
};

function showTimeHandler() {
    toast.success('Поточний час: ' + time.showTime());
}

function changeTimeHandler(type) {
    const inputId = 'input' + type.charAt(0).toUpperCase() + type.slice(1); 
    const inputVal = document.getElementById(inputId).value;
    const value = parseInt(inputVal);

    if (inputVal === '' || isNaN(value)) {
        return toast.error('Введіть коректне число');
    }

    if (type === 'seconds') time.addSeconds(value);
    if (type === 'minutes') time.addMinutes(value);
    if (type === 'hours') time.addHour(value); 

    toast.success('Час змінено! Новий час: ' + time.showTime());
    document.getElementById(inputId).value = ''; 
}



const getNod = (a, b) => b ? getNod(b, a % b) : Math.abs(a);
const fraction = {
    reduce: (f) => ({ ch: f.ch / getNod(f.ch, f.zn), zn: f.zn / getNod(f.ch, f.zn) }),
  
    add: (f1, f2) => fraction.reduce({ ch: f1.ch * f2.zn + f2.ch * f1.zn, zn: f1.zn * f2.zn }),
    sub: (f1, f2) => fraction.reduce({ ch: f1.ch * f2.zn - f2.ch * f1.zn, zn: f1.zn * f2.zn }),
    mul: (f1, f2) => fraction.reduce({ ch: f1.ch * f2.ch, zn: f1.zn * f2.zn }),
    div: (f1, f2) => fraction.reduce({ ch: f1.ch * f2.zn, zn: f1.zn * f2.ch })
};

function actionFrac(op) {
    const f1 = { ch: parseInt(document.getElementById('c1').value) || 0, zn: parseInt(document.getElementById('z1').value) || 1 };
    const f2 = { ch: parseInt(document.getElementById('c2').value) || 0, zn: parseInt(document.getElementById('z2').value) || 1 };
    
    if (f1.zn === 0 || f2.zn === 0) return toast.error('Знаменник не може бути 0');
    
    const res = fraction[op](f1, f2);
    toast.success(`Результат: ${res.ch}/${res.zn}`);
}






