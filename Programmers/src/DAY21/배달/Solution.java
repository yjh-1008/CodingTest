package DAY21.배달;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class Solution {
    static int answer= 0 ;
    static class Point{
        int sp;
        int distance;

        public Point(int sp, int distance) {
            this.sp = sp;
            this.distance = distance;
        }
    }
    public static void dfs(int[][] map, boolean[] visited, int s,int dis, int max_dis) {
        if(dis > max_dis) return;
        for(int i=1;i<map.length;i++) {
            if(i==s) continue;
            if(map[s][i] == 0) continue;
            int move = dis+map[s][i];
            if(move <= max_dis) {
                if(!visited[i]){
                    System.out.println(s + " " + i + " " + move + " " + visited[i]);
                    if(!visited[i])answer += 1;
                    visited[i] = true;
                    dfs(map, visited, i, move, max_dis);
                    visited[i] = false;
                }
            }
        }
    }
    public static int solution(int N, int[][] road, int K) {
        int arr[][] = new int[N+1][N+1];
        boolean[] visited = new boolean[N+1];
        PriorityQueue<Point> pq = new PriorityQueue<>((a,b)-> {
            return a.distance-b.distance;
        });
        int [] distance= new int[N+1];
        for(int i=1;i<=N;i++) {
            for(int j=1;j<=N;j++) {
                arr[i][j]=500001;
            }
        }

        for(int []r: road) {
            int x = r[0];
            int y = r[1];
            int dis= r[2];
            if(arr[x][y] < dis) continue;
            arr[x][y] = dis;
            arr[y][x] = dis;
        }

        for(int i=1;i<=N;i++) {
            if(arr[1][i] != 500001) {
                distance[i] = arr[1][i];
                pq.offer(new Point(i, distance[i]));
            }else {
                distance[i] = 500001;
            }
        }
        while(!pq.isEmpty()) {
            Point p = pq.poll();
            if(visited[p.sp]) continue;
            visited[p.sp] = true;
            for(int i=1;i<=N;i++) {
                if(visited[i]) continue;
               if(distance[i] > p.distance + arr[p.sp][i]) {
                   distance[i] = p.distance + arr[p.sp][i];
                   pq.offer(new Point(i, distance[i]));
               }
            }
        }

        for(int i=2;i<=N;i++) {
            System.out.print(distance[i]+" ");
            if(distance[i] <= K) answer++;
        }

//        for(int i=1;i<=N;i++) {
//            for(int j=1;j<=N;j++){
//                for(int k=1;k<=N;k++) {
//                    if(arr[j][k] > arr[j][i] + arr[i][k]) {
//                        arr[j][k] = arr[j][i] + arr[i][k];
//                    }
//                }
//            }
//        }
//        for(int i=1;i<=N;i++) {
//            //System.out.println(arr[1][i]);
//            if(arr[1][i] <= K) answer++;
//        }
        return answer+1;
    }
    public static void main(String[] args) {
        System.out.print(solution(
                6,new int[][]{
                {1,2,1},
                {1,3,2},
                {2,3,2},
                {3,4,3},
                {3,5,2},
                {3,5,3},
                        {5,6,1},
        },4));
    }
}
