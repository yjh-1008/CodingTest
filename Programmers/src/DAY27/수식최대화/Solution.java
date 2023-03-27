package DAY27.수식최대화;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Stack;
import java.util.StringTokenizer;

public class Solution {

    private static String calc(String num1, String op, String num2) {
        long o1 = Long.parseLong(num1);
        long o2 = Long.parseLong(num2);

        if (op.equals("+"))
            return o1 + o2 + "";
        else if (op.equals("-"))
            return o1 - o2 + "";

        return o1 * o2 + "";
    }

    public static long solution(String expression) {
        long answer = Long.MIN_VALUE;
        String op[][] = { { "+", "-", "*" }, { "+", "*", "-" }, { "-", "*", "+" },
                { "-", "+", "*" }, { "*", "-", "+" }, { "*", "+", "-" } };

        ArrayList<String> list = new ArrayList<String>();
        int start = 0;
        for (int i = 0; i < expression.length(); i++) {
            if (expression.charAt(i) == '-' || expression.charAt(i) == '+' || expression.charAt(i) == '*') {
                list.add(expression.substring(start, i)); // 연산자 앞 숫자 추가
                list.add(expression.charAt(i) + ""); // 연산자 추가
                start = i + 1;
            }
        }
        list.add(expression.substring(start)); // 마지막 숫자 추가

        for (int i = 0; i < op.length; i++) {
            ArrayList<String> cal_list = new ArrayList<String>(list);
            for (int k = 0; k < 3; k++) {
                for (int j = 0; j < cal_list.size(); j++) {
                    if (op[i][k].equals(cal_list.get(j))) {
                        cal_list.set(j - 1,
                                calc(cal_list.get(j - 1), cal_list.get(j), cal_list.get(j + 1))
                        );
                        cal_list.remove(j);
                        cal_list.remove(j);
                        j--;
                    }
                }
            }
            answer = Math.max(answer, Math.abs(Long.parseLong(cal_list.get(0))));
        }

        return answer;
    }
    public static void main(String[] args) {
        System.out.println(solution(
                "100-200*300-500+20"
        ));
    }
}
