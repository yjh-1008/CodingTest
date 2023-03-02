package DAY32.B3020;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.StringTokenizer;

public class Main {
    static int count = 0, min = Integer.MAX_VALUE;
    static class Obstacle implements Comparable<Obstacle> {
        char kinds;
        int h;

        public Obstacle(char kinds, int h) {
            this.kinds = kinds;
            this.h= h;
        }

        @Override
        public int compareTo(Obstacle o) {
            return this.h-o.h;
        }
    }

    public static int binary_search(int low, int high, int h, int[]arr) {
        while(low<high) {
            int middle = (low+high)/2;
            if(arr[middle] >= h) {
                high = middle;
            }else {
                low = middle+1;
            }
        }
        return arr.length-high;
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br=  new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st =new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int h = Integer.parseInt(st.nextToken());

        int s[] = new int[n/2];
        int j[] = new int[n/2];

        for(int i=0;i<n/2;i++) {
            int n1 = Integer.parseInt(br.readLine());
            int n2 = Integer.parseInt(br.readLine());

            s[i] = n1;
            j[i] = n2;
        }

        Arrays.sort(s);
        Arrays.sort(j);

        for(int i=1;i<=h;i++) {
            int tmp = binary_search(0,n/2,i, s)+binary_search(0,n/2,h-i+1, j);

            if(tmp < min) {
                min = tmp;
                count =1;
            }else if(tmp == min) {
                count+=1;
            }
        }

        System.out.print(min+" "+count);
    }
}
