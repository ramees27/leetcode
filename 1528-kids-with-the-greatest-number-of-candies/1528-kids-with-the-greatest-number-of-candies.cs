public class Solution {
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies) {
       bool [] arr1= new bool[candies.Length];
       int Maximum=candies.Max();
       for(int i=0;i<candies.Length;i++){
        arr1[i]=candies[i] + extraCandies>=Maximum;
       }
       return arr1;
    }
}