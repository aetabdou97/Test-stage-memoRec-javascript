var result,ope, op1,op2;
var chaine = "";
var i = 0;
var arrayReponses=[];
var reponse = document.getElementById('reponse');
function generator(){
reponse.innerHTML="0";
var randOpe;
randOpe= Math.floor(Math.random() * 4);
switch(randOpe){
    case 0 :
         ope = "+";

         break;
    case 1 :
         ope = "-";
         break;
    case 2 : 
        ope = "x";
        break;
    case 3 : 

        ope = ":";
        break;
}

op1= Math.floor(Math.random() * 10);
op2= Math.floor(Math.random() * 10);

while((ope==="-" && op2>op1) || (ope===":" && op2==0)){
    generator();
}
var operation = document.getElementById('op');
operation.innerHTML= op1 +ope+op2+"=?";
}
generator();


var B1= document.getElementById('b1');
B1.addEventListener("click",affiche);
var B2= document.getElementById('b2');
B2.addEventListener("click",affiche);
var B3= document.getElementById('b3');
B3.addEventListener("click",affiche);
var B4= document.getElementById('b4');
B4.addEventListener("click",affiche);
var B5= document.getElementById('b5');
B5.addEventListener("click",affiche);
var B6= document.getElementById('b6');
B6.addEventListener("click",affiche);
var B7= document.getElementById('b7');
B7.addEventListener("click",affiche);
var B8= document.getElementById('b8');
B8.addEventListener("click",affiche);
var B9= document.getElementById('b9');
B9.addEventListener("click",affiche);
var B0= document.getElementById('b0');
B0.addEventListener("click",affiche);
var BOK= document.getElementById('bOK');
BOK.addEventListener("click",calcul);
var BDel= document.getElementById('bDel');
BDel.addEventListener("click",sup);

function affiche(){
    if(this.value==0 && chaine==0)
    reponse.innerHTML=0;
    else{
    chaine += (this.value);
    reponse.innerHTML= chaine;
    }
}
function calcul(){
    switch(ope){
        case "+" : 
        result= op1+op2;
        break;
        case "-" :
        result= op1-op2;

        break;
        case "x" : 
        result= op1*op2;
        break;
        case ":" : 

        result= Math.floor(op1/op2);
        break;
    }
    if(reponse.innerHTML==result){
        if(i==0)
    alert("félicitations");
        else{
            i=0;
        alert("vous pouvez faire mieux");
        }
    chaine="";
    arrayReponses=[];
    generator(); 
    }
    else{
    alert("reponse inexacte");
    arrayReponses.push(reponse.innerHTML);
    chaine="";
    i++;
    if(i>=3){
        renderHtml();
        i=0;
        generator();
        console.log(arrayReponses);
        arrayReponses=[];
    }
    }
}
function sup(){
chaine = "";
reponse.innerHTML=chaine;
}
function renderHtml(){
    var arrayJs= document.getElementById("table");
    for(j=0; j<i;j++){
    arrayJs.innerHTML += "<td>"+arrayReponses[j]+"</td>";
    }
}


