package DAY10.B13414;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args)throws IOException {
        int n, l;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] cmd = br.readLine().split(" ");
        n = Integer.parseInt(cmd[0]);
        l = Integer.parseInt(cmd[1]);
        LinkedHashSet<String> answer = new LinkedHashSet<>();
        StringBuilder sb = new StringBuilder();

        for(int i=0; i<l; i++) {
            String num = br.readLine();
            answer.remove(num);
            answer.add(num);
        }
        Iterator<String> set = answer.iterator();
        int count = 0;
        while(set.hasNext() && count < n) {
            sb.append(set.next()+"\n");
            count++;
        }

        System.out.print(sb);
    }
}
