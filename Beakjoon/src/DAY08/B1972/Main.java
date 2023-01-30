package DAY08.B1972;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;

public class Main {
    static StringBuilder sb = new StringBuilder();
    static HashSet<String> hash;
    public static boolean solution(String cmd) {
        char[] arr = cmd.toCharArray();

        boolean chk = false;
        for(int i =1; i<=arr.length; i++) {
            hash = new HashSet<>();
            for(int j=0; j+i < arr.length; j++) {
                String str = String.valueOf(arr[j])+String.valueOf(arr[j+i]);
               if(hash.contains(str)) return false;
               else hash.add(str);
            }
        }
        return true;
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while(true) {
            String command = br.readLine();
            if(command.equals("*")) {
                System.out.print(sb);
                return;
            }

            if(solution(command)) sb.append(command+" is surprising.\n");
            else sb.append(command+" is NOT surprising.\n");
        }
    }
}
