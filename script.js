let valueDisplays=document.querySelectorAll(".num");
let interval=10000;

valueDisplays.forEach((valueDisplays) => {
    let startValue=0;
    let endValue=parseInt(valueDisplays.getAttribute("data-val"));
    let duration=Math.floor(interval /endValue);
    let counter=setInterval(function(){
        startValue+=1;
        valueDisplays.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    }, duration);

});

/*const sr=scrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
});
sr.reveal('.text',{delay: 200, origin: 'top'});
sr.reveal('.heading',{delay: 200, origin: 'top'});*/
