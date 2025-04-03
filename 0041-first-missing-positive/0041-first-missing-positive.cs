public class Solution {
    public int FirstMissingPositive(int[] nums) {
        int num=1;
        Array.Sort(nums);
        for(int i=0;i<nums.Length;i++){
            if(nums[i]>0){
               if(nums[i]==num){
                 num+=1;
               }
            }
        }
        return num;
    }
}