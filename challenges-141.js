// 88. Merge Sorted Array
// //Medium Tricky Question
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

var merge = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
};

// explanantion to avoid confusion for p2 >= n:
// Step-by-step:

// 1. Pick 1 (nums1Copy) → p1=1, p2=0
// 2. Pick 2 (nums2) → p1=1, p2=1
// 3. Pick 3 (nums2) → p1=1, p2=2
// 4. Pick 4 (nums1Copy) → p1=2, p2=2
// 5. Pick 5 (nums2) → p1=2, p2=3 (now p2 = n)

// Now p2 >= n → always true in the if, so we keep taking from nums1Copy until loop ends.

// 💡 In short:
// p2 >= n = “nums2 is empty now, so take from nums1Copy regardless of comparison.”

// Now about p1 >= m
// Once p1 is equal to or greater than m:

// We’ve taken all m valid elements from nums1Copy.

// The condition (p1 < m && nums1Copy[p1] < nums2[p2]) becomes false automatically because p1 < m fails.

// This forces the else branch → we take from nums2 until it’s empty.

// 💡 In short:

// p1 >= m → nums1Copy is empty → always take from nums2.
// p2 >= n → nums2 is empty → always take from nums1Copy.
