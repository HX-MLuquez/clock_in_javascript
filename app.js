
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



function enterTime(cancel) {
    if (cancel == 0) {
        console.log("Cancel");
        
    } else {
        let hh = document.getElementById("hh").value;
        let mm = document.getElementById("mm").value;
        let ss = document.getElementById("ss").value;
        // console.log('sssss    esssss_______', ss);

        var timeNuclear = function () {
            setInterval(function () {
                console.log('sssss    esssss_______', ss);
                const pTime = document.getElementById("clock_nuclear_seg");
                const itemCero = document.getElementById("include_cero_seg");
                pTime.textContent = pTime.textContent.replace(/\d+/, function (digit) { // replace the digit with the result of the function  con expresiones regulares
                    let results_seg = (parseInt(digit, 10) + 1) % 60;
                    results_seg = results_seg * ss;
                    ss = 1;
                    return results_seg > 9 ? results_seg : '0' + results_seg;
                });
            }, 1000);
            setInterval(function () {
                const pTime = document.getElementById("clock_nuclear_min");
                const itemCero = document.getElementById("include_cero_min");
                pTime.textContent = pTime.textContent.replace(/\d+/, function (digit) {
                    let results_min = (parseInt(digit, 10) + 1) % 60;
                    return results_min > 9 ? results_min : '0' + results_min;
                });

                console.log("queeeeeee");
            }, 60000);
            setInterval(function () {
                const pTime = document.getElementById("clock_nuclear_hour");
                const itemCero = document.getElementById("include_cero_hour");
                pTime.textContent = pTime.textContent.replace(/\d+/, function (digit) {
                    let results_hour = (parseInt(digit, 10) + 1) % 24;
                    return results_hour > 9 ? results_hour : '0' + results_hour;
                });
                console.log("quuaaaaaaaaaaaaaaa");
            }, 3600000);
        }
        timeNuclear();
        // setInterval(timeClock, 1000);

    }
}

// function resetTime() {
//     // clearInterval(enterTime());
//     const pTime = document.getElementById("clock_nuclear_seg");
//     const itemCero = document.getElementById("include_cero_seg");
//     pTime.textContent = "00";
//     const pTime2 = document.getElementById("clock_nuclear_min");
//     const itemCero2 = document.getElementById("include_cero_min");
//     pTime2.textContent = "00";
//     const pTime3 = document.getElementById("clock_nuclear_hour");
//     const itemCero3 = document.getElementById("include_cero_hour");
//     pTime3.textContent = "00";
// }