package DAY13.B1253;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static int n, arr[],answer=0;
    public static void solution(int idx) {
        int lt=0, rt=n-1;

        while(lt<rt) {
            if(lt == idx) lt++;
            else if(rt == idx) rt--;
            else {
                if(arr[idx] > arr[lt]+arr[rt]) lt++;
                else if(arr[idx] == arr[lt]+arr[rt]){
                    answer++;
                    return;
                }
                else rt--;
            }
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        arr = new int[n];
        for(int i=0; i<n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(arr);
        for(int i=0; i<n; i++ ){
            solution(i);
        }

        System.out.print(answer);
    }
}
