package entrega8;

import java.util.Scanner;

public class AppPrincipal {
	public static void main(String[] args) throws Excepcion {
		Scanner sc = new Scanner(System.in);
		int opcion = 0;
		
		ProductoDeAlmacen aguaGas = new ProductoDeAlmacen(1250, "Agua Con Gas", 20);
		Carrito carritoDeCompra = new Carrito();
		
		carritoDeCompra.carrito.add(aguaGas);
		
		do {
			System.out.println("\nBienvenido al supermercado! "
					+ "(Ingresa un numero del 1 al 5)"
					+ "\n1. Agregar Producto"
					+ "\n2. Ver Productos agregados"
					+ "\n3. Total a Pagar"
					+ "\n4. Salir");
			opcion = sc.nextInt();
			
			try {
				if(opcion < 1 || opcion > 4) {
					System.out.println("Ingrese un valor del 1 al 5");
				}
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}
			
			switch(opcion) {
				case 1:
					carritoDeCompra.nuevoProducto();
					break;
				case 2:
					carritoDeCompra.contenidoProducto();
					break;
				case 3:
					carritoDeCompra.totalCarrito();
					break;
				default:
					System.out.println("Gracias por visitarnos");
			}
		
		} while (opcion != 4);
	}
}