package DAY12.B4358;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        TreeMap<String, Integer> tree = new TreeMap<>();
        String str = br.readLine();
        int kinds=0;
        while(true) {
            tree.put(str, tree.getOrDefault(str,0)+1);
            kinds++;
            str = br.readLine();
            if(str == null || str.length()==0){
                break;
            }
        }

        for(String s: tree.keySet()) {
            double rate = (double)(tree.get(s)*100.0)/kinds;
            sb.append(s+" "+String.format("%.4f",rate)+"\n");
        }
        System.out.print(sb);
    }
}
