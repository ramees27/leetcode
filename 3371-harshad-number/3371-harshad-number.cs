public class Solution {
    public int SumOfTheDigitsOfHarshadNumber(int x) 
    {
        int i = 0 , sum = 0, a = x;
        while ( x != 0 )
{
    int Mod = x % 10;
    sum += Mod;
    x = x / 10;
}
if(a % sum == 0)
{
  return sum;
}else{
    return -1;
}
    }

}