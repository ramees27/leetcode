public class Solution {
    public IList<string> StringMatching(string[] words) {
        List <string> Result=new List<string>();
        foreach(var word in words){
            foreach(var NewWord in words){
                if(NewWord.Contains(word)&&NewWord!=word){
                    Result.Add(word);
                }
            }
        }
        return Result.Distinct().ToList();

    }
}