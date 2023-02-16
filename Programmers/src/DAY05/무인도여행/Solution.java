package DAY05.무인도여행;

import java.util.*;
class Solution {
    static int toY[]={0,0,-1,1}, toX[]={1,-1,0,0};
    static class Point {
        int y;
        int x;
        Point(int y, int x) {
            this.y=y;
            this.x = x;
        }
    }
    static int[] answer;
    static boolean chk[][];
    static int n,m;
    public int bfs(String[][] maps, int s, int e) {
        int sum = Integer.parseInt(maps[s][e]);
        Queue<Point> q = new LinkedList<>();
        q.offer(new Point(s, e));
        while(!q.isEmpty()) {
            Point p = q.poll();
            for(int i=0;i<4;i++){
                int my = p.y+ toY[i];
                int mx = p.x+ toX[i];
                if(my < 0 || my>=n || mx<0 || mx>=m) continue;
                if(chk[my][mx]) continue;
                if(maps[my][mx].equals("X")) continue;
                chk[my][mx] = true;
                q.offer(new Point(my, mx));
                sum += Integer.parseInt(maps[my][mx]);
            }
        }
        return sum;
    }
    public int[] solution(String[] maps) {
        ArrayList<Integer> list = new ArrayList<>();
        n = maps.length;
        m = maps[0].length();
        String[][] cp = new String[n][m];
        chk = new boolean[n][m];
        for(int i=0;i<n;i++) {
            cp[i] = maps[i].split("");
        }
        for(int i=0;i<n;i++) {
            for(int j=0;j<m;j++) {
                if(chk[i][j]) continue;
                if(cp[i][j].equals("X")) continue;
                chk[i][j] = true;
                System.out.println(cp[i][j]);
                list.add(bfs(cp, i,j));
            }
        }

        if(list.isEmpty()) answer = new int[]{-1};
        else {
            Collections.sort(list);
            answer = new int[list.size()];
            for (int i = 0; i < list.size(); i++) {
                answer[i] = list.get(i);
            }
        }
        return answer;
    }
}