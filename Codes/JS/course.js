function selectionSort(arr) { 
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j][0].charCodeAt(0) < arr[min][0].charCodeAt(0)) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr;
}


function binaySearch(arr, name){ 
    let start = 0; 
    let end = arr.length - 1;  
    while(start <= end){
        mid = Math.floor((start + end) / 2); 
            if(arr[mid][0].charCodeAt(0) === name[0].charCodeAt(0)) {
                if(name == arr[mid]){
                    return "Found";
                }
            }
            else if (arr[mid][0].charCodeAt(0) > name[0].charCodeAt(0)){
                end = mid - 1; 
            }
            else if (arr[mid][0].charCodeAt(0) < name[0].charCodeAt(0)){
                start =  mid + 1;            
            }
    } 

}


let courseArr = ["Card", "Word", "Lord", "Hard"];

console.log(selectionSort(courseArr));
console.log(binaySearch(courseArr, "Word")); 
















