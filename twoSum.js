/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // return indices
    // each input only 1 solution
    // each element used once only
    // return answer in any order

    for(let i=0; i<nums.length; i++) {
        for(let j=1; j<nums.length; j++) {
            if(nums[i]+nums[j]===target && j!==i) {
                return [i,j]
                }
            }
        }
    }
console.log(twoSum([2,5,5,11], 10))
