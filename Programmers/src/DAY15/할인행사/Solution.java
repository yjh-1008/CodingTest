package DAY15.할인행사;

import java.util.HashMap;

public class Solution {
    public static int solution(String[] want, int[] number, String[] discount) {
        int answer = 0;
        HashMap<String, Integer> bucket = new HashMap<>();
        HashMap<String, Integer> sales = new HashMap<>();
        for(int i=0;i<want.length;i++) {
            bucket.put(want[i], number[i]);
        }

        for(int i=0;i<10;i++) {
            sales.put(discount[i], sales.getOrDefault(discount[i], 0)+1);
        }

        boolean chk = true;
        for(String key: bucket.keySet()) {

            if(sales.get(key) == null){
                chk = false;
                break;
            }

            if(bucket.get(key) > sales.get(key)){
                chk = false;
                break;
            }
        }

        if(chk) answer+=1;

        for(int i=0;i<discount.length-10;i++) {
            chk = true;
            String sale = discount[i];

            if(sales.get(sale) == 1) {
                sales.remove(sale);
            }else {
                sales.put(sale, sales.get(sale)-1);
            }

            sales.put(discount[10+i], sales.getOrDefault(discount[10+i],0)+1);


            for(String key: bucket.keySet()) {
                if(sales.get(key) == null){
                    chk = false;
                    break;
                }

                if(bucket.get(key) > sales.get(key)){
                    chk = false;
                    break;
                }
            }

            if(chk) answer+=1;
        }
        return answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(
                new String[] {"banana", "apple", "rice", "pork", "pot"},
                new int[] {3, 2, 2, 2, 1},
                new String[] {
                        "chicken",
                        "apple",
                        "apple",
                        "banana",
                        "rice",
                        "apple",
                        "pork",
                        "banana",
                        "pork",
                        "rice",
                        "pot",
                        "banana",
                        "apple",
                        "banana"}
        ));
    }
}
