package DAY05.B7785;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int N = Integer.parseInt(br.readLine());
        String name, attend;
        HashMap<String,Integer> hash = new HashMap<>();
        for(int i=0;i<N;i++) {
            st = new StringTokenizer(br.readLine());
            name = st.nextToken();
            attend = st.nextToken();

            if(attend.equals("enter")) hash.put(name, hash.getOrDefault(name,0)+1);
            else if(attend.equals("leave")) hash.put(name, hash.getOrDefault(name,0)-1);
        }

        ArrayList<String> arr = new ArrayList<>();

        for(String n: hash.keySet()) {
            if(hash.get(n) > 0) arr.add(n);
        }

        Collections.sort(arr,Collections.reverseOrder());
        for(String n: arr) {
            System.out.println(n);
        }
    }
}
