package DAY18.숫자블록;

public class Solution {
    public static  int[] solution(long begin, long end) {
        int beInt = (int) begin;
        int endInt = (int) end;
        int arr[] = new int[endInt- beInt +1];
        for(int i=beInt; i<=endInt;i++) {
            if(i == 1) {
                arr[i-beInt] = 0;
                continue;
            }
            boolean chk = false;
            for(int j=2;j*j<=i;j++) {
                if(i%j == 0 ) {
                    if(i/j <= 10000000) {
                        arr[i-beInt] = i/j;
                    }else {
                        arr[i-beInt] = j;

                    }

                    chk = true;
                    break;
                }
            }

            if(!chk) arr[i-beInt] = 1;
        }
        for(int a: arr){
            System.out.print(a+" ");
        }
        return arr;
    }
    public static void main(String[] args) {
        solution(100000014, 100000016);
    }
}
