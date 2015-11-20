
//es 1
//Dato un array di interi restituire la loro somma fino a che non viene ritrovato un valore negativo
Array.prototype.sumWhileNeg = function(){ 
    var tot = 0;
    this.every(x => {
        if(x > 0){
            tot += x;
        }
        return x > 0;
        }
    )
    return tot;
}




//es 3
//Dato un array di 10 elementi, calcolarne la media
Array.prototype.avg = function() {
        if(this.length == 0){
        return 0;
    }else{
       return this.reduce((acc, x) => acc + x, 0) / this.length;
    }
}



//es 9
//Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli elementi.
Array.prototype.reverse = function() {
    var array = [];
    var c = this.length - 1;
    for (var i = 0; i < this.length; i++){
        array[c] = this[i];
        c = c - 1;
    }
    return a = array;
}




//es 11
//Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
//dispari precedano nello stesso ordine tutti gli elementi pari.
Array.prototype.concatOddEven = function() {
    var pari = this.filter(x => (x % 2 == 0));
    var disp = this.filter(x => (x % 2 != 0));
    return disp.concat(pari);
}



function ex_1(arr){
    return arr.sumWhileNeg();
}

function ex_3(arr){
    return arr.avg();
}

function ex_9(arr){
    return arr.reverse();
}

function ex_11(arr){
    return arr.concatOddEven();
}