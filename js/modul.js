export function alerta(nombre) {
    if(Number(nombre)){
        swal({
            title: `Solo se permiten nombre alfanuméricos`,
            icon: "warning",
        })
        return false;
    }
    if(nombre.trim() == ""){
        swal({
            title: `Quién erés?`,
            icon: "warning",
        })
        return false;
    } if(nombre !== "" ) {
        swal({
            title: `Hola ${nombre}`,
            icon: "success",
        })
        return true;
    }
}

export function alerta2(){
    console.log('%cMensaje Rojo', ' background: linear-gradient(blue, pink); font-size: 2rem;')
}

export function alerta3(){
    console.log("Esta no se debería importar")
}

export function limpiaInput(input){
    input.value = ""
}




