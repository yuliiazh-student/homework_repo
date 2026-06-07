const toast = {
    style: {
    position: 'fixed',
    left: '20px',
    top: '20px',
    color: '#fff',
    borderRadius: '5px',
    padding: '10px',
    maxWidth: '300px',
    zIndex: '1000'
    },
    colors: {
    success: 'green',
    error: 'tomato',
    warning: 'orange',
    info:'blue'
    },
    show(text, type) {
        /*let styles = ''
    for(let prop in this.style){
    styles+=`${prop}:${this.style[prop]};`
        }
        styles+=`background-color: ${this.colors[type]};`
        const html = `<div id="my-toast" class="my-toast ${type}" style="${styles}">
            ${text}
        </div>`*/

       const div = document.createElement('div')
       div.id = 'my-toast'
       div.innerText = text
       for(let prop in this.style){
       div.style[prop] = this.style[prop]
       }
       div.style.backgroundColor = this.colors[type]

        
        if(document.getElementById('my-toast')){
            document.getElementById('my-toast').remove()
        }
        
        //document.body.insertAdjacentHTML('afterbegin', html)
        document.body.prepend(div)
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

