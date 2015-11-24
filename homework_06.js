function Queue(){
    this.myarray = [];
}

Queue.prototype.enqueue = function(e){
    this.myarray.unshift(e);
}
Queue.prototype.dequeue = function(){
    return this.myarray.pop();
}
Queue.prototype.front = function(){
    return this.myarray[this.myarray.length -1] 
}
Queue.prototype.isEmpty = function(){
    return this.myarray.length == 0;
}
Queue.prototype.size = function(){
    return this.myarray.length;
}

//circular queue
function CircularQueue(n){
    this.myarray = [];
    this.myarray.length = n;
    this.n = n;
    this.read = 0;
    this.insert = 0;
}

CircularQueue.prototype.enqueue = function(e){
    if(this.insert < this.n){
        if(this.myarray.length >= this.n){
            this.myarray.pop();
            this.myarray.unshift(e);
        }else{
            this.myarray.unshift(e);
        }
        this.insert++;
    }else{
        this.myarray.pop();
        this.myarray.unshift(e);
        this.insert = 0;
    }  
    console.log(this.insert);
}
CircularQueue.prototype.dequeue = function(){
    return this.myarray.pop();
}
CircularQueue.prototype.front = function(){
    return this.myarray[this.myarray.length -1] 
}
CircularQueue.prototype.isEmpty = function(){
    return this.myarray.length == 0;
}
CircularQueue.prototype.size = function(){
    return this.myarray.length;
}
CircularQueue.prototype.printElements = function(){
    console.log(this.myarray);
}


cq = new CircularQueue(3);

cq.enqueue(1);
cq.printElements();
cq.enqueue(2);
cq.printElements();
cq.enqueue(3);
cq.printElements();
cq.enqueue(4);
cq.printElements();
cq.enqueue(5);
cq.printElements();
cq.enqueue(6);
cq.printElements();
cq.enqueue(7);
cq.printElements();
cq.enqueue(8);
cq.printElements();
