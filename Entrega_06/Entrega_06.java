package desafio1;

import java.util.Scanner;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

public class Jsonify {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        GsonBuilder gsonBuilder = new GsonBuilder();
        JsonObject jsonObject = new JsonObject();
        
        System.out.print("Numero de datos a ingresar: ");
        int cant = sc.nextInt();

        String[] data = new String[cant];

        for (int i = 0; i < data.length; i++) {
            System.out.print("Ingresa el dato " + (i + 1) + ": ");
            data[i] = sc.next();
        }
        
        gsonBuilder.disableHtmlEscaping();
        Gson gson = gsonBuilder.create();

        jsonObject.add("data", gson.toJsonTree(data));

        String jData = gson.toJson(jsonObject);
        System.out.println(jData);

        sc.close();
    }
}





