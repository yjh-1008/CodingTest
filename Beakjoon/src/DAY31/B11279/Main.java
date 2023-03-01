package DAY31.B11279;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {
    static ArrayList<Integer> list = new ArrayList<>();
    public static void swap(int child, int parent) {
        int tmp = list.get(child);
        list.set(child, list.get(parent));
        list.set(parent, tmp);
    }
    public static int remove() {
        int remove=  list.get(1);
        int idx = list.size()-1;
        list.set(1, list.get(idx));
        list.remove(idx);
        int len = 1;

        while(len * 2 < list.size()) {
            int max = list.get(len*2);
            int maxPos =  len*2;
            while((len*2+1) < list.size() && max < list.get(len*2+1)) {
                max = list.get(len*2+1);
                maxPos = len*2+1;
            }
            if(list.get(len) > max){
                break;
            }
            swap(maxPos, len);
            len = maxPos;
        }
        //System.out.println(remove);
        return remove;
    }
    public static void insert(int num) {
        list.add(num);
        int len = list.size()-1;
        while(len > 1 && list.get(len) > list.get(len/2)) {
            swap(len, len / 2);
            len = len / 2;
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        list.add(Integer.MIN_VALUE);
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<n;i++) {
            int num = Integer.parseInt(br.readLine());
            if(num == 0) {
                if(list.size() == 1) sb.append(0).append("\n");
                else sb.append(remove()).append("\n");
            } else insert(num);
        }
        System.out.print(sb);
    }
}
