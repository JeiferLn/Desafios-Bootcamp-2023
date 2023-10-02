package entrega8;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Carrito {
	Scanner sc = new Scanner(System.in);
	List<ProductoDeAlmacen> carrito = new ArrayList<>();
	
	public void nuevoProducto() throws Excepcion{
		System.out.println("Ingrese el Nombre del Producto");
		String nombre = sc.next();
		if(nombre.isEmpty()) throw new Excepcion("Debe ingresar un Nombre");
		System.out.println("Ingrese la Cantidad del Producto");
		int cantidad = sc.nextInt();
		if(cantidad <= 0) throw new Excepcion("El numero minimo de producto a agregar debe ser 1");
		System.out.println("Ingrese el Precio del Producto");
		double precio = sc.nextDouble();
		if(precio <= 0) throw new Excepcion("El valor del producto debe ser mayor a 0");
	}
	
	public int cantidadProducto() throws Excepcion {
		if(carrito.size() <= 0) throw new Excepcion("No hay ningun producto agregado");
		else {
			return carrito.size();
		}
	}
	
	public void totalCarrito(){
		double total = 0;
		for(ProductoDeAlmacen c : carrito) {
			total += c.getPrecio();
		}
		System.out.println("El valor total de productos agregados es de: " + total);
	}
	
	public void contenidoProducto() throws Excepcion {
		int numeroProducto = 0;
		if(carrito.size() <= 0) throw new Excepcion("No hay ningun producto agregado");
		else {
			System.out.println("Tu carrito de compras esta compuesto por: ");
			for(ProductoDeAlmacen c : carrito) {
				numeroProducto++;
				System.out.println(numeroProducto + ". " + c.getNombre());
			}
		}
	}
}
