/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j];
//       }
//     }
//   }
// };
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

var twoSum = function (nums, target) {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    console.log(mp)

    //From MDN: The has() method of Map instances returns a boolean indicating whether 
    // an element with the specified key exists in this map or not.
  
    // With map objects (unlike regular objects which require keys to be strings) keys can be numbers
    // So we can calculate the difference and mp.has will check to see if the difference exsits in any of the keys.
    if (mp.has(diff)) {
    // If target-value exists in the map, mp.has will return true and we enter our if block
    // Then we return i, the current index and mp.get(diff) which evaluates to the value of the key/value pair or 0, 
    // which is the index corresponding with the value 2
    
    // From MDN: The get() method of Map instances returns a specified element from this map. 
    return [i, mp.get(diff)];
    }
    // map.set adds instances to a map. So each iteration we add a key/value pair to our map. 
    // by the third iteration our map will be {2 => 0, 3=>1, 4=>2}
    console.log([nums[i], i])
    mp.set(nums[i], i);
  }
};

console.log(twoSum([2, 3, 4, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([3, 5, 5, 9], 10));


// refreshing memory on basic JS object syntax for fun
// const obj = {}
// obj['a']=5
// obj['b']=10
// console.log(obj)

// const obj2 = {'a':5,
//   'b':10
// }
// console.log(obj2)

// const obj3 = new Object();
// obj3.a=5
// obj3.b=10
// console.log(obj3)

