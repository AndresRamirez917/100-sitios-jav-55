function frml(){
const formulario = document.createRange().createContextualFragment(`
    
   <div class="contact-form">
                    <h2>contact us</h2>
                    <form action="">
                        <div class="form-group-flex">
                            <div class="form-group">
                                <label for="">Nombre</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="text" class="form-control">
                            </div>
                        </div>  
                        <div class="form-group">
                            <label for="">Mensaje</label>
                            <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                        <button class="btn button-2">send</button>
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