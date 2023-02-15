package DAY03.네트워크;

class Solution {
    static boolean chk[];
    static int answer;
    public void dfs(int x, int y,int n,int[][] computers) {
        chk[x] = true;
        for(int t=0;t<n;t++) {
            if(chk[t]) continue;
            if(computers[y][t] == 1) dfs(y, t, n,computers);
        }
    }
    public int solution(int n, int[][] computers) {
        answer = 0;
        chk = new boolean[n];
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                if(i == j) continue;
                if(!chk[i] && computers[i][j] == 1) {
                    answer+=1;
                    dfs(i,j,n,computers);
                }
            }
        }
        for(boolean b: chk) if(!b) answer+=1;
        return answer;
    }
}