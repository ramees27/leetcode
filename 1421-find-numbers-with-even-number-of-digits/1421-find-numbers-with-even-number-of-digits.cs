public class Solution {
    public int FindNumbers(int[] nums) {
        int count=0;
        for(int i=0;i<nums.Length;i++){
            int digitCount= nums[i].ToString().Length;
            if(digitCount%2==0){
                count++;
                
            }
        }
        return count;
    }
}