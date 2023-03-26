package DAY49.B1644;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> lists = new ArrayList<>();
        int n= sc.nextInt();
        int answer=0;
        boolean arr[] = new boolean[n+1];
        arr[0] = true;
        arr[1] = true;
        for(int i=2;i<=n;i++) {
            if(arr[i]) continue;
            lists.add(i);
            for(int j=i+i;j<=n;j+=i) {
                arr[j] = true;
            }
        }

        int start=0, end=0, sum=0, count=0;
        while(true) {
            if(sum >= n ) sum -= lists.get(start++);
            else if(end == lists.size()) break;
            else sum += lists.get(end++);
            if(n==sum) count++;
        }


        System.out.print(count);
    }
}
