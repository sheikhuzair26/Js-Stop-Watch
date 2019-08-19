let timer;
let ms = 0, s = 0, m = 0;


let timeConatiner = document.querySelector(".time");

let stopResetTimer = () => {
    clearInterval(timer);
    timer = false;     // to start again bcz timer previous value equal to 1; so false.
}

let getTimer = () => {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}


let startWatch = () => {

    if (!timer) {               //1 se zada bar click krne pr time laps na kre
        timer = setInterval(runTime, 10);
    }
}

let runTime = () => {

    timeConatiner.textContent = getTimer();
    ms++;

    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
}

let pause = () => {
    stopResetTimer();
}

let reset = () => {

    stopResetTimer();     //for stop point
    ms = 0;
    s = 0;
    m = 0;
    timeConatiner.textContent = getTimer();    //to get time again zero

}

let restart = () => {

    reset();       // first stop
    startWatch();  // then start

}
