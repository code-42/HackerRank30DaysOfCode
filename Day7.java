import java.lang.String;
import java.util.*;

/**
 * Created by melocal on 4/20/17.
 */
 
public class Day7 {

    public void Solution(int[] arr){
        int[] num = new int[arr.length];
        System.out.println("arr.length == " + arr.length);
        for(int i = 0; i < num.length; i++){
            for(int j = num.length; j > 0; j--){
                num[j] = arr[i];
            }
            System.out.print(arr[i]);
        }
        System.out.println();
        System.out.println("num == " + num.toString());
    }

    public static void main(String[] args) {

        int[] arr = {1,2,3,4};

        Day7 day7 = new Day7();

        day7.Solution(arr);
    }
}