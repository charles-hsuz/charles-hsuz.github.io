const card = document.querySelector('#card-music'), 
    wrapper = card.querySelector('#card-wrapper'), 
    button = document.querySelector('#card-music #button-music'),
    closeButton = document.querySelector("#music-close-button")
    
var cardApi = null, moveable = false, isOpen = false

function openMusic(){
    document.querySelector('#card-music').classList.remove('hide')
    closeButton.classList.remove('hide')
    cardApi = document.querySelector("#card-music meting-js").aplayer
    isOpen = true
}

function closeMusic(){
    document.querySelector('#card-music').classList.add('hide')
    closeButton.classList.add('hide')
    document.querySelector("#card-front meting-js").aplayer.list.hide()
    cardApi = null
    isOpen = false
}

function skipMusic(x){
    if(cardApi != null){
        if(x > 0) for(let i = 0; i < x; i++) cardApi.skipForward()
        else for(let i = 0; i > x; i--) cardApi.skipBack()
    }
    else {
        cardApi = document.querySelector("#card-music meting-js").aplayer
        skipMusic(x)
        cardApi = null
    }
}

function listToggle(){
    if(cardApi != null) cardApi.list.toggle()
    else {
        openMusic()
        listToggle()
    }
}

function isplaying(){
    return cardApi != null && !(cardApi.audio.paused)
}

function moveCard(e) {
    let x = e.offsetX, y = e.offsetY
    moveable = true
    document.addEventListener('mousemove', (e) => {
        button.style.left = '95px'
        button.style.top = '135px'
        let rest_h = window.innerHeight - card.offsetHeight, rest_w = window.innerWidth - card.offsetWidth
        let _left = e.clientX - x, _top = e.clientY - y
        if(moveable) {
            card.style.top = Math.min(Math.max(0, _top), rest_h) + 'px', card.style.left = Math.min(Math.max(0, _left), rest_w) + 'px'
        }
    })
} 

button.addEventListener("click", openMusic)
closeButton.addEventListener('click', closeMusic)

wrapper.addEventListener('mousedown', (e) => {
    document.body.classList.add('no-select')
    moveCard(e)
    document.addEventListener('mouseup', () => {
        moveable = false
        document.body.classList.remove('no-select')
    })
})

hsu.KCadd('Shift', 'm', () => {
    isOpen ? closeMusic() : openMusic()
})

window.addEventListener('pjax:complete', closeMusic)





