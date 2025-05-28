public class Solution {
    public int DifferenceOfSums(int n, int m) {
        int nSum=0;
        int mSum=0;
        for(int i=1;i<=n;i++){
          
          if(i%m!=0){
             mSum+=i;
          }
          else{
            nSum+=i;
          }
        }
        return mSum-nSum;
    }
}