public class Solution {
    public int LengthOfLastWord(string s) {
        string [] arr1= s.Trim().Split(" ");
        return arr1[arr1.Length-1].Length;
    }
}