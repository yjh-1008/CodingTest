package DAY30.B1927;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    static List<Integer> list = new ArrayList<>();

    public static void swap(int child, int parent) {
        int tmp = list.get(parent);
        list.set(parent, child);
        list.set(child, tmp);
    }
    public static void insert(int num) {
        list.add(num);
        int len = list.size()-1;
        while(len > 1 && list.get(len) < list.get(len/2)) {
            swap(len, len / 2);
            len = len / 2;
        }
    }
    public static int remove() {
        int remove=  list.get(1);
        int idx = list.size()-1;
        list.set(1, list.get(idx));
        list.remove(idx);
        int len = 1;
        while(len*2 < list.size()) {
            int min = list.get(len*2);
            int minPos = len*2;
            while((len*2+1)<list.size() && min < list.get(len*2+1)) {
                min =list.get(len*2+1);
                minPos =  len*2+1;
            }
            if(list.get(len) > min) {
                swap(minPos, len);
            }
            len = minPos;
        }
        return remove;
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        list.add(Integer.MIN_VALUE);
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<n;i++) {
            int num = Integer.parseInt(br.readLine());
            if(num == 0 ) {
                if (list.size() == 1) sb.append(0).append("\n");
                else sb.append(remove()).append("\n");
            }
            else insert(num);
        }
        System.out.println(sb);
    }
}
