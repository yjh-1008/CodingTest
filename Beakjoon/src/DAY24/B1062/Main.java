package DAY24.B1062;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int answer=0;
    public static void dfs(String[] words, boolean[] visited, int count, int n, int k,int index) {
        if(count == k ){
            int wCount = 0;
            for(String w: words) {
                boolean chk = true;
                for(int i=0;i<w.length(); i++) {
                    int idx = (int)w.charAt(i)-97;
                    if(!visited[idx]) {
                        chk = false;
                        break;
                    }
                }
                if(chk) wCount+=1;
            }
            if(answer<wCount) answer = wCount;
            return;
        }

        for(int i=index+1;i<26;i++) {
            if(!visited[i]) {
                visited[i] = true;
                dfs(words, visited, count+1,n,k,i);
                visited[i] = false;
            }
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        if(k < 5) {
            System.out.print(0);
            return;
        }else if(k==26) {
            System.out.print(n);
            return;
        }

        String words[] = new String[n];
        String word;
        boolean visited[] = new boolean[26];
        visited[0] = true; //a
        visited[2] = true;
        visited[110-97] = true; //n
        visited[116-97] = true;
        visited[105-97] = true;
        for(int i=0;i<n;i++) {
            word = br.readLine().replace("anta","").replace("tica","");
            words[i] = word;
        }

        dfs(words, visited, 5,n,k,0);
        System.out.println(answer);
    }
}
