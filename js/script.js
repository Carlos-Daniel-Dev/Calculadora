/* 
11 = Ponto
12 = Igual
13 = Mais

*/

let elementosS = ""
let Painel = document.getElementById('saida')
let operadorInPainel
let fontTam = 48
let elementosN = []
let numIsResultado = false

function mostrar(v){ //colocar numero digitado na tela
    if(elementosS.length <=16){

        if(elementosS.length >=10){  //Verificar se precisa diminuir a fonte
            document.getElementById('saida').style.fontSize=`${fontTam}px`
            fontTam -= 3
        }
         //Colocar virgula
        if(v == 11){
            v = "."
        }

        // Dar resultado
        else if(v == 12){ 
    
        }
        else{
            if(numIsResultado == false){
                let s = document.getElementById('saida')
                elementosS += v
                s.innerHTML = elementosS
            }
        }

    }
}

function Addsoma(){
    let s = document.getElementById('saida')
    if(elementosS != ""){
        if(numIsResultado == false){

            elementosN.push(Number(elementosS))
        }

            elementosN.push("+")
            s.innerHTML = elementosS + "+"
            elementosS = ""
            numIsResultado = false
    }
}
function Addsubtracao(){
    let s = document.getElementById('saida')
    if(elementosS != ""){
        if(numIsResultado == false){

            elementosN.push(Number(elementosS))
        }

            elementosN.push("-")
            s.innerHTML = elementosS + "-"
            elementosS = ""
            numIsResultado = false
    }
}
function Addmultiplicacao(){
    let s = document.getElementById('saida')
    if(elementosS != ""){
        if(numIsResultado == false){

            elementosN.push(Number(elementosS))
        }

            elementosN.push("x")
            s.innerHTML = elementosS + "x"
            elementosS = ""
            numIsResultado = false
    }
}
function Adddivisao(){
    let s = document.getElementById('saida')
    if(elementosS != ""){
        if(numIsResultado == false){

            elementosN.push(Number(elementosS))
        }

            elementosN.push("/")
            s.innerHTML = elementosS + "÷"
            elementosS = ""
            numIsResultado = false
    }
}
function calcular(){
    if(elementosS != ""){
        elementosN.push(elementosS)
        while(elementosN.length != 1){
            if(elementosN[1] == "+"){
                let s = document.getElementById('saida')

                elementosN[0] = Number(elementosN[0]) + Number(elementosN[2])
                elementosS = String(elementosN[0])
        
                s.innerHTML = elementosN[0]
                elementosN.splice(2,1)
                elementosN.splice(1,1)
                numIsResultado = true
            }
            if(elementosN[1] == "-"){
                let s = document.getElementById('saida')

                elementosN[0] = Number(elementosN[0]) - Number(elementosN[2])
                elementosS = String(elementosN[0])
        
                s.innerHTML = elementosN[0]
                elementosN.splice(2,1)
                elementosN.splice(1,1)
                numIsResultado = true
            }
            if(elementosN[1] == "x"){
                let s = document.getElementById('saida')

                elementosN[0] = Number(elementosN[0]) * Number(elementosN[2])
                elementosS = String(elementosN[0])
        
                s.innerHTML = elementosN[0]
                elementosN.splice(2,1)
                elementosN.splice(1,1)
                numIsResultado = true
            }
            if(elementosN[1] == "/"){
                let s = document.getElementById('saida')

                elementosN[0] = Number(elementosN[0]) / Number(elementosN[2])
                elementosS = String(elementosN[0])
        
                s.innerHTML = elementosN[0]
                elementosN.splice(2,1)
                elementosN.splice(1,1)
                numIsResultado = true
            }
        }
    }
}
function back(){
    if(numIsResultado == false){
        if(fontTam < 48){ //aumentar a fonte se necessario
            fontTam+=3
            document.getElementById('saida').style.fontSize=`${fontTam}px`
        }

        elementosS = elementosS.slice(0, -1)
        s = document.getElementById('saida')
        s.innerHTML = elementosS
    }
}
function limpar(){
    elementosS = ""
    fontTam = 48
    numIsResultado = false
    while(elementosN.length != 0){
        elementosN.splice(0,1)
    }
    Painel.innerHTML = 0
}
function PassouMouse(botao){

    botao.style.backgroundColor = "#696969";

}
function SaiuMouse(botao){

    botao.style.backgroundColor = "#000000";
}