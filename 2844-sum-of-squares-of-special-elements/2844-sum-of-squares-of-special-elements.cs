public class Solution {
    public int SumOfSquares(int[] nums) {
        var sum=0;
        for(int i=1;i<=nums.Length;i++){
            if(nums.Length%i==0){
                sum+=nums[i-1]*nums[i-1];
            }
        }
        return sum;
    }
}