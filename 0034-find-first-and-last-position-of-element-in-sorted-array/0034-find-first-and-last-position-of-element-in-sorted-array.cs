public class Solution {
    public int[] SearchRange(int[] nums, int target) {
    int[] arr1= new int[2];
     
        int index=Array.IndexOf(nums,target);
        int index2=Array.LastIndexOf(nums,target);
        arr1[0]=index;
      arr1[1]=index2;
      return arr1;
    }
}