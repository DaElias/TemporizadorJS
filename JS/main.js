/* Const and Var */
const bodyBackground = document.body,
    activateAlarma = "activate",
    displayTime = document.getElementById("temporizador"),
    imputMinutos = document.getElementById("getMinutos");

const info = {
    chekInterval: true,
    second: 0,
    minute: 0,
    hour: 0
};
let setIntervalID;





/* Start */
document.querySelector("#btn_Start").addEventListener("click", () => {
    if (info.chekInterval&&imputMinutos.value!="") { //&&imputMinutos.value!=""  !!! Important
        info.chekInterval = false;
        info.minute = imputMinutos.value;
        console.log(info.minute);
        setIntervalID = setInterval(() => {
            displayTime.innerHTML = printTimeTemporizador();
            info.second -= 1;
            //console.log(info.second);
            //displayTime.innerHTML = info.second;
        }, 1000);





    }
});

/* Reset  */
document.querySelector("#btn_Reset").addEventListener("click", () => {
    finTimeset();
    info.chekInterval = true;
    info.second = 0;
    info.activate = false;
    displayTime.innerHTML = `00:00`;
    bodyBackground.classList.remove(activateAlarma);

});

const printTimeTemporizador = () => {
    //console.log(info.minute);
    if (info.second == 0 && info.minute == 0 && info.hour == 0) {
        finTimeset();
        document.body.classList.add("activate");
        //console.log("s-> ", info.second);
        return `00:00`;
    }


    if (info.second <= 0 && info.minute != 0) {
        info.second = 59;
        if (info.minute != 0) {
            info.minute -= 1;
        }
    }

    //let hour = info.hour < 10 ? `0${info.hour}` : info.hour;
    let minute = info.minute < 10 ? `0${info.minute}` : info.minute;
    let second = info.second < 10 ? `0${info.second}` : info.second;
    console.log(info.minute);
    //return `${info.hour<10? `0${info.hour}`:`${info.hour}`}:${info.minute}:${info.second}`;
    return `${minute}:${second}`

}
const printTimeCronometro = () => {
    info.second += 1;

    if (info.second == 59) {
        info.second = 0;
        info.minute += 1;
    }
    if (info.minute == 59) {
        info.minute = 0;
        info.hour += 1;
    }

    let hour = info.hour < 10 ? `0${info.hour}` : info.hour;
    let minute = info.minute < 10 ? `0${info.minute}` : info.minute;
    let second = info.second < 10 ? `0${info.second}` : info.second;
    //return `${info.hour<10? `0${info.hour}`:`${info.hour}`}:${info.minute}:${info.second}`;
    return `${hour}:${minute}:${second}`
}

const finTimeset = () => {
    clearInterval(setIntervalID);

}