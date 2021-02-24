var esito;
var utente=email;
document.getElementById("invia").addEventListener("click", function () {
    var utente=document.getElementById("email").value;
    
var mail= false;

for (var i=0; i < iscritti.length; i++) {
    console.log (iscritti[i]);

    if (utente==iscritti[i]){
        mail= true;
        console.log(mail);
        document.getElementById("esito").innerHTML=utente+(" ")+(" e-mail registrata puoi accedere a LeoBOOK");
    }
    else{
        mail= false;
        document.getElementById("esito").innerHTML=utente+(" ")+(" e-mail non registrata NON puoi accedere a LeoBOOK");

    }
}

}
);

var iscritti= ["marco-booh@alice.it","giacomo_if@alice.com",
"sergio-gmail.com", "gianni-mah@yahoo.it"]
console.log(iscritti)


