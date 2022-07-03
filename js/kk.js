function openTextes() {
    let text = document.getElementById('fullText')
    let button = document.getElementById('showMore')

    button.addEventListener("click", function() {
        if (text.classList.contains('hidden')) {
            text.classList.remove('hidden')
            button.style.transform = 'rotate(180deg)'
            button.style.transition = '.4s'
        } else {
            text.classList.add('hidden')
            button.style.transform = 'rotate(0deg)'
            button.style.transition = '.4s'
        }
        
    })
}
openTextes()