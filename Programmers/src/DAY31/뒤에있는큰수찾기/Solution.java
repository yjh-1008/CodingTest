package DAY31.뒤에있는큰수찾기;

import java.util.Stack;

public class Solution {
    static class Data {
        int num;
        int idx;

        public Data(int num, int idx) {
            this.num = num;
            this.idx = idx;
        }
    }

    public static int[] solution(int[] numbers) {
        int[] answer = new int[numbers.length];
        int lt=0,rt=0;
        int n = numbers.length;
        int index =0;
        Stack<Data> stack = new Stack<>();
        while(index < n) {
            System.out.println(index);
            if(index ==0) {
                stack.add(new Data(numbers[index], index));
                index +=1;
            }else {
                if(stack.peek().num < numbers[index]) {
                    while(!stack.isEmpty()) {
                        if(stack.peek().num < numbers[index]) {
                            Data d = stack.pop();
                            answer[d.idx] = numbers[index];
                        }else {
                            break;
                        }
                    }
                }
                stack.add(new Data(numbers[index], index));
                index+=1;
            }
        }
        while(!stack.isEmpty()) {
            Data d = stack.pop();
            answer[d.idx] = -1;
        }
        for(int a: answer){
            System.out.print(a+" ");
        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.print(
                solution(
                        new int[]{9, 1, 5, 3, 6, 2}
                )
        );
    }
}
