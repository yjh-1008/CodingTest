package DAY28.모음사전;

import java.util.ArrayList;
import java.util.List;

public class Solution {
    static List<String> list;
    static String vowel[] = {"A","E","I","O","U"};
    public static void dp(String str, int depth) {
        list.add(str);

        if(depth == 5) {
            return;
        }

        for(int i=0;i< vowel.length;i++){
            dp(str+vowel[i],depth+1);
        }
    }
    public static int solution(String word) {
        int answer = 0;
        list = new ArrayList<>();
        dp("", 0);

        for(int i=0;i<list.size();i++) {
            if(list.get(i).equals(word)) {
                answer = i;
                break;
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.print(solution("AAAAE"
        ));
    }
}
