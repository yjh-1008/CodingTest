package DAY03;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.StringTokenizer;

public class B2531 {
    static int N,d,k,c, arr[], answer=0, lt=0,rt,selected[],count=0;
    static ArrayList<Integer> list = new ArrayList<>();
    public static void chk() {
        //k에 맞는지 확인한다.
        //k에 맞다면 추가 초밥이 발행
        if(count >= answer) {
            if(selected[c] == 0) {
                answer = count+1;
            }else {
                answer = count;
            }
        }
    }
    public static void solution() {
        for(rt=0; rt<N ;rt++) {
            if(selected[arr[rt]] == 1){
                count--;
            }
            selected[arr[rt]]--;
            if(selected[arr[(rt+k)%N]]==0){
                count++;
            }
            selected[arr[(rt+k)%N]]++;
            chk();
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        d = Integer.parseInt(st.nextToken());
        k = Integer.parseInt(st.nextToken());
        c = Integer.parseInt(st.nextToken());
        arr = new int[N];
        selected= new int[d+1];
        for(int i=0;i<N;i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }
        for(int i=0; i<k ;i++) {
            if(selected[arr[i]]==0){
                count++;
            }
            selected[arr[i]]++;
            chk();
        }
        solution();
        System.out.println(answer);
    }
}
