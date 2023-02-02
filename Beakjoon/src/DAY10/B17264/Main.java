package DAY10.B17264;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {
    static String answer[] = {"I AM NOT IRONMAN!!", "I AM IRONMAN!!"};
    public static void main(String[] args)throws IOException {
        int n, p, score=0,winScore, loseScore, upScore, totalScore = 0;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        p = Integer.parseInt(st.nextToken());

        st = new StringTokenizer(br.readLine());
        winScore = Integer.parseInt(st.nextToken());
        loseScore = Integer.parseInt(st.nextToken());
        upScore = Integer.parseInt(st.nextToken());

        Set<String> winP = new HashSet<>();
        for(int i=0; i<p; i++) {
            String[] cmd = br.readLine().split(" ");
            if(cmd[1].equals("W")) winP.add(cmd[0]);
        }
        boolean chk = false;
        for(int i=0; i<n; i++) {
            if(winP.contains(br.readLine())) {
                totalScore += winScore;
            }else {
                totalScore -= loseScore;
                if(totalScore - loseScore <= 0) totalScore = 0;
            }
            if(totalScore >= upScore) {
                System.out.print(answer[0]);
                chk = true;
                break;
            }

        }
        if(!chk)System.out.print(answer[1]);
    }
}
