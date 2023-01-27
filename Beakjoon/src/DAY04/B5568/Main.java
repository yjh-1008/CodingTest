package DAY04.B5568;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    static int N,k;
    static String arr[];
    static boolean arrChk[];
    static ArrayList<String> strList = new ArrayList<>();
    public static void solution(String str,int cnt) {
        if(cnt ==k){
            if(!strList.contains(str))  strList.add(str);
        }
        for(int i=0;i<N;i++) {
            if(!arrChk[i]) {
                arrChk[i] = true;
                String tmp = str + arr[i];
                solution(tmp,cnt+1);
                arrChk[i] = false;
            }
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        k = Integer.parseInt(br.readLine());
        arr = new String[N];
        arrChk = new boolean[N];
        for(int i=0; i<N; i++) {
            arr[i] = br.readLine();
        }
        solution("",0);
        System.out.println(strList.size());
    }
}
