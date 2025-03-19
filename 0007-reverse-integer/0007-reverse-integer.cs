public class Solution {
    public int Reverse(int x) {
        bool checkNeg = x < 0; 
        long absl = Math.Abs((long)x);
        
        string a = absl.ToString();
        char[] arr = a.ToCharArray();
        Array.Reverse(arr); 
        
        long result;
        if (long.TryParse(new string(arr), out result)) {
            long finalResult = checkNeg ? -result : result;

     
            if (finalResult <= int.MaxValue && finalResult >= int.MinValue) {
                return (int)finalResult; 
            }
        }
       
        return 0; 
    }
}
