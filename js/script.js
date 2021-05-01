
var variavelAtual; 
var jogoAcabou = false; 

window.onload = function (){
    let botao = document.querySelector("button");
    botao.addEventListener('click', e =>{  
        if (!jogoAcabou){
            iniciaJogo();
            let img = document.querySelector("img");
            img.src="img/destrava.png";
            botao.style.backgroundColor = "yellow";
            botao.innerHTML = '<img src="img/trava.png" alt="cadeado travado"/>Reiniciar Jogo';
        }else{
            reiniciarJogo();
        }
    });

}

function iniciaJogo(){
    
   let cel = document.querySelectorAll("td");
   cel.forEach(vlr =>{
        vlr.addEventListener('click', e =>{
            if (exibeMarcacao(vlr.id)=="O"){
                document.getElementById(vlr.id).style.color = "red";
            }else{
                document.getElementById(vlr.id).style.color = "blue";
            }   
            validaTermino();         
        });
   });
}

function exibeMarcacao(objeto){    

    if(document.getElementById(objeto).innerHTML ==""){

        if (!jogoAcabou){
            if (variavelAtual == "" || variavelAtual=="O"){
                let valor = document.getElementById(objeto).innerHTML = "X";         
                return variavelAtual = "X";
            }else{
                let valor = document.getElementById(objeto).innerHTML = "O";
                return variavelAtual = "O";  
            }   
        }else{
            alert("Jogo acabou!");
            return variavelAtual = "";
        }
    }        
}

function validaTermino(){

   let aJogo =[];

   for(let i = 1; i < 10 ; i++){
        aJogo[i]=document.getElementById(i).innerHTML;  
   }

   let dimH1 = (aJogo[1] == aJogo[2] && aJogo[1] == aJogo[3] && aJogo[1] !="");
   if(dimH1)propriedades(0,180,220);        
   
   let dimH2 = (aJogo[4] == aJogo[5] && aJogo[4] == aJogo[6] && aJogo[4] !="");
   if(dimH2)propriedades(0,0,0); 

   let dimH3 = (aJogo[7] == aJogo[8] && aJogo[7] == aJogo[9] && aJogo[7] !="");
   if(dimH3)propriedades(0,550,220); 

   let dimV1 = (aJogo[1] == aJogo[4] && aJogo[1] == aJogo[7] && aJogo[1] !="");    
   if(dimV1)propriedades(90,0,27);    
   
   let dimV2 = (aJogo[2] == aJogo[5] && aJogo[2] == aJogo[8] && aJogo[2] !="");
   if(dimV2)propriedades(90,0,212);   
   
   let dimV3 = (aJogo[3] == aJogo[6] && aJogo[3] == aJogo[9] && aJogo[3] !="");
   if(dimV3)propriedades(90,0,400); 

   let dimD1 = (aJogo[1] == aJogo[5] && aJogo[1] == aJogo[9] && aJogo[1] !="");
   if(dimD1)propriedades(45,365,0); 

   let dimD2 = (aJogo[3] == aJogo[5] && aJogo[3] == aJogo[7] && aJogo[3] !="");
   if(dimD2)propriedades(135,0,0);
      

}

function propriedades(rotate, top, left ){    
    let objeto = document.getElementById("risco");
    objeto.style.display = "table";     
    objeto.style.transform="rotate("+rotate+"deg)";
    if(top != 0){
        objeto.style.top= top+"px";
    }
    if(left != 0){
        objeto.style.left= left+"px";
    }
    jogoAcabou = true;        
}

function reiniciarJogo(){

    let td = document.querySelectorAll("td");
    let objeto = document.getElementById("risco");
    objeto.style.display = "none"; 
    td.forEach(vlr =>{
        vlr.innerHTML = "";
        document.getElementById(vlr.id).style.color = "black";
        jogoAcabou = false;
    });

}
