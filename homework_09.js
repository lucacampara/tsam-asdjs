//implementazione dello Stack
function Stack(){
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

Stack.prototype.popall = function(callback){
     while(!this.isEmpty()){
         callback(this.pop());
     }
}

//---------------------------------------------------

//implementazione LinkedList
function LinkedList(){
    this.first = null;
}

function NodeLinked(item, prec, succ){
    this.item = item;
    this.prec = prec;
    this.succ = succ;
    this.posizione = 0;
}

LinkedList.prototype.add = function(index, e){
    if(this.first == null){
        this.first = new NodeLinked(e, null, null);
        this.first.posizione = index;
    }else{
        this.addNode(this.first, index, e);
    }
}

LinkedList.prototype.addNode = function(currentEl, index, e){
    if(index > currentEl.posizione){
        if(currentEl.succ == null){
            currentEl.succ = new NodeLinked(e, currentEl, null);
        }else{
            return this.addNode(currentEl.succ, index, e);
        }
    }else{
        if(currentEl.prec == null){
            currentEl.prec = new NodeLinked(e, null, currentEl);
        }else{
            return this.addNode(currentEl.prec, index, e);
        }
    }
}

//---------------------------------------------------------------------

//implementazione tree
function Node(value, leftNode, rightNode){
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST(){
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e){
    if(e < currentNode.item){
        if(currentNode.left == null){
            currentNode.left = new Node(e, null, null);
        }else{
            this.addNode(currentNode.left, e);
        }   
    }else{
        if(currentNode.right == null){
            currentNode.right = new Node(e, null, null);
        }else{
            this.addNode(currentNode.right, e);
        } 
    }
}

BST.prototype.add = function(e){
    if(this.root == null){
        this.root = new Node(e, null, null);
    }else{
        this.addNode(this.root, e);
    }
}

BST.prototype.existNode = function(currentNode, e){
    if(currentNode == null){
       return false;
    }
    if(currentNode.item == e){
        return true;
    }else{ 
        if(e > currentNode.item){
            return this.existNode(currentNode.left, e);
        }else{
            return this.existNode(currentNode.right, e);
        }
    }

}

BST.prototype.exist = function(e){
    return this.existNode(this.root, e)
}


BST.prototype.searchNode = function(valore){
    return this.search(this.root, valore);
}

BST.prototype.search = function(currentNode, valore){
    if(currentNode == null){
        return null;
    }
    if(currentNode.item == valore){
        return currentNode;
    }else{ 
        if(valore < currentNode.item){
            return this.search(currentNode.left, valore);
        }else{
            return this.search(currentNode.right, valore);
        }
    }
}
//----------------------------------------------------------------------

//esercizio 1 variante a
var result = 0;
var n = 0;
function ex_1a(myarray) {
    if (myarray.length == 0) {
        return 10;
    }
    if(n < myarray.length){
        result += 5 * myarray[n];
        n++;
        return ex_1a(myarray);
    }else {
        return result;
    }
}

//esercizio 1 variante b
var sommaPari = 0;
function ex_1b(myarray){
    if(myarray.length > 0){
        if(myarray[0] % 2 == 0){  //è un numero pari
            sommaPari += Math.pow(myarray[0], 2);
        }
        myarray.shift();
        return ex_1b(myarray);
    }else{
        return sommaPari;
    }
}

//esercizio 2
function ex_2(myarray){
    var tmpArray = myarray.filter(pari);
    var risultato = tmpArray.reduce(function(a, b){
        return a + Math.pow(b, 2);
    }, 0);
    return risultato;
}

function pari(valore){
    return valore % 2 == 0;
}


//esercizio 3
function ex_3(myarray){
    var stackPari = new Stack();
    var stackDispari = new Stack();
    var stackResult = new Stack();

    //fase insert
    for(var i = 0; i < myarray.length; i++){
        if(myarray[i] % 2 == 0){
            stackPari.push(myarray[i]);
        }else{
            stackDispari.push(myarray[i]);
        }
    }

    //fase moltiplicazione
    while(!stackPari.isEmpty() && !stackDispari.isEmpty()){
        stackResult.push(stackPari.pop() * stackDispari.pop());
    }
    
    var result = 0;
    while(!stackResult.isEmpty()){
        result += stackResult.pop();
    }
    
    return result;
}

//prove
/*
console.log("prova es 1a");
console.log(ex_1a([1,2,3,4]));

console.log("prova es 1b");
console.log(ex_1b([1,2,3,4,5]));

console.log("prova es 2");
console.log(ex_2([1,2,3,4,5]));

console.log("prova es 3");
console.log(ex_3([1,2,3,4,6]));

console.log("prova es 4");
var link = new LinkedList();
link.add(1, "ciao");
link.add(2, "come");
link.add(3, "va");
console.log(link.first);
console.log(link.first.succ);


console.log("prova es 5");
var tree = new BST();
tree.add(10);
tree.add(5);
tree.add(7);
tree.add(20);
tree.add(15);
console.log(tree.searchNode(5));
console.log(tree.searchNode(15));
console.log(tree.searchNode(30));
*/