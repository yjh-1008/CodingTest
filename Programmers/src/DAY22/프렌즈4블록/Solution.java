package DAY22.프렌즈4블록;

public class Solution {
    static int[] toX={1,0,1},toY={0,1,1};
    static boolean[][] visited;
    static String[][] map;
    static int count = 0;
    static void drawNewMap(int m, int n ){
        for(int i=0;i<m;i++) {
            for(int j=0;j<n;j++) {
                if(visited[i][j]) {
                    count+=1;
                    for(int k=i-1;k>=0;k--) {
                        map[k+1][j] = map[k][j];
                        map[k][j]=" ";
                    }
                }
            }
        }

       for(int i=0;i<m;i++) {
           for(int j=0;j<n;j++) {
               System.out.print(map[i][j]+" ");
            }
            System.out.println();
        }
       System.out.println();
    }
    public static boolean draw(String[][] map, int x, int y,int m, int n) {
        boolean chk = true;
        String c = map[x][y];
        if(map[x][y].equals(" ")){
            return false;
        }
        for(int i=0;i<3;i++) {
            int mx = x+toX[i];
            int my = y+toY[i];
            if(mx < 0 || mx >= m || my <0 || my>=n) {
                chk = false;
                break;
            }
            if(!c.equals(map[mx][my])) {
                chk = false;
                break;
            }
        }
        return chk;

    }
    public static int solution(int m, int n, String[] board) {
        int answer = 0;

        map = new String[m][n];

        for(int i=0;i<m;i++) {
            map[i] = board[i].split("");
        }
        boolean flag = true;
        while(flag) {
            visited = new boolean[m][n];
            flag = false;
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if(map[i][j].equals(" ")) continue;
                    if(draw(map, i, j, m, n)) {
                        visited[i][j] = true;
                        for (int k = 0; k < 3; k++) visited[i + toX[k]][j + toY[k]] = true;
                        flag = true;
                    }
                }
            }
            if(!flag) break;
            drawNewMap(m, n);
        }
        System.out.println(count);
        return count;
    }

    public static void main(String[] args) {
        solution(4,
                5,
                  new String[]{
                          "CCBDE", "AAADE", "AAABF", "CCBBF"
                  }
                );
    }
}
