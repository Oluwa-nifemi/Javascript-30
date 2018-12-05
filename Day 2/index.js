const date = new Date(); //Get current time
//Calculate angles depending on current second, minute and hour respectively
let secondangle = date.getSeconds() * 6;
let minuteangle = date.getMinutes() * 6;
let hourangle = date.getHours() * 12;
//Set angle to correct angles via css transforms
document.getElementById('second-hand').style.transform = `rotate(${secondangle}deg)`;
document.getElementById('minute-hand').style.transform = `rotate(${minuteangle}deg)`;
document.getElementById('hour-hand').style.transform = `rotate(${hourangle}deg)`;
setInterval(() => {
    //Increase second angle every second
    secondangle+= 6;
    //Change position of second div
    document.getElementById('second-hand').style.transform = `rotate(${secondangle}deg)`;
    //Check whether second is at 0 if true increase minute and change minute div position
    if(secondangle % 360 === 0){
        minuteangle += 6;
        document.getElementById('minute-hand').style.transform = `rotate(${minuteangle}deg)`;    
    }
    //Check whether minute is at 0 if true check hour and set hour div to hour position
    if(minuteangle % 360 === 0){
        hourangle = date.getHours() * 12;
        document.getElementById('hour-hand').style.transform = `rotate(${hourangle}deg)`;
    }
},1000)
