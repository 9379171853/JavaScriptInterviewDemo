function InsertionSortDesc(arr){    
    for(var i =0; i< arr.length; i++){
        var temp = arr[i];
        for(var j = i-1; j >=0 && (arr[j] < temp); j--){
            arr[j+1] = arr[j];
        }
        arr[j + 1] =temp;
    }
}

var arr = [5,3,2,1,4];

InsertionSortDesc(arr);
console.log(arr);