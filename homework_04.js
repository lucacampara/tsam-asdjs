
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


function dec2bin(n){
    stack = new Stack();

    var result = "";
    while(n > 0){
        stack.push(n%2);
        n = Math.floor(n/2);
    }
    while(!stack.isEmpty()){
        result += stack.pop();
    }

    return result;
}