public class Solution {
    public int[] BuildArray(int[] nums) {
        List<int>list1=new List<int>();
        for(int i=0;i<nums.Length;i++){
            list1.Add(nums[nums[i]]);
        }
        return list1.ToArray();
    }
}