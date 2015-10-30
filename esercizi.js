//ESERCIZI LUCA CAMPARA
console.log('Esercizi Luca Campara\n\n');

//console.log('hello world');
//console.log('bye');
var array1 = [1,2,3,4,5];
var array2 = [1,2,3,4,5,6,7,8,9,10];
var array3 = [1,2,3,-4,2];
var array4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

console.log ('\n\nESERCIZIO 1 iterativo\n ' + sommaArrayNumPos(array1));

console.log ('\n\nESERCIZIO 2 iterativo\n ' + sommaNumDispari(5));

console.log ('\n\nESERCIZIO 3 iterativo\n ' + mediaArray(array2));

console.log ('\n\nESERCIZIO 4 iterativo\n ' + sommaNumIntervallo(2,5));

console.log ('\n\nESERCIZIO 5 iterativo\n ' + prodotto(2, 6));

console.log ('\n\nESERCIZIO 6 iterativo\n ' + divisione(3, 3));

console.log ('\n\nESERCIZIO 7 iterativo\n ' + potenza(3, 3));

console.log ('\n\nESERCIZIO 8 iterativo\n ' + arrayToMatrice(array4));

console.log ('\n\nESERCIZIO 9 iterativo\n ' + invertiLista(array4));

console.log ('\n\nESERCIZIO 10 iterativo\n ' + creaLista(3, 4));

console.log ('\n\nESERCIZIO 11 iterativo\n ' + riordinaLista(array1));


//ricorsivo
console.log ('\n\nESERCIZIO 1 ricorsivo \n ' + sommaArrayNumPosRic(array3));

console.log('\n\nESERCIZIO 2 RICORSIVO \n' + sommaNumDispariRic(5));

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var l=a.length;
console.log('\n\nESERCIZIO 3 RICORSIVO\n' + mediaArrayRic(a)/l);



//es 1 iterativo
function sommaArrayNumPos (array){
	var somma = 0;
	var numAttuale;
	for (var i = 0; i < array.length; i++) {
		numAttuale = array[i];
		if (numAttuale >= 0) {
			somma += numAttuale;
			return somma;
		}else{
			return 'trovato numero negativo!';
			i = array.length;
		}
	}
}


//es 2 iterativo
function sommaNumDispari (n) {
	var somma = 0;
	var numeroDispari = 1;
	for (var i = 0; i < n; i++) {
		somma += numeroDispari;
		numeroDispari += 2;
	};
	return somma;
}


//es 3 iterativo
function mediaArray(array){
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
function sommaNumIntervallo(a, b){
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
function prodotto(a, b){
	var prodotto = 0;
	if (a > 0 && b > 0){
		for(var i = 0; i < b; i++){
			prodotto += a;
		}
	}
	return prodotto;
}
	
//es 6 iterativo
function divisione(a, b){
	var quoziente = 0;
	var resto = 0;
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
		return quoziente + ' resto ' + resto;	
	}else{
		return 'numeri negativi!';
	}
	
}

//es 7 iterativo
function potenza(x, y){
	var potenza = 1;
	for (var i = 0; i < y; i++){
		potenza = prodotto(potenza, x);
	}
	return potenza;
}

//es 8 iterativo
function arrayToMatrice(array){
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
function invertiLista(lista){
	var listaInvertita = new Array();
	var j = 0;
	for (var i = lista.length-1; i >= 0; i--){
		listaInvertita[j] = lista[i];
		j++;
	}
	return listaInvertita;
}

//es 10 iterativo
function creaLista(a, n){
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
function riordinaLista(A){
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
	for (var l = 0; l < contPari.length; l++){
		dispari[contDispari] = pari[l];
		contDispari++;
	}
	return dispari;
}


//es 1 ricorsivo
function sommaArrayNumPosRic (array){
	if(array[0] < 0){
		return 0;
	}else{
		return (array[0] + sommaArrayNumPosRic(array.slice(1)));
	}
}

//es 2 ricorsivo
var a = 5;
var n = 1;
var sum = 0;
var i = 0;
function sommaNumDispariRic(sum){
	if(i==a){
		return sum;
	}else{
		sum += n;
		n += 2;
		i++;
		return sommaNumDispariRic(sum);
	}
}

//es 3 ricorsivo
function mediaArrayRic(x) {
   if( x.length==0){
       return 0;
   }
   else{
       return x[0] + mediaArrayRic(x.slice(1));
   }
}

//es 4 ricorsivo
var a=3;
var b=5;
var somma=0;
function sommaNumIntervalloRic(x, y){

	if (x==y){
		return somma;
	}else{
		somma=somma+x;
		x++;
		return sommaNumIntervalloRic (x,y);
	}
}
if (a<b)
{
	somma=sommaNumIntervalloRic(a,b);
}
else
{
	somma=sommaNumIntervalloRic(b,a);
}
console.log('\n\nESERCIZIO 4 RICORSIVO\n' + somma);


//es 5 ricorsivo
var prodotto = 0;
function prodottoRic(a, b){
	if(b > 0){
		prodotto += a;
		return prodottoRic(a, b-1);
	}else{
		return prodotto;
	}
}
console.log('\n\nESERCIZIO 5 RICORSIVO\n' + prodottoRic(6, 3));

//es 6 ricorsivo
var quoziente = 0;
var resto = 0;
function divisioneRic1(a, b){
	if(a > 0 && b > 0){
		if(a >= b){
			divisioneRic2 (a, b);
		}else{
			divisioneRic2 (b, a);
		}
	}else {
		return 'numeri negativi';
	}
}
function divisioneRic2(a, b){
	if(a >= b){
		quoziente++;
		return divisioneRic2((a-b), b);
	}else{
		resto = a;
		return quoziente + ' resto ' + resto;
	}
}
console.log('\n\nESERCIZIO 6 RICORSIVO\n' + divisioneRic1(5, 3));

//es 7 ricorsivo
function potenzaRic(x, y){
	if(y > 1){
		var a = prodotto(x, x);
		return potenzaRic(a, y-1);
	}else{
		return x;
	}
}
console.log('\n\nESERCIZIO 7 RICORSIVO\n' + potenzaRic(5, 3));