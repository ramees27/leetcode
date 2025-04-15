public class Solution {
    public int FindClosest(int x, int y, int z) {
        int diff1=z-x;
        int diff2=z-y;
        int num1=Math.Abs(diff1);
        int num2=Math.Abs(diff2);
       if(num1<num2){
        return 1;
       }
       else if(num1>num2){
        return 2;
       }
       else{
        return 0;
       };
    }
}