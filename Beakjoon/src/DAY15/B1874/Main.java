package DAY15.B1874;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class Main {
    public static void solution(int[] a, int n) {
        StringBuilder sb = new StringBuilder();
        Stack<Integer> answer = new Stack<>();
        int count =1;
        for(int i=1; i<=n; i++) {
            answer.push(i);
            sb.append("+").append("\n");
            while(!answer.isEmpty() && answer.peek()==a[count]) {
                count++;
                answer.pop();
                sb.append("-").append("\n");
            }
        }
        if(answer.isEmpty()) System.out.print(sb);
        else System.out.print("NO");
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] a= new int[n+1];
        for(int i=1; i<=n; i++) {
            a[i] = Integer.parseInt(br.readLine());
        }

        solution(a,n);
    }
}
