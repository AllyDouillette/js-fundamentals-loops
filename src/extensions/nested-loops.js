const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

for (let i = 1; i <= 10; i++) {
  simpleOne.push(i)}
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2], [3,3,3], [4,4,4,4]...]
for (let i = 1; i <= 10; i++) {

  // create a temporary array we then can push
  let tempArray = []
  for (let j = 1; j <= i; j++) {
    tempArray.push(i)
  }
  // push this tempArray to nestedOne
  nestedOne.push(tempArray)}

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],[3,2,1]...]

for (let i = 1; i <= 10; i++) {
  const newArr = []
  for (let j = i; j > 0; j--) {
    newArr.push(j)  
  }
  nestedTwo.push(newArr)}

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],[[3],[3,3],[3,3,3]], ...]

for (let i = 1; i <= 10; i++) {
  // create a temporary array we then can push
  const tempArray2 = []
  for (let j = 1; j <= i; j++) {
    const tempArray1 = []
    for (let k = 0; k < j; k++) {
      tempArray1.push(i)        
    }
    tempArray2.push(tempArray1)
  }
  // push this tempArray to nestedOne
  deepOne.push(tempArray2)}

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (let i = 1; i <=10; i++) {
  let tempArray1 = []
    for (let j= 1; j <= i; j++) {
      let tempArray2 = []
        for (let k=1; k <= j; k++) {
          tempArray2.push(k)
        }
        tempArray1.push(tempArray2)
    }
    deepTwo.push(tempArray1)
}

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
// 1^2 + 2^2 / 2
//       [[1],[[1],[2.5]],...]
for (let i = 1; i <=10; i++) {
  let tempArray1 = []
    for (let j= 1; j <= i; j++) {
      let tempSum = 0
        for (let k=1; k <= j; k++) {
          tempSum += k ** 2
        }
        tempArray1.push([tempSum / j])
    }
    deepThree.push(tempArray1)
}

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
