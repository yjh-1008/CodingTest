package DAY08.테이블해시함수;

import java.util.Arrays;

public class Solution {
    public static int solution(int[][] data, int col, int row_begin, int row_end) {
        int answer = 0;
        int n = data.length;
        int m = data[0].length;
        Arrays.sort(data, (a,b)-> {
            return a[col-1] == b[col-1] ? b[0]-a[0] : a[col-1] - b[col-1];
        });

        for(int i=row_begin-1;i<row_end;i++) {
            int middle = 0;
            for(int j=0;j<m;j++) {
                System.out.print(data[i][j]+" ");
                middle += data[i][j]%(i+1);
            }
            answer ^= middle;
        }

        return answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(new int[][]{{2,2,6},{1,5,10},{4,2,9},{3,8,3}}, 2,3,4));
    }
}
