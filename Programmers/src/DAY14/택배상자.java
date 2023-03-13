package DAY14;

import java.util.Stack;

public class 택배상자 {
    public static int solution(int[] order) {
        int answer = 0;
        int idx = 0;
        int orderIdx = 0;
        int arr[] = new int[order.length];
        for (int i = 0; i < order.length; i++) {
            arr[i] = i + 1;
        }
        Stack<Integer> stack = new Stack<>();
        while (idx < order.length) {
            if (arr[idx] != order[orderIdx]) {
                if (stack.isEmpty()) {
                    stack.push(arr[idx]);
                    idx += 1;
                } else {
                    if (stack.peek() == order[orderIdx]) {
                        stack.pop();
                        orderIdx+=1;
                        answer += 1;
                    } else {
                        stack.push(arr[idx]);
                        idx += 1;
                    }
                }
            } else {
                orderIdx += 1;
                answer += 1;
                idx += 1;
            }
        }

        while (!stack.isEmpty() && orderIdx < order.length) {
            if (stack.peek() == order[orderIdx]) {
                stack.pop();
                orderIdx += 1;
                answer += 1;
            } else {
                break;
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.print(solution(new int[]{3,2,1,4,5}));
    }
}
