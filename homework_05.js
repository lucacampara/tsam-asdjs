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


function rpn(expression){
    var str = expression.split(" ");
    stack = new Stack();
    var n1, n2, operatore;
    for(var i = 0; i < str.length; i++){
        if(!isNaN(str[i])){   //è un numero
            stack.push(str[i]);
        }else{      //è un operatore 
            n1 = stack.pop();
            n2 = stack.pop();
            switch(str[i]){
                case '+':
                    stack.push(parseInt(n2) + parseInt(n1));
                    console.log(stack.peek());
                    break;
                case '-':
                    stack.push(parseInt(n2) - parseInt(n1));
                    console.log(stack.peek());
                    break;
                case '*':
                    stack.push(parseInt(n2) * parseInt(n1));
                    console.log(stack.peek());
                    break;
                case '/':
                    stack.push(parseInt(n2) / parseInt(n1));
                    console.log(stack.peek());
                    break;
                default:
                    console.log("default");
            }
        }
    }

    return stack.pop();
}