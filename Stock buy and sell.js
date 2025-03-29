const arr = [2, 10, 3, 1, 10, 6, 7,0,20];
let min = arr[0];
let max = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] - min > max) {
        max = arr[i] - min;
    }
    
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(max);
