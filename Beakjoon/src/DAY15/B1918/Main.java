package DAY15.B1918;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {
    public static int priority(String s) {
        if(s.equals("+") || s.equals("-")) return 1;
        else if(s.equals("*") || s.equals("/")) return 2;
        else return 0;
    }

    public static void solution(String[] arr) {
        StringBuilder sb = new StringBuilder();
        Stack<String> stack = new Stack<>();

        for(String s: arr) {
            switch(s) {
                case "+":
                case "-":
                case "*":
                case "/":
                    while(!stack.isEmpty() && priority(s) <= priority(stack.peek())) {
                        sb.append(stack.pop());
                    }
                    stack.add(s);
                    break;
                case "(":
                    stack.add(s);
                    break;
                case ")":
                    while(!stack.peek().equals("(")) {
                        sb.append(stack.pop());
                    }
                    stack.pop();
                    break;
                default:
                   sb.append(s);
            }
        }
        while(!stack.isEmpty()){
            sb.append(stack.pop());
        }
        System.out.print(sb);
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] arr = br.readLine().split("");

        solution(arr);
    }
}
