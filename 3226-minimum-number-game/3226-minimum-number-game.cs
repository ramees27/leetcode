public class Solution {
    public int[] NumberGame(int[] nums) {
        List<int> numberList=nums.ToList();
       var first=0;
       var second=0;
       var result=new List<int>();
       while(numberList.Count>0){
        first=numberList.Min();
        numberList.Remove(first);
        second=numberList.Min();
        numberList.Remove(second);
        result.Add(second);
        result.Add(first);

       }
       return result.ToArray();
    }
}  