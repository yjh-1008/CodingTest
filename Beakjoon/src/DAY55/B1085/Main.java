package DAY55.B1085;

import java.util.Scanner;
public class Main{
    public static void main(String args[] ) {
        Scanner sc=new Scanner(System.in);
        int x=sc.nextInt();
        int y=sc.nextInt();
        int w=sc.nextInt();
        int h=sc.nextInt();
        int min=Math.min(x,y);
        int min1=Math.min(Math.abs(x-w), Math.abs(y-h));
        System.out.print(Math.min(min, min1));

    }
}
