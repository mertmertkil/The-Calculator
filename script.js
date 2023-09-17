let currentInput = " ";

function appendNumber(num){
    currentInput += num;
    updateDisplay();
}

function appendOperator(opr){
    currentInput += opr;
    updateDisplay();
}

const calculate = () => {
    try{
        const result = eval(currentInput);
        document.getElementById("display").value = result;
        currentInput = result.toString();

    }catch(error){
        document.getElementById("display").value = "Hata";
        currentInput = " ";
    }

}

const clearDisplay = () =>{
    currentInput = "";
    updateDisplay();
}

const updateDisplay = ()=>{
    document.getElementById("display").value = currentInput;
}
