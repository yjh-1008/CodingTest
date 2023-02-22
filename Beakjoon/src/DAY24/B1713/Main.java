package DAY24.B1713;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    static class Student implements Comparable<Student> {
        int idx;
        int recommends = 0;
        int period = 0;
        boolean isIn = false;

        public Student(int idx) {
            this.idx = idx;
        }

        @Override
        public int compareTo(Student o) {
            if (this.recommends - o.recommends > 0){
                //System.out.println("Here");
                return 1;
            }
            else if (this.recommends - o.recommends == 0){
                return this.period - o.period;
            }
            else return -1;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());
        int k = Integer.parseInt(br.readLine());
        Student[] lists = new Student[101];
        List<Student> pq = new ArrayList<>();
        st = new StringTokenizer(br.readLine());
        for (int i = 1; i <= k; i++) {
            int idx = Integer.parseInt(st.nextToken());
            if(lists[idx] == null) {
                lists[idx] = new Student(idx);
                lists[idx].period = i;
            }
            if (lists[idx].isIn) {
                lists[idx].recommends+=1;
            }else {
                if (pq.size() < n) {
                    lists[idx].isIn = true;
                    lists[idx].recommends += 1;
                    lists[idx].period = i;
                    pq.add(lists[idx]);
                } else if (pq.size() == n) {
                    Student out = pq.remove(0);
                    lists[out.idx].isIn = false;
                    lists[out.idx].recommends = 0;
                    lists[out.idx].period = 0;
                    lists[idx].isIn = true;
                    lists[idx].recommends += 1;
                    lists[idx].period = i;
                    pq.add(lists[idx]);
                }
            }
            Collections.sort(pq);
        }

        ArrayList<Integer> answer = new ArrayList<>();
        for (Student s : pq) {
            answer.add(s.idx);
        }
        Collections.sort(answer);
        for(int a: answer) {
            sb.append(a).append(" ");
        }
        System.out.println(sb);
    }
}
