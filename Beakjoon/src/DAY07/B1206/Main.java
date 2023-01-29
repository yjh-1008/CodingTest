package DAY07.B1206;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n,m;
        Set<Integer> arr1 = new HashSet<>(), arr2 = new HashSet<>();
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(br.readLine());
        for(int i=0;i<n;i++) {
            arr1.add(Integer.parseInt(st.nextToken()));
        }

        st = new StringTokenizer(br.readLine());
        for(int i=0;i<m;i++) {
            arr2.add(Integer.parseInt(st.nextToken()));
        }
        int count=0;
        for(int a: arr1) {
            if(arr2.contains(a)) count+=2;
        }

        System.out.print(arr1.size()+arr2.size()-count);
    }
}
