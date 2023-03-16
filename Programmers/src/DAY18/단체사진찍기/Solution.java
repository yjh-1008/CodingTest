package DAY18.단체사진찍기;

public class Solution {
    static String[] characters = {"A", "C", "F", "J", "M", "N", "R", "T"};
    static int answer = 0;
    public static int distance(char x, char y, String line) {
        int idx1 = -1;
        int idx2 = -1;
        for(int i=0;i<8;i++) {
            if(line.charAt(i) == x) idx1 = i;
            else if(line.charAt(i) == y) idx2 = i;
        }
        return Math.abs(idx1-idx2)-1;
    }

    public static void dfs(boolean[] visited,String line,int n ,String[] data) {
        if(line.length() == visited.length) {
            boolean chk = true;
            for(int i=0;i<n;i++) {
                char x = data[i].charAt(0);
                char y = data[i].charAt(2);
                int range = Integer.parseInt(String.valueOf(data[i].charAt(4)));
                int result;
                switch(data[i].charAt(3)) {
                    case '=':
                        result = distance(x, y, line);
                        if (result != range) chk = false;
                        break;
                    case '>':
                        result = distance(x, y, line);
                        if (result <= range) chk = false;
                        break;
                    case '<':
                        result = distance(x, y, line);
                        if (result >= range) chk = false;
                        break;
                }
                if(!chk) break;
            }
            if(chk) answer++;
        }

        for(int i=0;i<visited.length;i++) {
            if(visited[i]) continue;
            visited[i] = true;
            String tmp = line;
            tmp += characters[i];
            dfs(visited, tmp,n,data);
            visited[i] = false;
        }
    }

    public static int solution(int n, String[] data) {
        int ans = 0;
        answer = 0;
        boolean[] visited = new boolean[characters.length];
        dfs(visited,"",n, data);
        return answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(2, new String[]{"N~F=0","R~T>2"}));
    }
}
