function fibs(num) {
let fibArr = []
for (let i = 0; i < num; i++){
	if (i === 0) fibArr.push(0)
  else if (i === 1) fibArr.push(1)
  else {
    fibArr[i] = fibArr[i-1] + fibArr[i-2]
    }
  }
  return fibArr
}


function recursiveFib(n) {
	if (n < 2) {
	return n
	} 
  return recursiveFib(n-1) + recursiveFib(n-2);
}



function mergeSort(arr){
  if(arr.length < 2) {
    return arr
    }
  const mid = Math.floor(arr.length / 2)
  const leftArr = mergeSort(arr.slice(0,mid))
  const rightArr = mergeSort(arr.slice(mid))
  return (merge(leftArr, rightArr))
}


function merge(left, right){
  let final = []

  while (left.length && right.length) {
    if (left[0] < right[0])  {
	    final.push(left.shift())
	  } else {
      final.push(right.shift())
    }
}
return [...final, ...left, ...right]
}



console.log(fibs(9))
console.log(recursiveFib(4))
console.log(mergeSort([23,56,76,12,10,3,12]))
