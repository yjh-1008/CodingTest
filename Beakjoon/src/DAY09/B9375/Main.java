package DAY09.B9375;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        HashMap<String, Integer> hash;
        StringBuilder sb = new StringBuilder();


        for(int i=0; i<t; i++){
            int n = Integer.parseInt(br.readLine());
            String[] cloth;
            hash = new HashMap<>();
            for(int j=0 ;j<n; j++) {
                cloth = br.readLine().split(" ");
                hash.put(cloth[1], hash.getOrDefault(cloth[1], 0)+1);
            }

            int answer = 1;
            for(String s : hash.keySet()) {
                answer *= hash.get(s)+1;
            }
            sb.append(answer-1+"\n");
        }
        System.out.print(sb);
    }
}
