package DAY12.혼자서하는틱택토;

public class Solution {
    static int toX[] = {-1,0,1,1,1,0,-1,-1}, toY[]={1,1,1,0,-1,-1,-1,0};
    static int chk1 = 0, chk2 = 0;
    public static int solution(String[] board) {
        int answer = 1;
        String[][] arr = new String[3][3];
        int cnt1=0;
        int cnt2= 0;
        for(int i=0;i<3;i++) {
            String[] tmp = board[i].split("");
            for(int j=0;j<3;j++) {
                arr[i][j] = tmp[j];
                if(tmp[j].equals("O")) {
                    cnt1+=1;
                }else if(tmp[j].equals("X")) {
                    cnt2+=1;
                }
            }
        }
        for(int i=0;i<3;i++) {
                if(arr[i][0].equals("X") || arr[i][0].equals("O")){
                    //가로
                    if(arr[i][0].equals(arr[i][1]) && arr[i][0].equals(arr[i][2])) {
                        if (arr[i][0].equals("X")) chk2 += 1;
                        else chk1 += 1;
                    }
            }
        }

        for(int i=0;i<3;i++) {
            if(arr[0][i].equals("X") || arr[0][i].equals("O")){
                //세로
                if(arr[0][i].equals(arr[1][i]) && arr[0][i].equals(arr[2][i])) {
                    if (arr[0][i].equals("X")) chk2 += 1;
                    else chk1 += 1;
                }
            }
        }

        //대각선
        if(arr[0][0].equals("X") || arr[0][0].equals("O")) {
            if(arr[0][0].equals(arr[1][1]) && arr[0][0].equals(arr[2][2])) {
                if (arr[0][0].equals("X")) chk2 += 1;
                else chk1 += 1;
            }
        }

        if(arr[0][2].equals("X") || arr[0][2].equals("O")) {
            if(arr[0][2].equals(arr[1][1]) && arr[0][2].equals(arr[2][0])) {
                if (arr[0][0].equals("X")) chk2 += 1;
                else chk1 += 1;
            }
        }

        if(chk1+chk2> 1){
            if(chk1 <= 1 || cnt1 - cnt2 != 1) {
                return 0;
            }
        }
        if(chk1 == 1 && chk2 ==1) return 0;
        if(chk1 == 1 && cnt1 == cnt2) return 0;
        if(chk2 == 1 && cnt1 >  cnt2) return 0;
        if(cnt1 > cnt2+1) return 0;
        if(cnt2 > cnt1 ) return 0;

        return answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(new String[]{"OOO","...","XXX"}));
    }
}
