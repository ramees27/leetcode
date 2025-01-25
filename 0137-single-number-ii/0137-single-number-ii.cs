public class Solution {
    public int SingleNumber(int[] nums) {
        for(int i=0;i<nums.Length;i++){
            if(Array.IndexOf(nums, nums[i]) == Array.LastIndexOf(nums, nums[i])){
                return nums[i];
            }
        }
         throw new ArgumentException("No unique element found");
        
    }
}