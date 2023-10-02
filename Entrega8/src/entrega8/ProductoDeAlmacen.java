package entrega8;

public class ProductoDeAlmacen extends Producto implements IIva{
	private int cantidadProducto;

	public ProductoDeAlmacen() {}

	public ProductoDeAlmacen(int precio, String nombre, int cantidadProducto) {
		super(precio, nombre);
		this.cantidadProducto = cantidadProducto;
	}

	public int getCantidadProducto() {
		return cantidadProducto;
	}

	public void setCantidadProducto(int cantidadProducto) {
		this.cantidadProducto = cantidadProducto;
	}

	@Override
	public String toString() {
		return "ProductoDeAlmacen [cantidadProducto=" + cantidadProducto + ", getPrecio()=" + getPrecio()
				+ ", getNombre()=" + getNombre() + ", toString()=" + super.toString() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + "]";
	}

	@Override
	public double calcularIva() {
		return getPrecio() * IVA;
	}
}
