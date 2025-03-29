const arr = [12 , 4 , 2 , 67 , 7 , 9];


//selection sort
function selection_sort(arr){
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; 
    
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
    
        if (minIndex !== i) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
      }
}

selection_sort(arr);
console.log(arr);
