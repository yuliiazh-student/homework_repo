const toast = {
    style: {
        position: 'fixed',
        left: '20px',
        top: '20px',
        color: '#fff',
        'border-radius': '5px',
        padding: '10px',
        'max-width': '300px',
        'z-index': '1000',
    },
    colors: {
    success: 'green',
    error: 'tomato',
    warning: 'orange',
    info:'blue'
    },
    show(text, type) {
        let styles = ''
    for(let prop in this.style){
    styles+=`${prop}:${this.style[prop]};`
        }
        styles+=`background-color: ${this.colors[type]};`
        const html = `<div id="my-toast" class="my-toast ${type}" style="${styles}">
            ${text}
        </div>`
        
        if(document.getElementById('my-toast')){
            document.getElementById('my-toast').remove()
        }
        
        document.body.insertAdjacentHTML('afterbegin', html)
        setTimeout(() => {
            document.getElementById('my-toast').remove()
        }, 3000)
    },
    init() {
        for (let type in this.colors) {
            this[type] = function (text) {
                this.show(text, type)
            }
        }
    }
}

toast.init()
