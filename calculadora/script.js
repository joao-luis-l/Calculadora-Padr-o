    let display = document.getElementById("display");
    let numeroTela = "";
    let contadorParenteses = 0; 
    let novoCalculo = false;

    const telaMax = 15; 

    function appendNumber(value){

        if (novoCalculo) {

            numeroTela = "";
            novoCalculo = false;
        }

        if (numeroTela.length >= telaMax) return;


        numeroTela += value
        updateDisplay();

    }

    function appendOperator(operator){

        if (novoCalculo) {

            novoCalculo = false;
        }   

        if(numeroTela === "" && operator !== "-") return

        const ultSinal = numeroTela.slice(-1);

         if (["+", "-", "*", "/", "%", "."].includes(ultSinal)) {
        numeroTela = numeroTela.slice(0, -1); 
    }


         if (operator === "%" && !/[0-9)]$/.test(ultSinal));

    
    numeroTela += operator;
    updateDisplay();

    }

    function calculate() {

        while (contadorParenteses > 0) {
                numeroTela += ")";
                contadorParenteses--;

        }

        try {

            let temp = numeroTela.replace(/[\+\-\*\/\.]$/, "");

            let expressao = temp.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

            //  \d = qualquer digito de 0 a 9  (regex)
            // g = global 

            expressao = expressao.replace(/\)(\d)/g, ")*$1");

            let result = eval(expressao)
            if(!Number.isInteger(result)){

                result = result.toFixed(2)
            }
             numeroTela = result.toString();
             updateDisplay();

             novoCalculo = true;


            } catch(error) {

                display.textContent = "pode nao man";
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
        if (numeroTela === "" || ["+", "-", "*", "/", "("].includes(ultCarac)) {
            numeroTela += "(";
            contadorParenteses++;
        } 
        
        else if (contadorParenteses > 0 && (/[0-9)%]/.test(ultCarac))) {
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






