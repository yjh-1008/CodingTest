package DAY22.B1202;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    static class Jewel implements Comparable<Jewel> {
        int w;
        int v;

        public Jewel(int w, int v) {
            this.w = w;
            this.v = v;
        }

        @Override
        public int compareTo(Jewel o) {
            if(this.w > o.w) return 1;
            else if(this.w == o.w) {
                return  o.v - this.v;
            }
            return -1;
        }
    }
    public static long solution(ArrayList<Integer> bags, ArrayList<Jewel> jewels) {
        long answer = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for(int i=0,j=0;i<bags.size();i++) {
            while(j<jewels.size() && jewels.get(j).w <= bags.get(i)) {
                pq.offer(jewels.get(j++).v);
            }

            if(!pq.isEmpty()) {
                answer+= pq.poll();
            }
        }
        return answer;
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        ArrayList<Jewel> list = new ArrayList<>();
        for(int i=0;i<n;i++) {
            st = new StringTokenizer(br.readLine());
            list.add(new Jewel(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken())));
        }

        ArrayList<Integer> bags = new ArrayList<>();
        for(int i=0;i<k;i++) {
            bags.add(Integer.parseInt(br.readLine()));
        }
        Collections.sort(bags);
        Collections.sort(list);

        System.out.print(solution(bags, list));
    }
}

