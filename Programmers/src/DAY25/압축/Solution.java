package DAY25.압축;

import java.util.ArrayList;

public class Solution {
    public static boolean isIn(ArrayList<String> words, String word) {
        if(words.contains(word)) return true;
        return false;
    }

    public static int findIdx(ArrayList<String> words, String word, boolean isLast) {
        int idx = -1;
        //System.out.println(word);
        if(!isLast)word = word.length() >1 ? word.substring(0, word.length()-1) :word;
        for(int i=0;i<words.size();i++) {
            if(word.equals(words.get(i))) {
                idx = i;
                break;
            }
        }
        return idx+1;
    }

    public static int[] solution(String msg) {
        ArrayList<Integer> ans = new ArrayList<>();
        ArrayList<String> words = new ArrayList<>();
        for(int i='A';i<='Z';i++) {
            words.add(Character.toString(i));
        }
        int idx=0;
        int result=-1;
        StringBuilder sb = new StringBuilder();
        while(idx<msg.length()) {
            sb.append(msg.charAt(idx));
            if(isIn(words, sb.toString())) {
                result = findIdx(words, sb.toString(), true);
                idx+=1;
            }else {
                words.add(sb.toString());
                //System.out.println(sb.toString()+" "+idx);
                result = findIdx(words, sb.toString(), false);
                ans.add(result);
                sb = new StringBuilder();
            }
        }
        ans.add(result);
        int [] answer = new int[ans.size()];
        for(int i=0;i<ans.size();i++) {
            answer[i] = ans.get(i);
            System.out.print(answer[i]+" ");
        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.print(solution(
                "TOBEORNOTTOBEORTOBEORNOT"
                ));
    }
}
