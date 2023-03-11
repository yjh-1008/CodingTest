package DAY11.호텔대실;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Solution {
    static class Time{
        int s;
        int e;
        int roomNum;
        public Time(int s, int e,int roomNum) {
            this.s = s;
            this.e = e;
            this.roomNum = roomNum;
        }

    }

    public static int solution(String[][] book_time) {
        int answer = 0;
        //끝시간 안에 포함되어 있다면 예약 불가.


        int [][] times = new int[book_time.length][2];
        int roomCnt = 1;
        for(int i=0;i<book_time.length;i++) {
            String[] start = book_time[i][0].split(":");
            String[] end = book_time[i][1].split(":");
            int s = Integer.parseInt(start[0]) * 60 + Integer.parseInt(start[1]);
            int e = Integer.parseInt(end[0]) * 60 + Integer.parseInt(end[1])+10;
            times[i][0] = s;
            times[i][1] = e;
        }

        Arrays.sort(times, ((o1, o2) -> {
            if(o1[0] > o2[0]) {
                return 1;
            }else if(o1[0] == o2[0]) {
                return o1[1] - o2[1];
            }else {
                return -1;
            }
        }));
        PriorityQueue<Time> pq = new PriorityQueue<>(new Comparator<Time>() {
            @Override
            public int compare(Time o1, Time o2) {
                return o1.roomNum - o2.roomNum;
            }
        });
        for(int[] time: times) {
            if(pq.isEmpty()) {
                pq.offer(new Time(time[0],time[1],roomCnt));
                roomCnt++;
                continue;
            }
            boolean chk = false;
            for(Time t: pq) {
                System.out.println(t.e+" "+time[0]);
                if(t.e <= time[0]) {
                    t.e = time[1];
                    chk = true;
                    break;
                }
            }
            if(!chk){
                pq.offer(new Time(time[0],time[1],roomCnt));
                roomCnt++;
            }

        }
        return pq.size();
    }

    public static void main(String[] args) {
        System.out.print(solution(new String[][]{{"15:00","17:00"},{"16:40","18:20"},
                {"14:20","15:20"},{"14:10","19:20"},{"18:20","21:20"}}));
    }
}
