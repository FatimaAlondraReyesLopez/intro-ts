export class areas{
    protected ladoA:number;
    protected ladoB:number;
    protected radio:number;
    constructor(ladoA:number,ladoB:number,radio:number){
        this.ladoA=ladoA;
        this.ladoB=ladoB;
        this.radio=radio;
    }
    areaCuadrado():number{
        return this.ladoA * this.ladoA;
    }
    areaRectangulo():number{
        return this.ladoA * this.ladoB;
    }
    areaCirculo():number{
        return Math.PI * Math.pow(this.radio,2);
    }
}