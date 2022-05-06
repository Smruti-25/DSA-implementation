//recursive

function binarySearchRecursive( array, value, low, high ) {
  if( low > high ){
    return false;
  }

  let mid = Math.ceil((low + high) / 2);

  if (value < array[mid]) {
    binarySearchRecursive( array, value, low, mid - 1 );
  } else if (value > array[mid]) {
    binarySearchRecursive(array, value, mid + 1, high);
  } else return mid;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7];
console.log("binarySearch", binarySearchRecursive(array, 99, 0, array.length - 1));