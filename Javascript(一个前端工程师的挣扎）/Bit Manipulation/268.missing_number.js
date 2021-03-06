// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
// 看到提示还有tag就知道了这是miss knowledge的一道题，直接看discuss
// a ^ b ^ b = a
// AMAZON高频题
var missingNumber = function(nums) {
    if (nums.length === 0 || nums === null) return 0;
    let xor = 0;
    let i = 0
    for (; i < nums.length; i++) {
        xor = xor ^ i ^ nums[i];
    }
    return xor ^ i;
};

// What about the Amazon follow up? If this array contains duplicate-s, means may be we are missing more than 1 numbers?

// One common follow up in Amazon : the input array is sorted and find the missing number. Below is the version using binary search. The idea is to find the first number such that index != nums[index]