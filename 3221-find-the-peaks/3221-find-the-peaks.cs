public class Solution {
    public IList<int> FindPeaks(int[] mountain) {
        List<int> res = new List<int>();
        for(int i = 1; i < mountain.Length - 1; i++)
        {
            if(mountain[i] > mountain[i + 1] && mountain[i] > mountain[i - 1])
                res.Add(i);
        }
        return res;
    
    }
}