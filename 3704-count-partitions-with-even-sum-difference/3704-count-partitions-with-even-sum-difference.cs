public class Solution {
    public int CountPartitions(int[] nums) {
      int l=0;
      int count=0;
      for(int i=0;i<nums.Length-1;i++){
        int r=0;
        l+=nums[i];
        for(int j=i+1;j<nums.Length;j++){
            r+=nums[j];
        }
        if(Math.Abs(l-r)%2==0){
            count++;
        }

      }
        return count;
    }

  
}
