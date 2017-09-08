import java.io.*;
import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
        sc.nextLine();
		for (int i = 0; i < T; i++) {
			String S = sc.nextLine();
            char[] myCharArray = S.toCharArray();
            String evenStr = "";
            String oddStr = "";
            for (int j = 0; j < myCharArray.length; j++){
                if (j%2 == 0){
                    evenStr += myCharArray[j];
                } else {
                    oddStr += myCharArray[j];
                }
            }
            System.out.println(evenStr + " " + oddStr);
        }
        sc.close();
    }
}
