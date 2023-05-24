package DAY55.B1085;

import java.util.Arrays;
import java.util.Scanner;
public class Main{
    static int[] src = { 1,2,3,4,5,6,7,8 };

    /*
     * 기본 조합: 중복 X, 순서 X
     * @param nth - 몇 번째 선택인지 표현
     * @param choosed - 선택된 요소
     * @param startIdx - 몇 번째 요소부터 반복하며 선택할 것인지 표현
     */
    static void makeCombination(int nth, int[] choosed, int startIdx) {
        if(nth == choosed.length) { // 기저 조건: choosed를 다 채웠다면 끝
            System.out.println(Arrays.toString(choosed));
            return;
        }

        for(int i = startIdx; i < src.length; i++) {
            choosed[nth] = src[i];
            makeCombination(nth+1, choosed, i+1); // 중복 방지를 위한 장치: i+1
        }
    }

    public static void main(String[] args) {
        System.out.println("조합");
        makeCombination(0,new int[7], 0); // src에서 3개를 뽑아 만들 수 있는 조합을 모두 출력
    }
}
