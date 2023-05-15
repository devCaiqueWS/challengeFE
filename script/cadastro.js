function validarEmail() {
    var emailInput = document.getElementById("email");
    var span = document.getElementById("spanEmail");
    var email = emailInput.value;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
;
    if(regex.test(email)) 
    {
    } 
    else 
    {
        emailInput.style.border = '2px solid #e63636'; 
        span.style.display = 'block';
        span.style.fontSize = '12px';
        span.style.color = '#e63636';
        span.style.textAlign = 'center';
        span.style.marginBottom = '4px';
    }
}

function validarNome(){
    var nomeInput = document.getElementById("nome");
    var nome = nomeInput.value.length;
    var span = document.getElementById("spanNome");


    if(nome <= 3)
    {
        nomeInput.style.border = '2px solid #e63636'; 
        span.style.display = 'block';
        span.style.fontSize = '12px';
        span.style.color = '#e63636';
        span.style.textAlign = 'center';
        span.style.marginBottom = '4px';
    } 
    else {
        console.log('Nome correto')
    }
}

//corrigir validar nome

