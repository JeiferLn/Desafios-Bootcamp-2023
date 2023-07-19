package desafio2;

import java.util.Scanner;

public class Calculadora {
	private double valorA;
	private double valorB;
	private String op;
	
	public void calculadora(){}
	
	public void calculadora(double valorA, double valorB, String op) {
		this.valorA = valorA;
		this.valorB = valorB;
		this.op = op;
	}
	
	public double getValorA() {
		return valorA;
	}

	public void setValorA(double valorA) {
		this.valorA = valorA;
	}

	public double getValorB() {
		return valorB;
	}

	public void setValorB(double valorB) {
		this.valorB = valorB;
	}

	public String getOp() {
		return op;
	}

	public void setOp(String op) {
		this.op = op;
	}

	public double calculo(){
		double resul = 0;
		
		switch(op){
			case "SUM":
				resul = valorA + valorB;
				break;
			case "RES":
				resul = valorA - valorB;
				break;
			case "MUL":
				resul = valorA * valorB;
				break;
			case "DIV":
				resul = valorA / valorB;
				break;
		}
		return resul;
	}
	
	
	public static void main(String args[]){
		Calculadora calc = new Calculadora();
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Ingrese el tipo de operacion (SUM, RES, MUL, DIV): ");
		calc.setOp(sc.next());
		
		System.out.print("Ingrese el valor A: ");
		calc.setValorA(sc.nextDouble());
		
		System.out.print("Ingrese el valor B: ");
		calc.setValorB(sc.nextDouble());
		
		System.out.print("El resultado es: " + calc.calculo());
		
		sc.close();
	}
}
