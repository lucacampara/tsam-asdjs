
function merge(array1, array2){
    var myarray = [];
    var a = 0;
    var b = 0;
    while(a != array1.length && b != array2.length){
        if(array1[a] < array2[b]){
            myarray.push(array1[a]);
            a++;
        }else{
            myarray.push(array2[b]);
            b++;
        }
    }
    if(a!= array1.length){
        while(a != array1.length){
            myarray.push(array1[a]);
            a++;
        }
    }
    if(b!= array2.length){
        while(b != array2.length){
            myarray.push(array2[b]);
            b++;
        }
    }
    return myarray;
}

