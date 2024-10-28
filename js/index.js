function frml(){
const formulario = document.createRange().createContextualFragment(`
    
   <div class="contact-form">
                    <h2>contact us</h2>
                    <form action="">
                        <div class="form-group-flex">
                            <div class="form-group">
                                <label for="">Nombre</label>
                                <input id="nombre" type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Email</label>
                                <input id="email" type="text" class="form-control">
                            </div>
                        </div>  
                        <div class="form-group">
                            <label for="">Mensaje</label>
                            <textarea name="" id="mensaje" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                        <button id="btn-validar" class="btn button-2">send</button>
                    </form>
                </div>
                <div class="contact-social">
                    <h2>follow us</h2>
                    <img src="/images/bxl-facebook-circle.svg" alt="">
                    <img src="/images/bxl-instagram.svg" alt="">
                    <img src="/images/bxl-twitter.svg" alt="">
                    <img src="/images/bxl-youtube.svg" alt="">
                </div>
    
    `)
    const contact_row = document.querySelector('.contact-row');
    contact_row.append(formulario);
}

frml()
const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [nombre, email, mensaje];
    const messageArr = ["Nombre", "Email", "Mensaje"];
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    const emailValido = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
    }
    if(!emailValido(email)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
         return true;
}
