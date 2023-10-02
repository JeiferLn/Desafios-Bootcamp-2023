package entrega8;

public abstract class Producto {
	private int precio;
	private String nombre;
	
	public Producto() {}

	public Producto(int precio, String nombre) {
		this.precio = precio;
		this.nombre = nombre;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Override
	public String toString() {
		return "Producto [precio=" + precio + ", nombre=" + nombre + "]";
	}
}
