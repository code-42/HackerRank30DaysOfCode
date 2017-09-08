import java.util.*;
import java.math.*;

public class Arithmetic {
    
    double mealCost = 85.55;
    int tipPercent = 10;
    int taxPercent = 7;
    
    public Arithmetic(double mealCost, int tipPercent, int taxPercent){
        System.out.println("Day2.line11 == " + mealCost * tipPercent + taxPercent);
    }

    public static void main(String[] args) {
        // Scanner scan = new Scanner(System.in);
        // double mealCost = scan.nextDouble(); // original meal price
        // int tipPercent = scan.nextInt(); // tip percentage
        // int taxPercent = scan.nextInt(); // tax percentage
        // scan.close();
      
        // Write your calculation code here.
        
      
        // cast the result of the rounding operation to an int and save it as totalCost 
        // int totalCost = (int) Math.round(/*numberToRoundHere*/);
      
        // Print your result
        Arithmetic payThis = new Arithmetic(50,10,7);
         
        System.out.println("Day2.line11 == " + mealCost * tipPercent + taxPercent);
    }
}
