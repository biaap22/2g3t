escrever = (msg) => alert(msg);
soma = (a,b) => a + b; 

sub = (a,b) => a - b; 

div = (a,b) => a / b; 

mult = (a,b) => a * b; 

raiz = a => Math.sqrt(a);

eq2grau = (a,b,c) => {
    if(a < 0) return "Não é uma equação do 2° grau";
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if(delta < 0) return "Não possui raiz real.";
    if(delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 " + div(soma(-b,raiz(delta)),mult(2,a)) +
           "x2 " + div(sub(-b,raiz(delta)),mult(2,a));


}

let a = "";
let b = "";
let op = "";
let valor = 0;
let tem_ponto = false;
let desligada = false;
function zerar(){
    if (desligada) return;
    a = "";
    b = "";
    op="";
    valor = "0";
    tem_ponto = false;
    mostrar_resultado (0);
}
function desligar (){
    if(desligada) {
    desligada = false;
    zerar();
}else{
    zerar();
    desligada = true;
    mostrar_resultado("");
}}
return desligada;

function mostra_resultado(result){
    if (deligada) return;
    document.getElementById("resultado").value = result;
}

function operacao(nova_op){
    op = nova_op;
    a = valor;
    valor = "";
}

function calcula(){
    if(op != ""){
        b = valor;
        valor = "";
        if(op == "soma") mostra_resultado(soma(a,b));
        if(op == "sub") mostra_resultado(sub(a,b));
        if(op == "div") mostra_resultado(div(a,b));
        if(op == "mult") mostra_resultado(mult(a,b));
        a = " ";
        b= " ";
        tem_ponto = false;
    }
}

function digitando (tecla){
    if(tecla == "."){
        if(!tem_ponto){
            valor = valor + tecla;
            mostra_resultado(valor);
            tem_ponto = true;
        }
        return;
    }
    valor = valor + tecla;
    mostra_resultado(valor);

}
