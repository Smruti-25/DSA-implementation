//iterative

function binarySearch( array, value ){
  let low = 0;
  let high = array.length - 1;
  
  while( low <= high ) {
    let mid = Math.ceil(( low + high ) / 2);
    if( value < array[mid] ){
      high = mid - 1;
    } else if( value > array[mid] ){
      low = mid + 1;
    } else return mid;
  }
  return false;
}

const array = [0 ,1 ,2, 3, 4, 5, 6, 7];
console.log("binarysearch", binarySearch( array, 033 ));