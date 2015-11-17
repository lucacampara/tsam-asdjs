// CAMPARA           LUCA

//es 1 iterativo
//Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
function ex_1_I(array){
    var somma = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] >= 0) {
			somma += array[i];
		}else{
			return somma;
		}
	}
	return somma;
}

//es 2 iterativo
//Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
function ex_2_I(n){
    var somma = 0;
	var numeroDispari = 1;
	for (var i = 0; i < n; i++) {
		somma += numeroDispari;
		numeroDispari += 2;
	};
	return somma;
}

//es 3 iterativo
//Dato un array di 10 elementi, calcolarne la media
function ex_3_I(array){
    var somma = 0;
	var media;
	var numeri = 0;
	for (var i = 0; i < array.length; i++) {
		somma += array[i];
		numeri++;
	};
	return somma/numeri;
}

//es 4 iterativo
//Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri 
//compresi all’interno dell’intervallo, estremi inclusi
function ex_4_I(a, b){
    var somma = 0;
	if (a < b) {
		for (var i = a; i <= b; i++) {
			somma += i;
		};
	}else if (a > b) {
		for (var j = b; j <= a; j++) {
			somma += j;
		};
	}else{  //sono uguali
		somma = a + b;
	} 
	return somma;
}

//es 5 iterativo
//Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo operatore somma.
function ex_5_I(a, b){
    var prodotto = 0;
	if (a > 0 && b > 0){
		for(var i = 0; i < b; i++){
			prodotto += a;
		}
	}
	return prodotto;   
}

//es 6 iterativo
//Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
//l’utilizzo dei soli operatori somma e sottrazione.
function ex_6_I(a, b){
    var quoziente = 0;
	var resto = 0;
	var risultato = new Array();
	if (a > 0 && b > 0){
		if(a > b){
			while (a >= b){
				quoziente++;
				a -= b;
			}
			resto = a;
		}else{
			while (b >= a){
				quoziente++;
				b -= a;
			}
			resto = b;
		}	
		risultato[0] = quoziente;
		risultato[1] = resto;
		return risultato;	
	}else{
		return 'numeri negativi!';
	}
}

//es 7 iterativo
//Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
//operatori somma, sottrazione e della funzione mult.
function ex_7_I(x, y){
    var potenza = 1;
	for (var i = 0; i < y; i++){
		potenza = ex_5_I(potenza, x);
	}
	return potenza;
}

//es 8 iterativo
//Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
//oggetti in un array bidimensionale n x n.
function ex_8_I(array){
    var n = Math.sqrt(array.length);
	var arr1 = new Array(n);
	for(var k = 0; k < n; k++){
		arr1[k] = new Array(n);
	}  
	var count = 0;
	for(var i = 0; i < n; i++){
		for(var j = 0; j < n; j++){
			arr1[j][i] = array[count];
			count++;
		}
	}
	return arr1;
}

//es 9 iterativo
//Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli elementi.
function ex_9_I(lista){
    var listaInvertita = new Array();
	var j = 0;
	for (var i = lista.length-1; i >= 0; i--){
		listaInvertita[j] = lista[i];
		j++;
	}
	return listaInvertita;
}

//es 10 iterativo
//Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi contenenti a.
function ex_10_I(a, n){
    var lista = new Array();
	if(a > 0 && n > 0){
		for(var i = 0; i < n; i++){
			lista[i] = a;
		}
	}else{
		return 0;
	}
	return lista;
}

//es 11 iterativo
//Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
//dispari precedano nello stesso ordine tutti gli elementi pari.
function ex_11_I(A){
    var pari = new Array();
	var dispari = new Array(A.length);
	var contPari = 0;
	var contDispari = 0;
	for (var i = 0; i < A.length; i++){
		if(A[i] % 2 == 1){
			dispari[contDispari] = A[i];
			contDispari++;
		}else{
			pari[contPari] = A[i];
			contPari++;
		}
	}
	console.log(pari);
	console.log(dispari);
	for (var i = 0; i < contPari.length; i++){
		dispari.push(pari[i]);
	}
	return dispari;
}



