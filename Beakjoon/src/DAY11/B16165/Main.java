package DAY11.B16165;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Main {
    static  StringBuilder sb = new StringBuilder();
    public static void memberName(String qus, Map<String, String[]> map) {

        for(String s: map.get(qus)) {
            sb.append(s+"\n");
        }
    }

    public static void groupName(String qus, Map<String, String[]> map) {
        for(String group: map.keySet()) {
           for(String members: map.get(group)) {
               if(members.equals(qus)) {
                   sb.append(group+"\n");
                   return;
               }
           }
        }
    }


    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n,m;
        String[] s = br.readLine().split(" ");
        Map<String, String[]> map = new HashMap<>();
        n = Integer.parseInt(s[0]);
        m = Integer.parseInt(s[1]);
        for(int i=0 ; i<n; i++) {
            String name = br.readLine();
            int memberN = Integer.parseInt(br.readLine());
            String members[] = new String[memberN];
            for(int j=0; j<memberN; j++) {
                members[j] = br.readLine();
            }
            Arrays.sort(members);
            map.put(name, members);
        }

        for(int i=0; i<m; i++) {
            String qus = br.readLine();
            String kind = br.readLine();
            if(kind.equals("0")) memberName(qus, map);
            else if(kind.equals("1")) groupName(qus, map);
        }

        System.out.print(sb);
    }
}
