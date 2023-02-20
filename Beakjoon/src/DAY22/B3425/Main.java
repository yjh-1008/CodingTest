package DAY22.B3425;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Stack;

public class Main {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Stack<Long> st = new Stack<>();
        StringBuilder sb;
        ArrayList<String> orders = new ArrayList<>();
        while(true) {
            String cmd = br.readLine();
            if(cmd.equals("QUIT")) break;
            else if(cmd.equals("END")) {

                int n = Integer.parseInt(br.readLine());

                for(int i=0;i<n;i++) {
                    st.clear();
                    boolean flag = true;
                    sb = new StringBuilder();
                    st.push(Long.parseLong(br.readLine()));
                    for(String o: orders) {
                        long a,b;
                        switch(o.split(" ")[0]) {
                            case "NUM":
                                st.push(Long.parseLong(o.split(" ")[1]));
                                break;
                            case "POP" :
                                if(st.isEmpty()){
                                    flag = false;
                                }else{
                                    st.pop();
                                }
                                break;
                            case "INV":
                                if(st.isEmpty()){
                                    flag = false;
                                }else{
                                    st.push(st.pop()*-1);
                                }
                                break;
                            case "DUP":
                                if(st.isEmpty()){
                                    flag = false;
                                }else{
                                    st.push(st.peek());
                                }
                                break;
                            case "SWP":
                                if(st.size() < 2){
                                    flag = false;
                                }else{
                                    a = st.pop();
                                    b = st.pop();
                                    st.push(a);
                                    st.push(b);
                                }
                                break;
                            case "ADD":
                                if(st.size() < 2){
                                    flag = false;
                                }else{
                                    a = st.pop();
                                    b = st.pop();
                                    if(a+b > 1000000000 || a+b < -1000000000){
                                        flag=false;
                                    }else st.push(a+b);

                                }
                                break;
                            case "SUB":
                                if(st.size() < 2) flag = false;
                                else{
                                    a = st.pop();
                                    b = st.pop();
                                    if(b-a > 1000000000 || b-a < -1000000000){
                                        flag=false;
                                    }else st.push(b-a);
                                }
                                break;
                            case "MUL":
                                if(st.size() < 2) flag = false;
                                else{
                                    a = st.pop();
                                    b = st.pop();
                                    if(a*b > 1000000000 ||a*b < -1000000000){
                                        flag=false;
                                    }else st.push(a*b);
                                }
                                break;
                            case "DIV":
                                if(st.size() < 2) flag = false;
                                else {
                                    a = st.pop();
                                    b = st.pop();
                                    int cnt = 0;
                                    if(a<0) cnt++;
                                    if(b<0) cnt++;
                                    if(a==0){
                                        flag = false;
                                    } else{
                                        long div = Math.abs(b)/Math.abs(a);
                                        if(Math.abs(div)> 1000000000){
                                            flag=false;
                                        }else {
                                            if(cnt==1) st.push(div*-1);
                                            else st.push(div);
                                        }
                                    }
                                }
                                break;
                            case "MOD":
                                if(st.size() < 2) flag = false;
                                else{
                                    a = st.pop();
                                    b = st.pop();
                                    if(a==0){
                                        flag = false;
                                    }else{
                                        long mod = Math.abs(b)%Math.abs(a);
                                        if(Math.abs(mod) > 100000000){
                                            flag=false;
                                        }else{
                                            if(b<0) st.push(mod*-1);
                                            else st.push(mod);
                                        }
                                    }
                                }
                                break;
                        }
                    }
                    if(st.size() != 1 || !flag) System.out.println("ERROR");
                    else{
                        for(long s: st) {
                            sb.append(s+"\n");
                        }
                        System.out.print(sb);
                    }
                }
                System.out.println();

                orders.clear();
            }else {
                orders.add(cmd);
            }

        }
    }
}
