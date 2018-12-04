//Check whether user is using phone or laptop via OS
if(navigator.userAgent.toLowerCase().includes('windows') || navigator.userAgent.toLowerCase().includes('macintosh') || navigator.userAgent.toLowerCase().includes('linux')){
//If phone listen for keypress
    window.addEventListener('keydown',(e) => {
        //Select element that matches the keypressed
        const element = document.querySelector(`div[data-key = '${e.keyCode}']`);
        if(element){
            //If element exists add classlist playing it for animation and select audio
            element.classList.add('playing');
            const audio = document.querySelector(`div[data-key = '${e.keyCode}'] audio`);
            //Start audio
            audio.play()
            //Set timeout to stop animation
            setTimeout(() => {
                element.classList.remove('playing');
            },250)
            //Reset audio
            audio.currentTime = 0;
        }
    })
}else{
    //Select all divs with class of key and add event listener of click to them
    document.querySelectorAll('div.key').forEach((e) => {
        e.addEventListener('click',(e) => { 
            //Initialize path variable,key variable and element variable
            const paths = e.path;
            let element;
            let key = 0;
            /*
                Confirm whether key has been initialized
                To explain e.target selects the exact element that was clicked so if the h2 inside the div was clicked it'll select the h2 as the target and not the div we want to modify 
                So we loop through the path variable in e
            */
            for(let i = 0;i < paths.length;i++){
                //Check whether it has an index key in it's dataset array;
                key = paths[i].dataset.key ?  paths[i].dataset.key : 0;
                //Confirm whether key has been initialied if yes set element to current element in array and break out of loop
                if(key!== 0){
                    element = paths[i];
                    break;
                }
            }
            //Select audio using key gotten from path variable
            const audio = document.querySelector(`div[data-key = '${key}'] audio`);
            //Add playing to class list
            element.classList.add('playing');
            //Play audio
            audio.play()
            //
           //Set timeout to stop animation
            setTimeout(() => {
                element.classList.remove('playing');
            },250)
            //Reset audio
            audio.currentTime = 0;
        })
    })
}
