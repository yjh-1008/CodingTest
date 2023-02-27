package DAY29.B2504;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str[] = br.readLine().split("");
        Stack<String> stack = new Stack<>();
        long answer = 0;
        long mul = 1;
        for(int i=0;i<str.length;i++) {
            if(str[i].equals("(")) {
                stack.push(str[i]);
                mul*=2;
            }else if(str[i].equals("[")) {
                stack.push(str[i]);
                mul*=3;
            } else if(str[i].equals(")")) {
                if(stack.isEmpty() || !stack.peek().equals("(")) {
                    System.out.println(0);
                    return;
                }
                if(str[i-1].equals("(")) {
                    answer +=mul;
                }
                stack.pop();
                mul/=2;
            }else if(str[i].equals("]")) {
                if(stack.isEmpty() || !stack.peek().equals("[")) {
                    System.out.println(0);
                    return;
                }
                if(str[i-1].equals("[")) {
                    answer +=mul;
                }
                stack.pop();
                mul/=3;
            }
        }
        if(!stack.isEmpty()) System.out.println(0);
        else System.out.println(answer);
    }
}
