
let seconds = document.querySelector('#second');
let minutes = document.querySelector('#minute');
let hours = document.querySelector('#hour');
deg = 6;

function secondRotation() {
setInterval(function() {
    
    seconds.style.transform = 'rotate(' +deg + "deg)";
    deg=(deg +6) % 360
}, 1000);
}
secondRotation();

function minuteRotation() {
    setInterval(function() {
        minutes.style.transform = 'rotate(' +deg + "deg)";
            deg=(deg +6) % 360 
    }, 60000);
} minuteRotation();


// function secondRotation(secTick) {
//       
//         seconds.rotate(10)
//        return seconds;
//         setInterval(10000};
//     }

    
    
    
    
    