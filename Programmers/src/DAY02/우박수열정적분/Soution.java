package DAY02.우박수열정적분;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class Soution {
    static ArrayList<Integer> arr = new ArrayList<>();
    static ArrayList<Double> area = new ArrayList<>();
    static ArrayList<Double> answers = new ArrayList<>();
    static public void collatz(int k) {
        arr.add(k);
        //결과로 나온 수가 1보다 크다면 1번 작업을 반복합니다.
        while(k > 1){
            //입력된 수가 짝수라면 2로 나눕니다
            if(k%2 == 0) k = k/2;
            //입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
            else k = k*3+1;
            arr.add(k);
        }
    }
    public static void getArea() {
        for(int i=0; i<arr.size()-1; i++) {
            //넓이 = 사다리꼴 넓이 공식.
            area.add(((double) arr.get(i)+arr.get(i+1))/2);
        }
    }
    static public double[] solution(int k, int[][] ranges) {
        double[] answer = {};
        collatz(k);
        getArea();//각 구간의 넓이를 구한다.
        int idx=0;
        //범위 = [ranges[0][i], arr.length()-1 - ranges[1][i])
        for(int[] range : ranges) {
            //시작점이 끝점보다 크다면 -1
            int start = range[0];
            int end = area.size()+range[1];
            if(start > end) answers.add(-1.0);
            else if(start == end)  answers.add(0.0);
            else {
                double sum = 0.0;
                end--;
                for(int i= start; i<=end;i++){
                    sum += area.get(i);
                }
                answers.add(sum);
            }
        }
        answer = new double[answers.size()];
        for(int i=0; i<answer.length;i++){
            answer[i] = answers.get(i);
        }

        return answer;
    }

    public static void main(String[] args) {
        double[] answer =solution(5, new int[][] {{0,0},{0,-1},{2,-3},{3,-3}});
        System.out.println(Arrays.toString(answer));
    }
}
