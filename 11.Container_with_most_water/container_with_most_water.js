/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * solution in O(n^2)
 */
var maxArea = function(height) {
  let result = 0;
  for(let i = 0; i < height.length; i++) {
    for(let j = i + 1; j < height.length; j++) {
      result = Math.max(
        result,
        Math.min(height[i], height[j]) * (j - i)
      );
    }
  }
  return result;
};

/**
 * solution in O(n)
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while(left < right) {
    result = Math.max(
      result,
      Math.min(height[left], height[right]) * (right - left)
    );
    if(height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};
