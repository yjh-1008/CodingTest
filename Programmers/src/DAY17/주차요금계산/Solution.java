package DAY17.주차요금계산;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class Solution {
    static class Car {
        String carNum;
        int fee;

        public Car(String carNum, int fee) {
            this.carNum = carNum;
            this.fee = fee;
        }
    }
    public static int hourToMinute(String time) {
        int minute = 0;
        String[] t = time.split(":");

        minute = (Integer.parseInt(t[0])*60) + Integer.parseInt(t[1]);
        return minute;
    }
    public static int[] solution(int[] fees, String[] records) {
        HashMap<String, Integer> hash = new HashMap<>();
        HashMap<String, Integer> hash2 = new HashMap<>();
        for(String s: records) {
            String record[] = s.split(" ");
            if(record[2].equals("IN")) {
                hash.put(record[1],hash.getOrDefault(record[1],0)+hourToMinute(record[0]));
            }else {
                int outTime = hourToMinute(record[0]);
                int inTime= hash.get(record[1]);
                if(hash2.containsKey(record[1])) {
                    hash2.put(record[1], hash2.get(record[1])+(outTime-inTime));
                }else {
                    hash2.put(record[1],(outTime-inTime));
                }
                hash.remove(record[1]);
            }
        }

        for(String key: hash.keySet()) {
            int outTime = hourToMinute("23:59");
            int inTime= hash.get(key);
            if(hash2.containsKey(key)) {
                hash2.put(key, hash2.get(key)+(outTime-inTime));
            }else {
                hash2.put(key,(outTime-inTime));
            }
        }

        String keySet[] = hash2.keySet().toArray(new String[0]);
        Arrays.sort(keySet);

        int [] answer = new int[hash2.keySet().size()];

        for(int i=0;i< keySet.length;i++) {
            int totalTime = hash2.get(keySet[i]);
            if(totalTime <= fees[0]) {
                answer[i] = fees[1];
            }else {
                totalTime -= fees[0];
                if(totalTime % fees[2] != 0) {
                    int t = (int)Math.ceil((double) totalTime/fees[2]);
                    answer[i] = fees[1] + t * fees[3];
                }else{
                    answer[i] = fees[1] + (totalTime/fees[2]) * fees[3];
                }


            }
        }

        return answer;
    }
    public static void main(String[] args) {
        int[] result = solution(new int[]{180, 5000, 10, 600}, new String[] {"05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"});
    }
}
