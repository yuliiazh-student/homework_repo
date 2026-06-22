// Константи для налаштування
const API_KEY = 'ВАШ_API_KEY_З_OPENWEATHER'; // Замініть на свій ключ
const CITY = 'Kyiv'; // Вкажіть потрібне місто
const TWO_HOURS = 2 * 60 * 60 * 1000; // 2 години в мілісекундах

async function fetchAndCacheWeather() {
  const cachedData = localStorage.getItem('weatherData');
  const cachedTime = localStorage.getItem('weatherTimestamp');
  const now = Date.now();

  // КРОК 1: Перевірка localStorage (чи не минуло 2 години)
  if (cachedData && cachedTime && (now - Number(cachedTime) < TWO_HOURS)) {
    console.log('Погода взята з localStorage (актуальна)');
    return JSON.parse(cachedData);
  }

  // КРОК 2: Якщо кеш застарів, робимо новий запит до OpenWeather
  console.log('Кеш застарів або порожній. Запит до API...');
  const url = `https://openweathermap.org{CITY}&appid=${API_KEY}&units=metric&lang=uk`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Помилка сервера: ${response.status}`);

    const data = await response.json();

    // Записуємо нові дані та час їх отримання в localStorage
    localStorage.setItem('weatherData', JSON.stringify(data));
    localStorage.setItem('weatherTimestamp', now.toString());

    return data;
  } catch (error) {
    console.error('Не вдалося завантажити погоду з API:', error);
    // Якщо інтернет зник, але в кеші хоч щось є — повертаємо старі дані
    return cachedData ? JSON.parse(cachedData) : null;
  }
}

// КРОК 3: Функція для виведення даних на екран (DOM-маніпуляції)
function displayWeather(data) {
  if (!data) return;

  // Припускаємо, що у вашому HTML є блоки з такими id:
  const tempElement = document.getElementById('weather-temp');
  const descElement = document.getElementById('weather-desc');

  if (tempElement) tempElement.innerText = `${Math.round(data.main.temp)}°C`;
  if (descElement) descElement.innerText = data.weather[0].description;
}

// Головна функція ініціалізації при завантаженні сторінки
async function initWeather() {
  const weatherData = await fetchAndCacheWeather();
  displayWeather(weatherData);
}

// Запускаємо логіку після завантаження сторінки
document.addEventListener('DOMContentLoaded', initWeather);
