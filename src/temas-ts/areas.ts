class FiguraGeometrica {
    private tipo: string;
    private dimensiones: number[];

    constructor(tipo: string, dimension1: number) {
        this.tipo = tipo;
        this.dimensiones = [dimension1];
    }

    calcularArea(): number {
        switch (this.tipo.toLowerCase()) {
            case 'rectangulo':
                if (this.dimensiones.length === 4) {
                    const [base, altura] = this.dimensiones;
                    return base * altura;
                }
                break;
            case 'circulo':
                if (this.dimensiones.length === 1) {
                    const radio = this.dimensiones[0];
                    return 3.1416 * radio ** 2; // Aproximación de pi
                }
                break;
            case 'cuadrado':
                if (this.dimensiones.length === 1) {
                    const lado = this.dimensiones[0];
                    return lado ** 2;
                }
                break;
        }
        return 0; // Si no se reconoce la figura o las dimensiones son incorrectas
    }
}

// Ejemplo de uso
const rectangulo = new FiguraGeometrica('Rectangulo',15, 12);
const circulo = new FiguraGeometrica('Circulo', 4);
const cuadrado = new FiguraGeometrica('Cuadrado', 6);

console.log('Áreas:');
console.log('Rectángulo:', rectangulo.calcularArea());
console.log('Círculo:', circulo.calcularArea());
console.log('Cuadrado:', cuadrado.calcularArea());
