function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;

    let resultado;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultado = "Error: División por cero";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = "Operación inválida";
    }

    document.getElementById('resultado').textContent = resultado;
}