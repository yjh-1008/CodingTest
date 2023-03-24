package DAY24.방금그곡;

import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    public static int hourToMinute(String[] startTime, String[] endTime) {
        int start = Integer.parseInt(startTime[0])*60 + Integer.parseInt(startTime[1]);
        int end = Integer.parseInt(endTime[0])*60 + Integer.parseInt(endTime[1]);

        return end - start;
    }
    public static String change(String music) {
        music = music.replaceAll("C#","c");
        music = music.replaceAll("D#","d");
        music = music.replaceAll("F#","f");
        music = music.replaceAll("G#","g");
        music = music.replaceAll("A#","a");
        return music;
    }
    public static String solution(String m, String[] musicinfos) {
        String answer = "(None)";
        Queue<Character> q = new LinkedList<>();
        Queue<Character> mq = new LinkedList<>();
        m = change(m);
        int maxTime = 0;
        StringBuilder sb = new StringBuilder();
        for(String musicInfo: musicinfos) {
            String infos[] = musicInfo.split(",");
            String startTime[] = infos[0].split(":");
            String endTime[] = infos[1].split(":");
            String title = infos[2];
            String lyrics = infos[3];
            lyrics = change(lyrics);
            int playTime = hourToMinute(startTime, endTime);

            int count = 0;
            int idx = 0;
            String ly = "";
            while(lyrics.length() < playTime) {
                lyrics += lyrics;
            }
            lyrics = lyrics.substring(0, playTime);
            if(lyrics.contains(m)){
                maxTime = playTime;
                answer = title;
            }

        }
        return answer;
    }

    public static void main(String[] args) {
        System.out.print(solution(
                "ABCDEFG",
                new String[] {
                        "12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"
                }
        ));
    }
}
