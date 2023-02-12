package DAY18.B2331;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    public static void solution(ArrayList<String> list, int p) {
        int idx=0;
        while(true) {
            String[] tmp = list.get(idx++).split("");
            long sum=0;
            for(String s: tmp) {
                sum += Math.pow(Long.parseLong(s),p);
            }
            if(list.contains(Long.toString(sum))){
                System.out.print(list.indexOf(Long.toString(sum)));
                break;
            }
            list.add(Long.toString(sum));
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        String a = st.nextToken();
        int p = Integer.parseInt(st.nextToken());
        ArrayList<String> list = new ArrayList<>();

        list.add(a);
        solution(list,p);
    }
}
