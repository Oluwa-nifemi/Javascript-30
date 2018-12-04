if(!(navigator.userAgent.toLowerCase().includes('windows') || navigator.userAgent.toLowerCase().includes('macintosh') || navigator.userAgent.toLowerCase().includes('linux'))){
    window.addEventListener('keydown',(e) => {
        const element = document.querySelector(`div[data-key = '${e.keyCode}']`);
        if(element){
            element.classList.add('playing');
            const audio = document.querySelector(`div[data-key = '${e.keyCode}'] audio`);
            audio.play()
            setTimeout(() => {
                element.classList.remove('playing');
            },250)
            audio.currentTime = 0;
        }
    })
}else{
    document.querySelectorAll('div.key').forEach((e) => {
        e.addEventListener('click',(e) => { 
            const paths = e.path;
            let element;
            let key = 0;
            paths.forEach((e) => {
                key = key === 0 && e.dataset && e.dataset.key ? e.dataset.key : key;
                if(e.dataset && e.dataset.key){
                    element = e;
                }
            })
            const audio = document.querySelector(`div[data-key = '${key}'] audio`);
            element.classList.add('playing');
            audio.play()
            setTimeout(() => {
                element.classList.remove('playing');
            },250)
        })
    })
}
