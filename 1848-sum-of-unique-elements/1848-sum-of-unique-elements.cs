public class Solution {
    public int SumOfUnique(int[] nums) {
        int[] check = new int[101];
        int sum=0;
        foreach(int num in nums){
            check[num]++;
            if(check[num] == 1) sum+=num;
            else if (check[num] == 2) sum-=num;
        }
        return sum;
    }
}