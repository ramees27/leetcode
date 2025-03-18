public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        List<int>num= new List<int>();
        for(int i=0;i<nums.Length;i++){
            for(int k=i+1;k<nums.Length;k++){
                if(nums[i]+nums[k]==target){
                    num.Add(i);
                    num.Add(k);
                }
            }
        }
        return num.ToArray();
    }
}