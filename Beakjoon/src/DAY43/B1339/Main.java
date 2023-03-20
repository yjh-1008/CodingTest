package DAY43.B1339;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class Main {
    static int n;
    static int answer = Integer.MIN_VALUE;
    static String[] arr;
    static ArrayList<Character> lists = new ArrayList<>();
    public static void chkNum(int[] nums, String[] arr) {
        int sum = 0;
        for(String s: arr) {
            StringBuilder str = new StringBuilder();
            for(char c: s.toCharArray()) {
                int idx = lists.indexOf(c);
                str.append(nums[idx]);
            }
            sum+= Integer.parseInt(str.toString());
        }
        if(answer < sum) answer = sum;
    }
    public static void dp(boolean[] visited, int[] nums, int len,int num) {
        if(num == len) {
            chkNum(nums, arr);
            return;
        }

        for(int i=0;i<=9;i++) {
            if(visited[i]) continue;
            visited[i] = true;
            nums[num] = i;
            dp(visited, nums, len, num+1);
            nums[num] = 0;
            visited[i] = false;
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());
        boolean[] visited = new boolean[10];
        arr = new String[n];
        for(int i=0;i<n;i++) {
            arr[i]= br.readLine();
            for(char c: arr[i].toCharArray()) {
                if(!lists.contains(c)) lists.add(c);
            }
        }
        int len = lists.size();
        Collections.sort(lists);
        int nums[] = new int[len];
        dp(visited, nums,len,0);
        System.out.print(answer);
    }
}
