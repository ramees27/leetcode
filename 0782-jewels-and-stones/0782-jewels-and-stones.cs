public class Solution {
    public int NumJewelsInStones(string jewels, string stones) {
        int count=0;
        string[] CharArray=stones.Split("");
        string[] CharArray2=jewels.Split("");
        for(int i=0;i<jewels.Length;i++){
            for(int k=0;k<stones.Length;k++){
                if(jewels[i]==stones[k]){
                    count++;
                }
            }
        }
    return count;
       
    }
}