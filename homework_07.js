function PriorityQueue(){
    this.myarray = [];
}

function QueueItem(item, priority){
    this.item = item;
    this.priority = priority;
}

PriorityQueue.prototype.enqueue = function(e){
    var i = 0;
    if(this.myarray.length != 0){
        while(e.priority > this.myarray[i].priority){
            i++;
        }
    } 
    this.myarray.splice(i, 0, e);
}

PriorityQueue.prototype.dequeue = function(){
    return this.myarray.pop();
}
PriorityQueue.prototype.front = function(){
    return this.myarray[this.myarray.length -1] 
}
PriorityQueue.prototype.isEmpty = function(){
    return this.myarray.length == 0;
}
PriorityQueue.prototype.size = function(){
    return this.myarray.length;
}
PriorityQueue.prototype.printQueue = function(){
    console.log("lungh: " + this.myarray.length);
    for(i = 0; i < this.myarray.length; i++){
        console.log(this.myarray[i].priority);
    }
}

pq = new PriorityQueue();
qi1 = new QueueItem('gianni', 10);
qi2 = new QueueItem('gianni', 2);
qi3 = new QueueItem('gianni', 20);
qi4 = new QueueItem('gianni', 15);


pq.enqueue(qi1);
pq.enqueue(qi2);
pq.enqueue(qi3);
pq.enqueue(qi4);

pq.printQueue();


