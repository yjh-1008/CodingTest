package DAY08.B2776;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.StringTokenizer;

public class Main {
    static StringBuilder sb = new StringBuilder();
    public static void solution(HashSet<Integer> arr1, List<Integer> arr2) {
        for(int a: arr2) {
            if(arr1.contains(a)) sb.append(1+"\n");
            else sb.append(0+"\n");
        }
    }


    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int t = Integer.parseInt(br.readLine());

        for(int i=0; i<t; i++) {
            int n,m;
            List<Integer> arr2 =  new ArrayList<>();
            HashSet<Integer> arr1 = new HashSet<>();
            n = Integer.parseInt(br.readLine());
            st = new StringTokenizer(br.readLine());
            while(st.hasMoreTokens()){
                arr1.add(Integer.parseInt(st.nextToken()));
            }

            m = Integer.parseInt(br.readLine());
            st = new StringTokenizer(br.readLine());
            while(st.hasMoreTokens()){
                arr2.add(Integer.parseInt(st.nextToken()));
            }

            solution(arr1, arr2);
        }
        System.out.print(sb);
    }
}
