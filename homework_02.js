//campara luca


//es 1
//Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
function ex_1_F(array){
    var somma = 0;
    array.every ( x => {
        if( x > 0){
            somma += x;
        }
        return x > 0;
    });
    return somma;
}



//es 2
//Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari

function ex_2_F(a){
	
    var n=[];
    var tmparray=[];
    //crea l'arr dei num precedenti uguali a n
    for(var i=0; i<=a;i++){
        n.push(i);
    }
    console.log(n);

    n.every(x=>{
        if(x>0 && x%2!=0)
		 tmparray.push(x);
	     
	    return tmparray;
	    });
 
return tmparray;
}


//es 3
//Dato un array di 10 elementi, calcolarne la media
function ex_3_F(a){
    return (a.reduce((acc,x)=>acc+x))/a.length;
}

function ex_03_F(k){
    return media(k);
}


/*
es 4
Dato un intervallo [a, b] con a e b due interi positivi, 
restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. 
Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
Esempio:
sumInterval(3, 5) => 12
sumInterval(5, 3) => 12
*/

function ex_4_F(a, b){
    var tot = 0;
    var arrAb = [];
    if(b > a){
        for(var i = a; i <= b; i++){
            arrAb.push(i);
        }
        arrAb.every(x => tot += x);
        
     } 
     else {
         for(var i=b; i<=a;i++){
             arrAb.push(i);
         }
         console.log(arrAb);
         arrAb.every(x => tot += x);
     }
     return tot;
}

//es 5
//Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
//operatore somma.
function ex_5_F(a, b){

    var tot = 0;
    var myArray = [];

    if(a < 0 || b < 0){
        return false;
    } 
    else {

        for(var i = 0; i < b; i++){
            myArray[i] = a;
        }
        myArray.every(x => tot += x);
        return tot;
    }
}


//es 9
//Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli elementi.
function ex_9_F(arr)
{
    var a= [];
    arr.every(x=> {a.unshift(x); return a;});
    return a;
}


//es 11
function ex_11_F(arr){
	var pari=[];
	var disp=[];
	disp=arr.filter(x=>x%2!=0);
	pari=arr.filter(x=>x%2==0);

	return disp.concat(pari);
	
}
