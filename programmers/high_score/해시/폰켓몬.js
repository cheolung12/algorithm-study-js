const solution = (nums) => Math.min([...new Set(nums)].length, nums.length/2)