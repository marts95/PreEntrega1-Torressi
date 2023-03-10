let mj1 = "¡Buenos días! \n"
let mj2 = "Un gusto que visite nuestro sitio."
let seguir = true

//debugger

alert(mj1 + mj2) 
const mjBienvenida = "Quieres conocer el precio de: \n" +
                        "a) Productos \n" +
                        "b) Envios a domicilio \n"

const mjInicial = "Ingresa el número del producto de su interes: \n" +
                       "1) Facturas \n" +
                       "2) Tortas \n" +
                       "3) Alfajores \n" +
                       "4) Bizcochos \n" +
                       "5) Cupcakes \n"

const mjEnvio = "Ingresa el número de la localidad a la cual se hara el envio: \n" +
                        "1) La Banda \n" +
                        "2) Santiago Capital \n" +
                        "3) Clodomira \n"
                        

function consultarPrecios() {
    let eleccion = prompt(mjBienvenida).toLowerCase().trim()

    if (eleccion !== "a" && eleccion !== "b"){
        alert("Código incorrecto. Ingrese un número válido")
    } else{
        switch(eleccion){
            case "a":{
                let eleccion1 = prompt(mjInicial).trim()

                if (eleccion1 !== "1" && eleccion1 !== "2" && eleccion1 !== "3" && eleccion1 !== "4" && eleccion1 !== "5"){
                    alert("Código incorrecto. Ingrese un número válido")
                } else{
                    switch(eleccion1){
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
                            alert("Los cupcakes cuestan $2500 la docena o $250 cada uno")
                            break
                        default: 
                            console.error("Algo no funcinó bien. Este mensaje no lo debería ver.")
                    }
                }
            }
            return
            case "b":{
                let eleccion2 = prompt(mjEnvio).trim()

                if (eleccion2 !== "1" && eleccion2 !== "2" && eleccion2 !== "3"){
                    alert("Código incorrecto. Ingrese un número válido")
                } else{
                    switch(eleccion2){
                        case "1":
                            alert("El envio a domicilio a La Banda cuesta $350.")
                            break
                        case "2":
                            alert("El envio a domicilio a Santiago Capital cuesta $700.")
                            break
                        case "3":
                            alert("El envio a domicilio a Clodomira cuesta $1000.")
                            break
                        default: 
                            console.error("Algo no funcinó bien. Este mensaje no lo debería ver.")
                    }
                }
            }
            
            //default:
                //console.error("Algo no funcinó bien. Este mensaje no lo debería ver.")
            //return

        }
    }
}

function inicioConsulta(){
    while(seguir) {
        consultarPrecios()
        seguir = confirm("¿Quiere consultar otro precio?")
    }
}