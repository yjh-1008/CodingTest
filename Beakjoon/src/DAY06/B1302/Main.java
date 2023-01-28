package DAY06.B1302;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        HashMap<String, Integer> hash = new HashMap<>();
        String book, answer="";
        int count=0;
        for(int i=0; i<n; i++) {
            book = br.readLine();
            hash.put(book, hash.getOrDefault(book,0)+1);
        }

        for(String s: hash.keySet()) {
            if(hash.get(s) > count) {
                answer = s;
                count = hash.get(s);
            }else if(hash.get(s) == count) {
                if(s.compareTo(answer) < 0) {
                    answer = s;
                }
            }
        }
        System.out.print(answer);
    }
}
