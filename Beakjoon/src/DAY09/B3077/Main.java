package DAY09.B3077;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int n = Integer.parseInt(br.readLine());
        int total = n*(n-1)/2;
        int count =0;
        HashMap<String, Integer> answers = new HashMap<>();
        String submit[] = new String[n];

        st = new StringTokenizer(br.readLine());
        for(int i=0; i<n; i++){
            answers.put(st.nextToken(), i);
        }

        st = new StringTokenizer(br.readLine());
        for(int i=0; i<n; i++){
            submit[i] = st.nextToken();
        }

        for(int i=0; i<n-1; i++) {
            for(int j=i+1; j<n; j++) {
                if(answers.get(submit[i]) < answers.get(submit[j])) count++;
            }
        }

        System.out.print(count+"/"+total);
    }
}
