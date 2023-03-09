let mj1 = "¡Buenos días! \n"
let mj2 = "Un gusto que visite nuestro sitio."
let seguir = true

alert(mj1 + mj2) 
const mjInicial = "Ingresa el número del producto de su interes: \n" +
                       "1) Facturas \n" +
                       "2) Tortas \n" +
                       "3) Alfajores \n" +
                       "4) Bizcochos \n" +
                       "5) Cupcakes \n"


function consultarPrecios() {
    let eleccion = prompt(mjInicial).trim()
    
    if (eleccion !== "1" && eleccion !== "2" && eleccion !== "3" && eleccion !== "4" && eleccion !== "5"){
        alert("Código incorrecto. Ingrese un número válido")
    } else{
        switch(eleccion){
            case "1":
                alert("Las facturas cuestan $1100 la docena o $130 cada una")
                break
            case "2":
                alert("Las tortas cuestan $1500 el kilo.")
                break
            case "3":
                alert("Los aljajores cuestan $1500 la docena o $180 cada uno")
                break
            case "4":
                alert("Los bizcochos cuestan $250 los 100 gramos")
                break
            case "5":
                alert("Los cupcakes cuestan $2500 la docena o 250 cada uno")
                break
            default: 
                console.error("Algo no funcinó bien. Este mensaje no lo debería ver.")
        }
    }
}

function inicioConsulta(){
    while(seguir) {
        consultarPrecios()
        seguir = confirm("¿Quiere saber el precio de otro producto?")
    }
}