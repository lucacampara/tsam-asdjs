//   Campara Luca

// Creazione dell'array
function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */

// Implementazione dello Stack
function Stack() {
	this.myarray = [];
}

Stack.prototype.push = function(e) { 
    this.myarray.push(e);  
}

Stack.prototype.pop = function() { 
    return this.myarray.pop(); 
}

Stack.prototype.peek = function() { 
    return this.myarray[this.myarray.length -1] 
}

Stack.prototype.isEmpty = function() { 
    return this.myarray.length == 0; 
}

Stack.prototype.popall = function(callback) {
     while(!this.isEmpty()) {
         callback(this.pop());
     }
}



// Implementazione tree
function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }   
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        } 
    }
}

BST.prototype.add = function(e){
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }
}

BST.prototype.max = function() {
	return this.maxValue(this.root);
}

BST.prototype.maxValue = function(currentNode) {
	if (currentNode.right == null) {
		return currentNode.item;
	} else {
		return this.maxValue(currentNode.right);
	}
}

//----------------------------------------------------------------------



var A = initialArray();

/* Esercizio 1
 * Dato un array A ritorna il numero di elementi di A che corrispondono al valore 5070
 */
function numeroElementi(myarray) {
	if (myarray.length == 0) {
		return 0; 
	} else {

		if (myarray[0] == 5070) {
			return 1 + numeroElementi(myarray.slice(1));
		} else {
			return 0 + numeroElementi(myarray.slice(1));
		}
	}
}



/* Esercizio 2
 * Dato un array A restituisce la radice quadrata della somma dei quadrati 
 * dei soli elementi positivi e pari
 */
function trasformazioneArray(myarray) {
	myarray = myarray.filter(x => x % 2 == 0 && x >= 0);
	var tmpArray = myarray.map(x => x * x);
	return Math.sqrt(tmpArray.reduce((somma, x) => somma + x, 0));
}



/* Esercizio 3
 * valuta il valore di un'espressione “fully parentherized”
 */
function valutaEspressione(expression) {
	var elementi = expression.split(" ");

	var stackop = new Stack();
	var stacknum = new Stack();
	var primonumero = 0;
	var secondonumero = 0;
	var operatore;
	for (var i = 0; i < elementi.length; i++) {

		if (isNaN(elementi[i])) {   			//l'elemento corrente non è un numero
			if (elementi[i] == ')') {
				primonumero = stacknum.pop();
				secondonumero = stacknum.pop();
				operatore = stackop.pop();
				stackop.pop();  				// tolgo la parentesi aperta

				switch (operatore) {
					case '+':
						stacknum.push(parseInt(secondonumero) + parseInt(primonumero));
						break;
					case '-':
						stacknum.push(parseInt(secondonumero) - parseInt(primonumero));
						break;
					case '*':
						stacknum.push(parseInt(secondonumero) * parseInt(primonumero));
						break;
					case '/':
						stacknum.push(parseInt(secondonumero) / parseInt(primonumero));
						break;
				}
			} else {
				stackop.push(elementi[i]);
			}

		} else {							// è un numero
				stacknum.push(elementi[i]);
		}
		

	} //fine for

	return stacknum.pop();

}



/*  Esercizio 5
 *  riepie un albero dato un array e trova l'elemento maggiore dell'albero
 */
function maxTree(myarray){
	var tree = new BST();

	// riempio l'albero
	for (var i = 0; i < myarray.length; i++) {
		tree.add(myarray[i]);
	}

	return tree.max();
}


//   prove
/*
console.log("1: " +numeroElementi(A));

console.log("2: " + trasformazioneArray(A));

console.log("3: " + evaluateExpr(valutaEspressione));

console.log("5: " + maxTree(A));
*/