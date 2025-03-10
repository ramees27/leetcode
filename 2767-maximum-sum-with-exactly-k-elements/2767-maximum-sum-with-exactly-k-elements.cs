public class Solution {
    public int MaximizeSum(int[] nums, int k) {
         int maximum = nums.Max();
        int ab = maximum;
        for(int i=1; i<k; i++)
        {
            maximum += 1;
            ab += maximum;
        }
        return ab;
    }
    
}