function addtoscreen(x){



 if (x == 'on') {
  document.getElementById("display").innerHTML = "";
} else {

    

         document.getElementById("display").innerHTML += x;
    
    }

}


function btndiv(){
  document.getElementById("display").innerHTML += "/";
}

function btnmult(){
  document.getElementById("display").innerHTML += "*";
}

function btnsum(){
  document.getElementById("display").innerHTML += "+";
}

function btnsub(){
  document.getElementById("display").innerHTML += "-";
}

function SignoOpuesto() { 
            nx=Number(document.getElementById("display").innerHTML); //convertir en número
            nx=-nx; //cambiar de signo
            x=String(nx); //volver a convertir a cadena
             document.getElementById("display").innerHTML=x; //mostrar en pantalla.
            }
     


function Punto(){
      
            
            
if (document.getElementById("display").innerHTML == ""){
  document.getElementById("display").innerHTML = "";
}else{
    if(document.getElementById("display").innerHTML.indexOf('.')==-1)
     {
        nx=Number(document.getElementById("display").innerHTML); //convertir en número
        nx=nx+"."; //cambiar de signo
        x=String(nx); //volver a convertir a cadena
        document.getElementById("display").innerHTML=x; //mostrar en pantalla.
    }
  }
            
           
}
 
function compute() 
 {
    document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML)
 }

        
    