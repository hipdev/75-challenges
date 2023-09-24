/* 
Exercise #1 - Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

// This is a O(n) solution
function twoSum(nums: number[], target: number): number[] | null {
  // Create a map to store the indices of the elements
  const indexMap: { [key: number]: number } = {};

  // Iterate over the elements of the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Calculate the difference between the target and the current number
    const diff = target - num;

    // If the difference is found in the map, return the indices
    if (diff in indexMap) {
      return [indexMap[diff], i];
    }

    // Otherwise, store the current number and it's index in the map
    indexMap[num] = i;
  }

  // No solution found
  return null;
}

// Alternative solution with time complexity O(nlogn) :

function twoSumAlternative(
  nums: number[],
  target: number
): [number, number] | null {
  // Create pairs of numbers and their original indices
  const indexedNums = nums.map((num, index) => ({ num, index }));

  console.log(indexedNums, "indexed nums");

  // Sort the pairs based on the numbers
  indexedNums.sort((a, b) => a.num - b.num);

  let left = 0;
  let right = indexedNums.length - 1;

  while (left < right) {
    const sum = indexedNums[left].num + indexedNums[right].num;

    if (sum === target) {
      return [indexedNums[left].index, indexedNums[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // Outputs: [0, 1]
console.log(twoSumAlternative(nums, target)); // Outputs: [0, 1]

/* Complexity Analysis: */
// First solution wins: The hashmap method is faster in terms of time complexity.
// In the second solution, sorting makes the time complexity O(nlogn) and the space complexity O(n).
