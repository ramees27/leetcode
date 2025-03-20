public class Solution {
    public int MinimizedStringLength(string s) {
        // List<char> word=new List<char>;
        var a=s.Distinct();
     
        return a.Count();

    }
}