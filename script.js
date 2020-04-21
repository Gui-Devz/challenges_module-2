const modalOverlay = document.querySelector('.modalOverlay')

const cards = document.querySelectorAll('.card')

for (const card of cards) {
    card.addEventListener('click', function(){
        const modal = document.querySelector('.modal')

        if (modal.classList.contains('maximize')) {
            modal.classList.remove('maximize')
        }
        
        modalOverlay.classList.add('active')

        const address = card.getAttribute('id')

        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${address}`
    })
}

modalOverlay.querySelector('.material-icons.close')
    .addEventListener('click', function(){
        modalOverlay.classList.remove('active')

        modalOverlay.querySelector('iframe').src = ''
    })

modalOverlay.querySelector('.material-icons.expand')
    .addEventListener('click', function(){
        const modal = document.querySelector('.modal')
        if (modal.classList.contains('maximize')) {
            modal.classList.remove('maximize')
        }else{
            modal.classList.add('maximize')
        }
    })
    