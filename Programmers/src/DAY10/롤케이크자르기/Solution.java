package DAY10.롤케이크자르기;

import java.util.HashMap;

public class Solution {
    public static int solution(int[] topping) {
        int answer = 0;
        HashMap<Integer, Integer> hash1 = new HashMap<>();
        HashMap<Integer, Integer> hash2 = new HashMap<>();
        for(int t: topping) {
            hash2.put(t, hash2.getOrDefault(t, 0)+1);
        }

        for(int t: topping) {
            hash1.put(t, hash1.getOrDefault(t, 0)+1);
            if(hash2.get(t) == 1) {
                hash2.remove(t);
            }else {
                hash2.put(t, hash2.get(t)-1);
            }

            if(hash1.keySet().size() == hash2.keySet().size()) answer++;
        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.print(solution(new int[]{1,2,3,1,4}));
    }
}
