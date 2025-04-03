using System;
using System.Collections.Generic;

public class Solution {
    public bool IsPossibleToSplit(int[] nums) {
        List<int> nums1 = new List<int>();
        List<int> nums2 = new List<int>();

        Array.Sort(nums);

        foreach (int num in nums) {
            if (!nums1.Contains(num)) {
                nums1.Add(num);
            } else if (!nums2.Contains(num)) {
                nums2.Add(num);
            } else {
                return false; 
            }
        }

        return true;
    }
}
