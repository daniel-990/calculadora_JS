const init = () => {

    //numeros y botones
    const numeros = document.getElementsByClassName("btn-calculadora");
    //operaciones
    const igual = document.getElementById("igual");
    const borrar = document.getElementById("borrar");

    //resultado
    const resultado = document.getElementById("resultado");
    const alerta = document.getElementById("alerta");

    console.log(numeros);

    //se crea un bucle for por el que recorro todo el contenido de los nodos que tengan la clase .btn-calculadora en html
    for (let i = 0; i < numeros.length; i++){
        const elemNumero = numeros[i].attributes[2].nodeValue;
        //funcion que ejecuta el evento para tener los value
        const numeros_ = () => resultado.value += document.getElementById(`dato_${elemNumero}`).value;
        //click
        document.getElementById(`dato_${elemNumero}`).addEventListener('click', numeros_);
    }

    //resultado
    const operacionesMatematicas = () => {
        if(resultado.value == ""){
            alerta.innerHTML = "sin valores que operar";
        }else{
            console.log(eval(resultado.value));
            resultado.value = eval(resultado.value);
        }
    }

    //resetear la calculadora
    const limpiar = () => {
        resultado.value = "";
    }
    igual.addEventListener('click', operacionesMatematicas);
    borrar.addEventListener('click', limpiar);
}
init();