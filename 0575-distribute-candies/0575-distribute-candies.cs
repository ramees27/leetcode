public class Solution {
    public int DistributeCandies(int[] candyType) {
      int unique=candyType.Distinct().Count();
      int maxAllowed= candyType.Length/2;
            return Math.Min(unique,maxAllowed);
        
    }
}