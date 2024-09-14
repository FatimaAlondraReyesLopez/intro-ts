import { areas } from "./areas";

class volumenes extends areas{
    private altura:number;
    constructor(ladoA:number, ladoB:number, radio:number, altura:number){
        super(ladoA, ladoB, radio);
        this.altura = altura;
    }
    volumenPrismaCuadrado():number{
        return this.areaCuadrado() * this.altura;
    }
    volumenPrismaRectangular():number{
        return this.areaRectangulo() * this.altura;
    }
    volumenCilindro():number{
        return this.areaCirculo() * this.altura;
    }
    imprimirVolumenes():void{
        console.log(`Volumen Prisma Cuadrado: ${this.volumenPrismaCuadrado()}`);
        console.log(`Volumen Prisma Rectangular: ${this.volumenPrismaRectangular()}`);
        console.log(`Volumen Cilindro: ${this.volumenCilindro()}`);
    }
}

const area = new areas(8,12,8);
console.log(`Area Rectangulo: ${area.areaRectangulo()}`);
console.log(`Area Cuadrado: ${area.areaCuadrado()}`);
console.log(`Area Circulo: ${area.areaCirculo()}`);

const volumen = new volumenes(7, 10, 7, 13);
volumen.imprimirVolumenes();
