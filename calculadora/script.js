    let display = document.getElementById("display");
    let numeroTela = "";
    let operadorTela = "";
    let contadorParenteses = 0; 

    const telaMax = 15; 

    function appendNumber(value){

        if (numeroTela.length >= telaMax) return;


        numeroTela += value
        updateDisplay();

    }

    function appendOperator(operator){

        if(numeroTela === "" && operator !== "-") return

        const ultSinal = numeroTela.slice(-1);

        if (["+", "*", "/"].includes(ultSinal)) return;

    numeroTela += operator;
    updateDisplay();

    }

    function calculate() {

        while (contadorParenteses > 0) {
                numeroTela += ")";
                contadorParenteses--;

        }

        try {
            let result = eval(numeroTela)
            if(!Number.isInteger(result)){

                result = result.toFixed(2)
            }
            numeroTela = result;
    updateDisplay();


            } catch(error) {

                display.numeroTela = "pode nao man";
                numeroTela = "";

        }
    }

    function clearDisplay() {

        numeroTela = "";
        contadorParenteses = 0
        
        updateDisplay();

    }





    function appendParenteses() {

        const ultCarac = numeroTela.slice(-1);
        if (numeroTela === "" || ["+", "*", "/", "("].includes(ultCarac)) {
            numeroTela += "(";
            contadorParenteses++;
        } 
        
        else if (contadorParenteses > 0 && (/[0-9)]/.test(ultCarac))) {
            numeroTela += ")";
            contadorParenteses--;
        }

        updateDisplay();

    }

    function updateDisplay() {

         display.textContent = numeroTela;
        let fontSize = 40; 
        display.style.fontSize = fontSize + "px";

        while (display.scrollWidth > display.clientWidth && fontSize > 10) {
            fontSize--;
            display.style.fontSize = fontSize + "px";
        }
    }

    function back() {
    if (numeroTela.length === 0) return;


    const ultimo = numeroTela.slice(-1);
    if (ultimo === "(") {
        contadorParenteses--;
    } else if (ultimo === ")") {
        contadorParenteses++;
    }


    numeroTela = numeroTela.slice(0, -1);
    updateDisplay();
}


//nota 1  substituir resultado ao clicar em algum numero e dar continuidade às operações

//nota 2 n deixar % se repetir!

// corrigir bugs no geral 



