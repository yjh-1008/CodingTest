package DAY20.뉴스클러스터링;

import java.util.HashMap;

public class Solution {
    public static int solution(String str1, String str2) {
        float answer = 0;
        char[] arr1 = str1.toLowerCase().toCharArray();
        char[] arr2 = str2.toLowerCase().toCharArray();

        HashMap<String, Integer> hash1 = new HashMap<>();
        HashMap<String, Integer> hash2 = new HashMap<>();
        String tmp;
        float union=0;
        float intersection = 0;
        for(int i=1;i<str1.length();i++) {
            String s1 = Character.toString(arr1[i]);
            String s2 = Character.toString(arr1[i-1]);
            tmp = s2+s1;
            if(!tmp.matches("^[a-z]*$")) continue;
            hash1.put(tmp, hash1.getOrDefault(tmp, 0)+1);
        }

        for(int i=1;i<str2.length();i++) {
            String s1 = Character.toString(arr2[i]);
            String s2 = Character.toString(arr2[i-1]);
            tmp = s2+s1;
            if(!tmp.matches("^[a-z]*$")) continue;
            hash2.put(tmp, hash2.getOrDefault(tmp, 0)+1);
        }

        int sum = 0;
        for(String s: hash1.keySet()) {
            if(hash2.get(s) == null) {
                union += hash1.get(s);
            }else {
                intersection += Math.min(hash1.get(s),hash2.get(s));
                union += Math.max(hash1.get(s), hash2.get(s));
                hash2.remove(s);
            }
        }

        for(String s: hash2.keySet()) {
            union += hash2.get(s);
        }

        answer = union == 0 && intersection==0 ? 65536: intersection/union * 65536;

        return (int)answer;
    }
    public static void main(String[] args) {
        System.out.print(solution("FRANCE", "french"));
    }
}
