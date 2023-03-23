package DAY23.캐시;

import java.util.PriorityQueue;

public class Solution {
    static PriorityQueue<City> pq;
    static class City {
        String name;
        int recent = 1;

        public City(String name) {
            this.name = name;
        }
    }
    public static boolean findCity(String city) {
        if(pq.isEmpty()) return false;

        for(City c: pq) {
            if(c.name.equals(city)) {
                pq.remove(c);
                c.recent = 1;
                return true;
            }
        }
        return false;
    }

    public static int solution(int cacheSize, String[] cities) {
        int answer = 0;
        pq = new PriorityQueue<>((a,b) -> {
            return b.recent - a.recent;
        });
        for(String s: cities) {
            s = s.toLowerCase();
            if(cacheSize == 0){
                answer+=5;
                continue;
            }
            boolean chk = findCity(s);
            for(City c: pq) c.recent+=1;
            if(chk) {
                answer += 1;
            } else {
                if(pq.size() < cacheSize) {
                    answer+=5;
                }else {
                    pq.poll();
                    answer +=5;
                }
            }

            pq.offer(new City(s));
//            for(City c: pq) {
//                System.out.println(c.name+" "+c.recent);
//            }
//            System.out.println("------");
        }
        return answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(
                3,
                new String[]{"a", "b", "c", "a", "b", "d", "c"}
                ));
    }
}
