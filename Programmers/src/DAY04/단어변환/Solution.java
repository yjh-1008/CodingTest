package DAY04.단어변환;

import java.util.*;
class Solution {
    static boolean chk[];
    static int n;
    static class Word {
        String s;
        int idx;
        Word(String s, int idx) {
            this.s = s;
            this.idx = idx;
        }
    }
    public static boolean stringChk(String tmp1, String tmp2) {
        boolean strChk = false;
        for(int i=0;i<tmp1.length();i++) {
            if(!strChk && tmp1.charAt(i) != tmp2.charAt(i)) {
                strChk = true;
            } else if(strChk && tmp1.charAt(i) != tmp2.charAt(i)) {
                return false;
            }
        }
        return true;
    }

    public static int bfs(String begin, String arget, String[] words, String target) {
        Queue<Word> q = new LinkedList<>();
        q.offer(new Word(begin,0));
        while(!q.isEmpty()) {
            Word w = q.poll();
            if(w.s.equals(target)) {
                return w.idx;
            }
            for(int i=0;i<n;i++) {
                if(chk[i]) continue;
                if(stringChk(words[i], w.s)) {
                    chk[i] = true;
                    q.offer(new Word(words[i],w.idx+1));
                }
            }
        }
        return 0;
    }

    public int solution(String begin, String target, String[] words) {
        int answer = 0;
        n = words.length;
        chk = new boolean[n];
        boolean wc = false ;
        for(String s: words) {
            if(target.equals(s)) {
                wc = true;
                break;
            }
        }
        if(!wc) return answer;

        answer = bfs(begin, target, words,target);
        return answer;
    }
}
