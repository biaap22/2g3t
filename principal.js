escrever = (msg) => alert (msg);
soma = (a,b) => a + b;
sub  = (a,b) => a - b;
div  = (a,b) => a / b;
mult = (a,b) => a * b;
raiz = a => Math.sqrt(a);
eq2grau = (a,b,c) => {
    if(a == 0) return " Não é uma equeção de Segundo Grau.";
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if(delta < 0) return "Não possui raiz real.";
    if (delta == 0) return "x1 = x2 = " + div (-b,mult(2,a));
    return "x1 " + div(soma(-b,raiz(delta)),mult(2,a)) + 
    "x2 " + div(sub(-b,raiz(delta)),mult(2,a));
}
let a = "";
let b = "";
let op = "";
let resultado  = 0;

function digtando (tecla){
    a =+ tecla 
    alert(tecla);
}

