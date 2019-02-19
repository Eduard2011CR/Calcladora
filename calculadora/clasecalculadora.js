//definir variable globales
let G_Numero1=0;
let G_Numero2=0;
let G_Signo="";


//se llama a la funcion calculadora para realizar la operacion
//es una clase
class Calculadora{
  constructor(_numero1, _numero2)//parametros, se declaran los numeros
  {
    this.Numero1=_numero1;//
    this.Numero2=_numero2;
  }
  //estos son metodos
  Sumar()
  {
    return parseFloat(this.Numero1)+parseFloat(this.Numero2);
  }
  Resta()
  {
    return parseFloat(this.Numero1)-parseFloat(this.Numero2);
  }
  Multiplicar()
  {
    return parseFloat(this.Numero1)*parseFloat(this.Numero2);
  }
  Dividir()
  {
    return parseFloat(this.Numero1)/parseFloat(this.Numero2);
  }

  //metodos asincronos
Sumasasicronas(){
  var objeto=this;
  return new Promise(function(resolve,regret){
  try {
    resolve(parseFloat(objeto.Numero1+objeto.Numero2));
  } catch (err) {
    reject(err.message);
  }
});
}

Restaasicronas(){
  var objeto=this;
  return new Promise(function(resolve,regret){
  try {
    resolve(parseFloat(objeto.Numero1-objeto.Numero2));
  } catch (err) {
    reject(err.message);
  }
});
}

Divisionasicrona(){
  var objeto=this;
  return new Promise(function(resolve,regret){
  try {
    resolve(parseFloat(objeto.Numero1/objeto.Numero2));
  } catch (err) {
    reject(err.message);
  }
});
}

Muiltiasicrona(){
  var objeto=this;
  return new Promise(function(resolve,regret){
  try {
    resolve(parseFloat(objeto.Numero1*objeto.Numero2));
  } catch (err) {
    reject(err.message);
  }
});
}

}
//definir signos
function dividir() {
  G_Signo="/";
  G_Numero1=  document.getElementById("texto").value;
  var texto=document.getElementById("texto").value = "";
}
function multi() {
  G_Signo="*";
  G_Numero1=  document.getElementById("texto").value;
  var texto=document.getElementById("texto").value = "";
}
function menos() {
  G_Signo="-";
  G_Numero1=  document.getElementById("texto").value;
  var texto=document.getElementById("texto").value = "";
}
function sumas() {
  G_Signo="+";
  G_Numero1=  document.getElementById("texto").value;
  var texto=document.getElementById("texto").value = "";
}

// cuando le damos igual/ este es del primer ejemplo
// function igual() {
//   G_Numero2= document.getElementById("texto").value;
//   let claseintaciado= new Calculadora(G_Numero1,G_Numero2);
//   switch (G_Signo) {
//     case "+":
//       document.getElementById("texto").value=claseintaciado.Sumar();
//     break;
//
//     case "-":
//       document.getElementById("texto").value=claseintaciado.Resta();
//     break;
//
//     case "/":
//       document.getElementById("texto").value=claseintaciado.Dividir();
//     break;
//
//     case "*":
//       document.getElementById("texto").value=claseintaciado.Multiplicar();
//     break;
//
//
//   }
// }

//funcion que va a ser llamada por el igual
function igual() {
  G_Numero2= document.getElementById("texto").value;
  let claseintaciado= new Calculadora(G_Numero1,G_Numero2);//se declaran los numeros en la clase
  switch (G_Signo) {
    case "+":
    alert("Calculando...");//mensasje de que se esta calculando
      document.getElementById("texto").value=claseintaciado.Sumasasicronas().then(function(response)//se llama la funcion Sumasasicronas para poder hacer la opercacion
      {
        document.getElementById("texto").value=response;  //se da el el resultado que fue declarado en response
      },function(error){
        document.getElementById('texto').value="NaN";  //se muestra que fue un error si no se pudo lograr
      }
    );
    break;

    case "-":
    alert("Calculando...");
    document.getElementById("texto").value=claseintaciado.Restaasicronas().then(function(response)
    {
      document.getElementById("texto").value=response;
    },function(error){
      document.getElementById('texto').value="NaN";
    }
  );
    break;

    case "*":
    alert("Calculando...");
    document.getElementById("texto").value=claseintaciado.Muiltiasicrona().then(function(response)
    {
      document.getElementById("texto").value=response;
    },function(error){
      document.getElementById('texto').value="NaN";
    }
  );
    break;

    case "/":
    alert("Calculando...");
    document.getElementById("texto").value=claseintaciado.Divisionasicrona().then(function(response)
    {
      document.getElementById("texto").value=response;
    },function(error){
      document.getElementById('texto').value="NaN";
    }
  );
    break;


  }
}


//borrar todos los datos en el input
function general() {
  document.getElementById("texto").value = "";
}

//borra solo un dato en el input
function borrar() {
  var texto = new String(document.getElementById("texto").value);
  texto = texto.substring(0,texto.length-1);
  document.getElementById("texto").value = texto;
}

//insertar datos en el input

function siete() {
  document.getElementById("texto").value = document.getElementById("texto").value+"7";
}

function ocho() {
  document.getElementById("texto").value = document.getElementById("texto").value+"8";
}

function nueve() {
  document.getElementById("texto").value = document.getElementById("texto").value+"9";
}

function siete() {
  document.getElementById("texto").value = document.getElementById("texto").value+"7";
}


function cuatro() {
  document.getElementById("texto").value = document.getElementById("texto").value+"4";
}

function cinco() {
  document.getElementById("texto").value = document.getElementById("texto").value+"5";
}

function seis() {
  document.getElementById("texto").value = document.getElementById("texto").value+"6";
}

function uno() {
  document.getElementById("texto").value = document.getElementById("texto").value+"1";
}

function dos() {
  document.getElementById("texto").value = document.getElementById("texto").value+"2";
}

function tres() {
  document.getElementById("texto").value = document.getElementById("texto").value+"3";
}

function cero() {
  document.getElementById("texto").value = document.getElementById("texto").value+"0";
}

function coma() {
  document.getElementById("texto").value = document.getElementById("texto").value+".";
}

function signo() {
  document.getElementById("texto").value = "-"+document.getElementById("texto").value;
}
