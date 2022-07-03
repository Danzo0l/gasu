function openText() {
    let text = document.getElementById('aside')
    let button = document.getElementById('sidebar')

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
openText()

console.log('JS Loaded')
