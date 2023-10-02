package entrega8;

public class Excepcion extends Exception {
	private String mensaje;
	
	Excepcion(String mensaje){
		setMensaje(mensaje);
	}
	
	public String getMensaje() {
		return mensaje;
	}
	
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	
}
