package DAY02.숫자카드나누기;

import java.util.Arrays;

public class Solution {
    static int answer = 0;
    public static boolean chk(int max, int[] arr1, int[] arr2) {
        boolean result = true;
        //arr1에 있는 모든 값들을 나눌 수 있고, arr2에 있는 모든 값들을 나눌 수 없으면
        // true리턴 안된다면 false 리턴.
        for(int a : arr1) {if(a%max != 0){return false;}}
        for(int b: arr2){ if(b%max ==0) return false;}
        return true;
    }
    public static  int solution(int[] arrayA, int[] arrayB) {
        //오름차순으로 정렬
        //가장 큰 값은 두 배열 중 가장 큰 값.
        Arrays.sort(arrayA);
        Arrays.sort(arrayB);
        int maxValue = Math.max(arrayA[0],arrayB[0]);
        while(maxValue > 1) {
            if(chk(maxValue, arrayA, arrayB) || chk(maxValue, arrayB, arrayA)) {
                answer = Math.max(maxValue, answer);
            }
            maxValue--;
        }
        return answer;
    }
    public static void main(String[] args) {
        //영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고,
        // 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
        System.out.print(solution(new int[]{10,20}, new int[]{5,17}));
    }
}
