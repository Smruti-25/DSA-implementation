function iterativeApproach( array ) {
  let start = 0;
  let end = array.length - 1;
  while( start <= end ) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}

function recursiveApproach( array, start, end ) {
  let temp;
  if( start >= end ) return;
  temp = array[start];
  array[start] = array[end];
  array[end] = temp;
  recursiveApproach(array, start + 1, end - 1);
}

const array = [1,2,3,4,5];
const reversedArray = iterativeApproach(array);
console.log({reversedArray});
const array1 = [1, 2, 3, 4, 5];
const reversedArray1 = recursiveApproach(array1, 0, array1.length-1);
console.log({ array1});