//---------------------ricorsivi------------------------

//es 1 ricorsivo
//Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
function ex_1_R(array){
    if(array[0] < 0){
		return 0;
	}else{
		return (array[0] + ex_1_R(array.slice(1)));
	}
}


//es 2 ricorsivo
//Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
var sum = 0;
var i = 1;
function ex_2_R(n){
    if(n <= 0){
		return sum;
	}else{
		sum += i;
		i += 2;
		return ex_2_R(n-1);
	}
}

//es 3 ricorsivo
//Dato un array di 10 elementi, calcolarne la media
var somma = 0;
function ex_3_R(x){
    if(x.length == 0){
       return somma/10;
   }
   else{
   		somma += x[0];
       	return ex_3_R(x.slice(1));
   }
}


//es 4 ricorsivo
//Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
//compresi all’interno dell’intervallo, estremi inclusi
var somma=0;
function ex_4_R(a, b){
    if (a < b){
		somma = sommaNumIntervalloRic(a,b);
	}else{
		somma = sommaNumIntervalloRic(b,a);
	}
	return somma;
}

function sommaNumIntervalloRic(x, y){
	if (x > y){
		return somma;
	}else{
		somma=somma+x;
		x++;
		return sommaNumIntervalloRic(x,y);
	}
}


//es 5 ricorsivo
//Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo operatore somma.
var prodotto = 0;
function ex_5_R(a, b){
    if(b > 0){
		prodotto += a;
		return ex_5_R(a, b-1);
	}else{
		return prodotto;
	}
}

//es 6 ricorsivo
//Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
//l’utilizzo dei soli operatori somma e sottrazione.
var quoziente = 0;
var risultato = new Array();
function ex_6_R(a, b){
    if(a > 0 && b > 0){
		if(a >= b){
			divisioneRic2(a, b);
		}else{
			divisioneRic2(b, a);
		}
	}else {
		return 'numeri negativi';
	}
	return risultato;
}


function divisioneRic2(a, b){
	if(a >= b){
		quoziente++;
		return divisioneRic2((a-b), b);
	}else{
		resto = a;
		console.log('quoz' + quoziente);
		risultato[0] = quoziente;
		console.log(risultato[0]);
		risultato[1] = resto;
		return risultato;
	}
}

//es 7 ricorsivo
//Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
//operatori somma, sottrazione e della funzione mult.
var potenza = 1;
var risultato = 0;
function ex_7_R(x, y){
	potenza = 1;
    if(x == 0 && y == 0){
    	return potenza;
    }else if(x == 0 && y > 0) {
		risultato = potenzaRic(y, x);
    }else{
		risultato = potenzaRic(x, y);
    }
    return risultato;
}

function potenzaRic(x, y){
	if(y == 0){
		return potenza;
	}else{
		potenza = ex_5_I(potenza, x);
		return potenzaRic(x, (y-1));
	}
}

//es 8 ricorsivo
//Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
//oggetti in un array bidimensionale n x n.
function ex_8_R(){

}

//es 9 ricorsivo
//Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli elementi.
//var listaFinale = new Array();
//var a = 0;
var n = 0;
var valore1 = 0;
var valore2 = 0;
function ex_9_R(lista){
	if(n > lista.length%2){
		return lista;
	}else{
		valore1 = lista[n];
		valore2 = lista[lista.length-n-1];
		lista[lista.length-n-1] = valore1;
		lista[n] = valore2;
		n++;
		return ex_9_R(lista);
	}
}

//es 10 ricorsivo
//Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi contenenti a.
var array = new Array();
function ex_10_R(a, n){
	n--;
	if(n < 0){
		return array;
	}else{
		array[n] = a;
		return ex_10_R(a, n);
	}
}

//es 11 ricorsivo
//Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
//dispari precedano nello stesso ordine tutti gli elementi pari.
function ex_11_R(a){
	
}