Linked List:

const nodeOne = {
  data: 123
}

const nodeTwo = {
  data: 456
}

nodeOne.next = nodeTwo

--------------------------------------------
      // SUM ARRAY

arr.reduce((pv, cv) => { return pv + cv }, 0)

---------------------------------
      // CREATE A MAP OBJECT

let mapObj = arr.reduce((pv, cv) => {
               pv[cv] = (pv[cv] + 1) || 1
               return pv
             }, {})


let mapObj = {}
arr.forEach((x) => {
  if(!mapObj[x]){
    mapObj[x] = 0
  }else {
    mapObj[x]++
  }
})

---------------------------------
      // MY FIBONACCI

let fib = () => {
  let count = 2
  let arr = [0, 1]

  let myRecFib = (count) => {
    if(count === n + 1){ return }
    arr.push(arr[count - 2] + arr[count - 1])
    myRecFib(count + 1)
  }

  myRecFib(count)
  return arr[n]
}

---------------------------------
// From array to sub arrays of n

const subDv = (arr, num) => {
      var tempArr = []
      while (arr.length > 0) {
        tempArr.push(arr.splice(0, num))
      }
      return tempArr
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log( subDv( arr1 , 2 ))  // [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12] ]


---------------------------------
    // Big O

O(1) = Constant
O(n) = Linear
O(n^2) = Exponential
O(log n) = Logaritmic


--------------------------------------------
      // TWO-SUM

const twoSum = (arr, num) => {

  let hashtable = []
  let pairs = []


  for(let x = 0; x < arr.length; x++){

    let currNum = arr[x]
    let counterpart = num - currNum

    if(hashtable.includes(counterpart)){ pairs.push([currNum, counterpart]) }
    hashtable.push(currNum)
  }

  return pairs
}



--------------------------------------------


// Topics for class:
// Review:
//
// HTML & CSS & JavaScript
// Data Types
// Variables.
// if statements
//
// Teach:
// Arrays
// For Loops
