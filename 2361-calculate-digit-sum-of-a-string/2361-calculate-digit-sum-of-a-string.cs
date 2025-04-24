public class Solution {
    public string DigitSum(string s, int k) {
       while (s.Length > k)
        {
            List<string> list1 = new List<string>();
            for (int i = 0; i < s.Length; i += k)
            {
                int length = Math.Min(k, s.Length - i);
                list1.Add(s.Substring(i, length));
            }

            s = string.Join("", list1.Select(x => 
                x.Sum(c => c - '0').ToString()
            ));
        }

        return s;

      
    }
}