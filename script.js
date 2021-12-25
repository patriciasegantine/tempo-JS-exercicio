function carregar() {
    let msgDia = window.document.querySelector("#msg-dia")
    let msg = window.document.querySelector("#msg")
    var img = window.document.querySelector("#img")
    
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    
    msg.innerHTML = `It's now ${hora} hours and ${min} minutes`

    if (hora >= 0 && hora <12) {
        //Bom dia
        msgDia.innerHTML = "Good Morning!"
        img.src = "img/img-morning.png"
        document.body.style.background = "#d3bf85"

    } else if ( hora >= 12 && hora < 18) {
        //Boa tarde
        msgDia.innerHTML = " Good Afternoon!"
        img.src = "img/img-afternoon.png"
        document.body.style.background = "#947c72bb"

    } else {
        //Boa noite
        msgDia.innerHTML = "Good Evening!"
        img.src = "img/img-evening.png"
        document.body.style.background = "#515154"
    }
} 
