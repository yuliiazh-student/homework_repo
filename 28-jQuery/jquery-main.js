// $(document).ready() //застарілий варіант, наразі не використовується

$(function(){
    // $().slider()
    // $('select').select2()

    onPageLoad()
})

function onPageLoad(){
    $('#hamburger').on('click', (e)=>{
        $('body').toggleClass('menu-open')
    })
}

