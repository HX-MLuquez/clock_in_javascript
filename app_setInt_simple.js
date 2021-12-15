
function saludar() {
    // alert("Hola");
    console.log("Hola");
    const name = document.getElementById("name").value;
    const saludo = armarSaludo(name);
    mostrarSaludo(saludo);
};

function mostrarSaludo(saludo) {
    const saludoDiv = document.getElementById("saludo");
    saludoDiv.innerText = saludo;
};

function armarSaludo(name) {
    const saludo = "Hola " + name + "!!!";
    return saludo;

};
(function () {
    var timeClock = function clockSimple() {
        const time = new Date();
        const pClock = document.getElementById("clock_simple");
        const date = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        pClock.innerText = date;
    }
    timeClock();
    // setInterval(timeClock, 1000);
})();



// ------>>>>>  MI RELOJ NUCLEAR <<<<<<<------
// ------>>>>>  MY ROLEX NUCLEAR <<<<<<<------

let time;
let cancel = 1;

function breackTime(cancel) {
    cancel = 0;
    if (cancel == 0) {
        console.log("Cancelado");
        document.getElementById("hh").value = 00;
        document.getElementById("mm").value = 00;
        document.getElementById("ss").value = 00;
        document.getElementById("clock_nuclear_seg").innerText = "00";
        document.getElementById("clock_nuclear_min").innerText = "00";
        document.getElementById("clock_nuclear_hour").innerText = "00";
        return clearInterval(time);
    }
};

function setInt_simple() {

    // if (cancel == 1) {
    let hh = document.getElementById("hh").value;
    let mm = document.getElementById("mm").value;
    let ss = document.getElementById("ss").value;
    const pSeg = document.getElementById("clock_nuclear_seg");
    // const itemCero_seg = document.getElementById("include_cero_seg");
    let count = ss;
    console.log('eeeee', count);
    pSeg.innerText = ("0" + count).slice(-2);

    const pMin = document.getElementById("clock_nuclear_min");
    // const itemCero_min = document.getElementById("include_cero_min");
    let count_min = mm;
    pMin.innerText = ("0" + count_min).slice(-2);
    

    const pHour = document.getElementById("clock_nuclear_hour");
    // const itemCero = document.getElementById("include_cero_seg");
    let count_hour = hh;
    pHour.innerText = ("0" + count_hour).slice(-2);
    

    time = setInterval(function () {
        if (count < 59) {
            count = parseInt(count) + 1;
            console.log(count);
            count > 9 ? pSeg.innerText = count : pSeg.innerText = "0" + count;
        }
        else if (count == 59) {
            count = 0;
            pSeg.innerText = "0" + count;
            if (count == 0 && count_min < 59) {
                count_min = parseInt(count_min) + 1;
                console.log(count_min);
                count_min > 9 ? pMin.innerText = count_min : pMin.innerText = "0" + count_min;
            } else if (count_min == 59) {
                count_min = 0;
                pMin.innerText = "0" + count_min;
                if (count_min == 0 && count_hour < 23) {
                    count_hour = parseInt(count_hour) + 1;
                    console.log(count_hour);
                    count_hour > 9 ? pHour.innerText = count_hour : pHour.innerText = "0" + count_hour;
                } else if (count_hour == 59) {
                    count_hour = 0;
                    pHour.innerText = "0" + count_hour;
                }
            }
        }

    }, 1000);
};

