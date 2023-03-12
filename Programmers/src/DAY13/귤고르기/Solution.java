package DAY13.귤고르기;

import java.util.*;

public class Solution {

    public static int solution(int k, int[] tangerine) {
        ArrayList<Integer> list = new ArrayList<>();
        HashMap<Integer, Integer> hash = new HashMap<>();
        int count = 0;
        int size =0;
        for(int i: tangerine) {
            hash.put(i, hash.getOrDefault(i,0)+1);
        }
        for(int i: hash.values()) {
            list.add(i);
        }
        Collections.sort(list, Collections.reverseOrder());
        for(int c: list) {
            count += c;
            size+=1;
            if(count >= k) break;
        }

        return size;
    }
    public static void main(String[] args) {
        System.out.println(solution(4,new int[]{1,3,2,5,4,5,2,3}));
    }
}
