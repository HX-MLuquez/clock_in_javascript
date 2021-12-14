
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

(function () {
    var timeNuclear = function clockNuclear() {
        setInterval(function () {
            const pTime = document.getElementById("clock_nuclear_seg");
            const itemCero = document.getElementById("include_cero_seg");
            if (pTime.innerText < 9 ) {
                itemCero.innerText = "0";
             } else {
                itemCero.innerText = "";
            }
            pTime.textContent = pTime.textContent.replace(/\d+/, function (digit) { // replace the digit with the result of the function  con expresiones regulares
                return (parseInt(digit, 10) + 1) % 60;
            });

            console.log("queeeeeee");
        }, 1000);
        setInterval(function () {
            const pTime = document.getElementById("clock_nuclear_min");
            const itemCero = document.getElementById("include_cero_min");
            if (pTime.innerText < 9) {
                itemCero.innerText = "0";
            } else {
                itemCero.innerText = "";
            }
            pTime.textContent = pTime.textContent.replace(/\d+/, function (digit) {
                return (parseInt(digit, 10) + 1) % 60;
            });

            console.log("queeeeeee");
        }, 60000);
        setInterval(function () {
            const pTime = document.getElementById("clock_nuclear_hour");
            const itemCero = document.getElementById("include_cero_hour");
            if (pTime.innerText < 9) {
                itemCero.innerText = "0";
            } else {
                itemCero.innerText = "";
            }
            pTime.textContent = pTime.textContent.replace(/\d+/, function (digit) {
                return (parseInt(digit, 10) + 1) % 60;
            });
            console.log("quuaaaaaaaaaaaaaaa");
        }, 3600000);
    }
    timeNuclear();
    // setInterval(timeClock, 1000);
})();
