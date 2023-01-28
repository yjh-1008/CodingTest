package DAY06.B1620;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        HashMap<String, Integer> hash = new HashMap<>();
        String name;
        for(int i=0;i<n*2-1;i++) {
            name = br.readLine();
            hash.put(name, hash.getOrDefault(name,0)+1);
        }

        for(String s: hash.keySet()) {
            if(hash.get(s) %2 != 0) {
                System.out.print(s);
                return;
            }
        }
    }
}
