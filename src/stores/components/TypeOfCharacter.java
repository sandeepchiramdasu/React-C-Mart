// java program to find type of a character
import java.util.*;
public class TypeOfCharacter {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("enter a character : ");
        char c = sc.nextLine().charAt(0);

        int a = c;
        if(a >= 97 && a<=122){
            System.out.println("Small Alphabet");
        }

        else if(a >=65 && a <= 90){
            System.out.println("Capital Alphabet");
        }

        else if(a >= 48 && a <= 57){
            System.out.println("number");
        }

        else{
            System.out.println("Special character");
        }

        sc.close();
    }
}
