package DAY34.부대복귀;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    static ArrayList<ArrayList<Integer>> roadList = new ArrayList<>();
    static int[] arr;
    public static int bfs(int n, int destination) {
        int count = Integer.MAX_VALUE;
        Arrays.fill(arr, Integer.MAX_VALUE);
        Queue<int[]> q = new LinkedList<>();
        boolean[] visited = new boolean[n+1];
        visited[destination] = true;
        q.add(new int[]{destination,0});
        boolean isArrive = false;
        while(!q.isEmpty()) {
            int[] tmp = q.poll();
            if(arr[tmp[0]] > tmp[1]) {
                arr[tmp[0]] = tmp[1];
            }
            for(int m: roadList.get(tmp[0])) {
                if(visited[m]) continue;
                visited[m] = true;
                q.offer(new int[]{m,tmp[1]+1});
            }
        }
        return isArrive ? count : -1;
    }

    public static int[] solution(int n, int[][] roads, int[] sources, int destination) {
        int[] answer = new int[sources.length];
        arr = new int[n+1];
        for(int i=0;i<=n;i++) roadList.add(new ArrayList<Integer>());

        for(int[] road: roads) {
            roadList.get(road[0]).add(road[1]);
            roadList.get(road[1]).add(road[0]);
        }

        bfs(n, destination);

        for(int i=0;i< sources.length;i++) {
            answer[i] = arr[sources[i]] == Integer.MAX_VALUE ? -1 : arr[sources[i]];
        }

        return answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(
                5, new int[][] {{1,2},{1,4},{2,4},{2,5},{4,5}}, new int[]{1,3,5},5
        ));
    }
}
