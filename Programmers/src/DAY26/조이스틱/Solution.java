package DAY26.조이스틱;

import java.util.Arrays;

public class Solution {


    public static int[] solution(String s) {
        int[] answer = {};
        String[] split = s.split("\\},\\{");
        split[0] = split[0].replaceAll("[{}]","");
        split[split.length-1] = split[split.length-1].replaceAll("[{}]","");
        for(String a: split){
            System.out.println(a);
        }
        return answer;
    }
    public static void main(String[] args) {
        System.out.println(solution(
                "{{2},{2,1},{2,1,3},{2,1,3,4}}"
            ));
    }
}
