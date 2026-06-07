let playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" }
];

let ol = document.createElement('ol');

playList.forEach(function(item, index) {
    let li = document.createElement('li');
    
    let number = index + 1;
    li.textContent = item.author + ': "' + item.song + '"';
    
    ol.appendChild(li);
});

document.body.appendChild(ol);



const openBtn = document.createElement('button');
openBtn.textContent = 'Відкрити';
document.body.appendChild(openBtn);

const modalOverlay = document.createElement('div');
modalOverlay.style.position = 'fixed';
modalOverlay.style.top = '0';
modalOverlay.style.left = '0';
modalOverlay.style.width = '100%';
modalOverlay.style.height = '100%';
modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
modalOverlay.style.display = 'none';
modalOverlay.style.justifyContent = 'center';
modalOverlay.style.alignItems = 'center';


const modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#fff';
modalContent.style.padding = '20px';
modalContent.style.borderRadius = '5px';
modalContent.style.textAlign = 'center';

const modalText = document.createElement('p');
modalText.textContent = 'Гарного дня!';
modalContent.appendChild(modalText);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'Закрити';
modalContent.appendChild(closeBtn);

modalOverlay.appendChild(modalContent);
document.body.appendChild(modalOverlay);

openBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

