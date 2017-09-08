import java.io.*;
import java.util.*;

public class Day9 {
    
    public static int factorial(int num) {
        if (num == 0){
            return 1;
            } else {
                return num * factorial(num-1);
        }
}

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        // Scanner scan = new Scanner(System.in);
        // int n = scan.nextInt();
        // scan.close();
        int result = factorial(4);
        System.out.println(result);
    }
}