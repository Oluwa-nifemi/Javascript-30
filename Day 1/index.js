window.addEventListener('keydown',(e) => {
    const element = document.querySelector(`div[data-key = '${e.keyCode}']`);
    if(element){
        element.classList.add('playing');
        audio = document.querySelector(`div[data-key = '${e.keyCode}'] audio`);
        audio.play()
        setTimeout(() => {
            element.classList.remove('playing');
        },250)
    }
})