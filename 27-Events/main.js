const textView = document.getElementById('text-view');
const textEdit = document.getElementById('text-edit');

window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.code === 'KeyE') {
        e.preventDefault(); 
        if (!textView.hasAttribute('hidden')) {
            textEdit.value = textView.innerText;
            textView.setAttribute('hidden', '');
            textEdit.removeAttribute('hidden');
            textEdit.focus();
        }
    }
    
    if (e.ctrlKey && e.code === 'KeyS') {
        e.preventDefault(); 
        if (!textEdit.hasAttribute('hidden')) {
            textView.innerText = textEdit.value;
            textEdit.setAttribute('hidden', '');
            textView.removeAttribute('hidden');
        }
    }
});

const table = document.getElementById('sortable-table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('th');

headers.forEach((header, index) => {
    header.addEventListener('click', () => {
        const type = header.getAttribute('data-type');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        rows.sort((rowA, rowB) => {
            const cellA = rowA.children[index].innerText;
            const cellB = rowB.children[index].innerText;
            
            if (type === 'number') {
                return Number(cellA) - Number(cellB);
            } else {
                return cellA.localeCompare(cellB, 'uk');
            }
        });
        
        tbody.append(...rows);
    });
});


const resizable = document.getElementById('resizable');
const resizer = document.getElementById('resizer');

resizer.addEventListener('mousedown', (e) => {
    e.preventDefault();
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
});

function resize(e) {
    const rect = resizable.getBoundingClientRect();
    resizable.style.width = (e.clientX - rect.left) + 'px';
    resizable.style.height = (e.clientY - rect.top) + 'px';
}

function stopResize() {
    window.removeEventListener('mousemove', resize);
    window.removeEventListener('mouseup', stopResize);
}

