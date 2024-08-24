var user = "cassioestevaops@gmail.com"
var pass = "123456"

function login (userInput, passInput) {
    if (userInput == user && passInput == pass){
        return "Login feito";
    } 
        
        else {
            return "Login inválido";
        }
}
var resultado = login (userInput, passInput);
